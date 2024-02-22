import { CategoryMetadata } from '@/lib/types';
import { cn } from '@/lib/utils';
import React from 'react';
import { BreadCrumbs, Crumb } from './breadcrumbs';

interface CategoryHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  category: Partial<CategoryMetadata>;
}

const CategoryHeader = React.forwardRef<HTMLDivElement, CategoryHeaderProps>(
  (props, ref) => {
    const { category, children, className, ...otherProps } = props;
    return (
      <section
        id={`${category.id ? category.id : 'collection'}-header`}
        ref={ref}
        className={cn('', className)}
        {...otherProps}
      >
        <div className="container">
          <BreadCrumbs className="mb-8">
            <Crumb href="/">Home</Crumb>
            <Crumb href={'#'}>{category.label}</Crumb>
          </BreadCrumbs>

          <p className="mb-3 text-4xl font-semibold text-foreground">
            {category.label}
          </p>
          {category.description && (
            <p className="max-w-prose text-base text-muted-foreground">
              {category.description}
            </p>
          )}
        </div>
      </section>
    );
  }
);
CategoryHeader.displayName = 'CategoryHeader';

export { CategoryHeader };
