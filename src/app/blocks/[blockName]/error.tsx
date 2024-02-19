'use client';

import { Button } from '@/components/ui/button';
import { ReloadIcon } from '@radix-ui/react-icons';
import { useRouter } from 'next/navigation';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-3">
      <p className="max-w-prose text-center text-xl font-semibold text-foreground">
        Unexpected server error.
      </p>
      <p className="max-w-prose text-center text-base text-muted-foreground">
        Something went wrong when loading this block. {error.message}
      </p>
      <div className="flex flex-wrap gap-3">
        <Button variant={'default'} className="mt-4" onClick={reset}>
          Retry
          <ReloadIcon className="ms-2 h-4 w-4" />
        </Button>
        {/**
         * TODO: Implement functionality to go back to the home page but skip iframe
         */}
        {/* <Button
          variant={'outline'}
          className="mt-4"
          onClick={() => {
            router.push('/');
          }}
        >
          Go home
          <HomeIcon className="ms-2 h-4 w-4" />
        </Button> */}
      </div>
    </div>
  );
}
