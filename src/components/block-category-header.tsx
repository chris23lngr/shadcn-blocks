import { cn } from '@/lib/utils';
import React from 'react';
import { BreadCrumbs, Crumb } from './breadcrumbs';

interface BlockCategoryHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  crumbs: {
    name: string;
    href: string;
  }[];

  title: string;
}

const BlockCategoryHeader = React.forwardRef<
  HTMLDivElement,
  BlockCategoryHeaderProps
>((props, ref) => {
  const { title, crumbs, className, ...otherProps } = props;

  return (
    <section className={cn('w-full py-6', className)} ref={ref} {...otherProps}>
      <div className="container">
        <BreadCrumbs>
          {crumbs.map((crumb) => {
            return (
              <Crumb key={crumb.href} href={crumb.href}>
                {crumb.name}
              </Crumb>
            );
          })}
        </BreadCrumbs>
        <p className="mt-4 text-3xl font-semibold text-foreground">{title}</p>
      </div>
    </section>
  );
});

BlockCategoryHeader.displayName = 'BlockCategoryHeader';
export { BlockCategoryHeader };
