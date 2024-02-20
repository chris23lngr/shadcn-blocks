'use client';

import { Button } from '@/components/ui/button';
import { HomeIcon, ReloadIcon } from '@radix-ui/react-icons';
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
    <section id="error">
      <div className="container flex min-h-[60vh] w-full flex-col items-center justify-center gap-3">
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
          <Button
            variant={'outline'}
            className="mt-4"
            onClick={() => {
              router.push('/');
            }}
          >
            Go home
            <HomeIcon className="ms-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
