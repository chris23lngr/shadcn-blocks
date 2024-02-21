import { cn } from '@/lib/utils';
import React from 'react';

const TWIndicator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { className, ...otherProps } = props;

  return (
    <div
      className={cn('fixed bottom-10 left-10', className)}
      ref={ref}
      {...otherProps}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 p-1 font-medium text-white">
        <p className="block sm:hidden">SM</p>
        <p className="hidden sm:block md:hidden">MD</p>
        <p className="hidden md:block lg:hidden">LG</p>
        <p className="hidden lg:block xl:hidden">XL</p>
        <p className="hidden xl:block 2xl:hidden">2XL</p>
        <p className="hidden 2xl:block">{'>'}2XL</p>
      </div>
    </div>
  );
});

TWIndicator.displayName = 'TWIndicator';
export { TWIndicator };
