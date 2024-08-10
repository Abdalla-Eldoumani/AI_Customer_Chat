import { NextResponse, NextRequest } from 'next/server';
import prismadb from '@/lib/prismadb';
import { getAuth } from '@clerk/nextjs/server';
import { clerkClient } from '@clerk/nextjs/server';

export async function POST(req: NextRequest) {
  const authHeader = req.headers.get('Authorization');
  console.log("Authorization Header:", authHeader);
  console.log("API Route Hit");

  const { userId } = getAuth(req);

  if (!userId) {
    console.log("Unauthorized: No user ID found");
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const user = await clerkClient.users.getUser(userId);
    console.log("User Fetched from Clerk:", user);

    if (!user) {
      console.log("User not found in Clerk");
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const existingUser = await prismadb.user.findUnique({
      where: { email: user.emailAddresses[0].emailAddress },
    });

    if (existingUser) {
      console.log("User already exists in the database:", existingUser);
      return NextResponse.json(existingUser, { status: 200 });
    }

    const newUser = await prismadb.user.create({
      data: {
        email: user.emailAddresses[0].emailAddress,
        name: user.firstName || 'Anonymous',
      },
    });

    console.log("New User Created in Database:", newUser);

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error("Error syncing user:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}