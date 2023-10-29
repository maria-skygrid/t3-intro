import { clerkClient } from "@clerk/nextjs";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const modelProcedure = publicProcedure

export const profileRouter = createTRPCRouter({
  getUserByUsername: modelProcedure.input(z.object({
    username: z.string()
  }))
  .query( async({input: {username}}) => {
    const [user] = await clerkClient.users.getUserList({
      username: [username],
    });

    if (!user) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "User not found",
      });
    }

    return user;

  })
});
