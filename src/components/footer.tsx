import { config } from '@/lib/config';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

const Footer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { className, ...otherProps } = props;
  return (
    <footer ref={ref} className={cn('py-24', className)} {...otherProps}>
      <div className="container grid grid-cols-4 gap-8"></div>
      <div className="container">
        <p className="mx-auto max-w-prose text-center text-xs text-muted-foreground">
          © Christoph Langer 2024. All rights reserved. This product is
          published under the{' '}
          <Link
            className="underline"
            href={`${config.repository.url}/blob/master/LICENSE`}
          >
            MIT license.
          </Link>
        </p>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export { Footer };
