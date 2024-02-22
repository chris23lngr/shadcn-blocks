'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const router = useRouter();

  return (
    <section className="flex min-h-[55vh] items-center justify-center">
      <div className="text-center">
        <p className="mb-3 max-w-prose text-lg font-semibold text-foreground">
          Something went wrong.
        </p>
        <p className="max-w-prose text-base text-muted-foreground">
          {JSON.stringify(error)}
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Button onClick={() => reset()}>Try again</Button>
          <Button onClick={() => router.push('/')} variant={'outline'}>
            Go Home
          </Button>
        </div>
      </div>
    </section>
  );
}
