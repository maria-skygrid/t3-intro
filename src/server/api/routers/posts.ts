import { clerkClient } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/dist/types/server";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, privateProcedure, publicProcedure } from "~/server/api/trpc";

// custom function to filter user properties
const filterUser = (user: User) => {
  return {
    id: user.id, 
    username: user.username,
    imageUrl: user.imageUrl
  }
}

export const postRouter = createTRPCRouter({
  index: publicProcedure.query(async({ ctx }) => {
    const posts = await ctx.db.post.findMany({
      take: 100,
    });

    // use clerk client to get authorId from each post
    const users = (
      await clerkClient.users.getUserList({
        // posts配列のuserIdのみゲットする。
        userId: posts.map((post) => post.authorId), 
        limit: 100
      })
    ).map(filterUser)

    // return object with post and its authorID
    return posts.map((post) => {
      const author = users.find((user) => user.id === post.authorId)
      
      if (!author) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "No author was found for this post"
        })
      }

      return {
        post, 
        author,
      };
    })
  }),

  // if it is a privateProcedure, we know FOR SURE that the user exists. 
  // === the user is authenticated

  // To create the post, the user needs to pass this input validation
  create: privateProcedure
    .input(
      z.object({
        content: z.string().min(1).max(255)
      })
    )
    .mutation( async ({ ctx, input }) => {
    const authorId = ctx.currentUser.id

    const post = await ctx.db.post.create({
      data: {
        authorId, 
        content: input.content
      }
    });

    return post;
  }),

});


//About clerkClient:
//https://clerk.com/docs/references/backend/overview?utm_source=www.google.com&utm_medium=referral&utm_campaign=none

//About TRPC errors:
//https://trpc.io/docs/server/error-handling

//Rails API
//https://qiita.com/k-penguin-sato/items/adba7a1a1ecc3582a9c9