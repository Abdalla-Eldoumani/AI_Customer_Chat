import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/lib/prismadb';
import { getAuth } from '@clerk/nextjs/server';
import { clerkClient } from '@clerk/nextjs/server';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("API Route Hit");

  const { userId } = getAuth(req);

  if (!userId) {
    console.log("Unauthorized: No user ID found");
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const user = await clerkClient.users.getUser(userId);
    console.log("User Fetched from Clerk:", user);

    if (!user) {
      console.log("User not found in Clerk");
      return res.status(404).json({ error: 'User not found' });
    }

    const existingUser = await prismadb.user.findUnique({
      where: { email: user.emailAddresses[0].emailAddress },
    });

    if (existingUser) {
      console.log("User already exists in the database:", existingUser);
      return res.status(200).json(existingUser);
    }

    const newUser = await prismadb.user.create({
      data: {
        email: user.emailAddresses[0].emailAddress,
        name: user.firstName || 'Anonymous',
      },
    });

    console.log("New User Created in Database:", newUser);

    return res.status(201).json(newUser);
  } catch (error) {
    console.error("Error syncing user:", error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}