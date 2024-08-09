// app/page.tsx
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Loading from '@/components/Loading';

const CustomerSupportApp = dynamic(() => import('@/components/CustomerSupportApp'), {
  loading: () => <Loading />,
});

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Suspense fallback={<Loading />}>
        <CustomerSupportApp />
      </Suspense>
    </main>
  );
}