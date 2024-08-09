"use client";

import { SignIn, useAuth } from "@clerk/nextjs";
import { useEffect } from 'react';
import axios from 'axios';

export default function Page() {
  const { userId } = useAuth();

  useEffect(() => {
    if (userId) {
      axios.post('/api/syncUser')
        .then(response => {
          console.log('User synced:', response.data);
        })
        .catch(error => {
          console.error('Error syncing user:', error);
        });
    }
  }, [userId]);

  return <SignIn />;
}