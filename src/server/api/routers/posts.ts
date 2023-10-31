import { clerkClient } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/dist/types/server";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, privateProcedure, publicProcedure } from "~/server/api/trpc";

const modelProcedure = publicProcedure

// custom function to filter user properties
const filterUser = (user: User) => {
  return {
    id: user.id, 
    username: user.username,
    imageUrl: user.imageUrl
  }
}

export const postRouter = createTRPCRouter({
  index: modelProcedure.query(async({ ctx }) => {
    const posts = await ctx.db.post.findMany({
      take: 100,
      orderBy: {
        createdAt: "desc"
      }
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
  // ZOD for validation
  create: privateProcedure
    .input(z.object({ content: z.string()
      .min(1, {message: "Must be at least one character long!"})
      .max(255, {message: "Only 255 characters allowed!"}) }))
    .mutation(async ({ ctx, input }) => {
      const authorId = ctx.userId
      // Create a new post in the database
      // new endpoint
      const post = await ctx.db.post.create({
      data: {
        authorId, 
        content: input.content
      }
    });

    return post;
  }),

  delete: privateProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input}) => {
      const postId = input.id

      const post = await ctx.db.post.findUnique({ where: {id: postId}})

      if (!post) {
        throw new TRPCError({
          code: "NOT_FOUND", 
          message: "There is no post"
        })
      }

      await ctx.db.post.delete({where: {id: postId}})

      return post
    })

});


//About clerkClient:
//https://clerk.com/docs/references/backend/overview?utm_source=www.google.com&utm_medium=referral&utm_campaign=none

//About TRPC errors:
//https://trpc.io/docs/server/error-handling

//Rails API
//https://qiita.com/k-penguin-sato/items/adba7a1a1ecc3582a9c9

//ZOD validator
// https://zod.dev/?id=introduction