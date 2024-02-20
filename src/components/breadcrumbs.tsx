import { cn } from '@/lib/utils';
import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const BreadCrumbs = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('-ml-1.5 flex items-center justify-start gap-1', className)}
    {...props}
  />
));
BreadCrumbs.displayName = 'BreadCrumbs';

const Crumb = React.forwardRef<
  HTMLAnchorElement,
  React.HTMLAttributes<HTMLAnchorElement> & { href: string }
>(({ className, ...props }, ref) => (
  <>
    <Link
      ref={ref}
      className={cn(
        'rounded px-1.5 py-0.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground',
        className
      )}
      {...props}
    />
    <ChevronRightIcon className="h-4 w-4 text-muted-foreground last:invisible last:hidden" />
  </>
));

export { BreadCrumbs, Crumb };
