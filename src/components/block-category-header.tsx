import { cn } from '@/lib/utils';
import React from 'react';
import { BreadCrumbs, Crumb } from './breadcrumbs';

interface BlockCategoryHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const BlockCategoryHeader = React.forwardRef<
  HTMLDivElement,
  BlockCategoryHeaderProps
>((props, ref) => {
  const { className, ...otherProps } = props;

  return (
    <section className={cn('w-full py-6', className)} ref={ref} {...otherProps}>
      <div className="container">
        <BreadCrumbs>
          <Crumb>Components</Crumb>
          <Crumb>Hero Component</Crumb>
          <Crumb>Hero Component</Crumb>
        </BreadCrumbs>
        <p className="mt-4 text-3xl font-semibold text-foreground">
          Hero Components
        </p>
      </div>
    </section>
  );
});

BlockCategoryHeader.displayName = 'BlockCategoryHeader';
export { BlockCategoryHeader };
