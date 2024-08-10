"use client";

import { SignIn, useAuth } from "@clerk/nextjs";
import { useEffect } from 'react';
import axios from 'axios';

export default function Page() {
  const { userId, getToken } = useAuth();

  useEffect(() => {
    const syncUser = async () => {
      if (userId) {
        try {
          const sessionToken = await getToken();

          const response = await axios.post('/api/syncUser', {}, {
            headers: {
              Authorization: `Bearer ${sessionToken}`,
            },
          });

          console.log('User synced:', response.data);
        } catch (error) {
          console.error('Error syncing user:', error);
        }
      }
    };

    syncUser();
  }, [userId, getToken]);

  return <SignIn />;
}