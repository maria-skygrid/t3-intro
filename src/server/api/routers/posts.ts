import { clerkClient } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/dist/types/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

// custom function to filter user properties
const filterUser = (user: User) => {
  return {
    id: user.id, 
    username: user.username,
    imageUrl: user.imageUrl
  }
}

export const postRouter = createTRPCRouter({
  getAll: publicProcedure.query(async({ ctx }) => {
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
    return posts.map((post) => ({
      post, 
      author: users.find((user) => user.id === post.authorId)
    }))
    
  }),
});


//About clerkClient:
//https://clerk.com/docs/references/backend/overview?utm_source=www.google.com&utm_medium=referral&utm_campaign=none