import { CategoryMetadata, CollectionMetadata } from '@/lib/types';
import { cn } from '@/lib/utils';
import React from 'react';
import { BreadCrumbs, Crumb } from './breadcrumbs';

interface CollectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  collection: Partial<CollectionMetadata>;
  category: Partial<CategoryMetadata>;
}

const CollectionHeader = React.forwardRef<
  HTMLDivElement,
  CollectionHeaderProps
>((props, ref) => {
  const { category, collection, children, className, ...otherProps } = props;
  return (
    <section
      id={`${collection.id ? collection.id : 'collection'}-header`}
      ref={ref}
      className={cn('', className)}
      {...otherProps}
    >
      <div className="container">
        <BreadCrumbs className="mb-8">
          <Crumb href="/">Home</Crumb>
          <Crumb href={`/${category.id}`}>{category.label}</Crumb>
          <Crumb href={'#'}>{collection.label}</Crumb>
        </BreadCrumbs>
        <p className="mb-3 text-4xl font-semibold text-foreground">
          {collection.label}
        </p>
        {collection.description && (
          <p className="max-w-prose text-base text-muted-foreground">
            {collection.description}
          </p>
        )}
      </div>
    </section>
  );
});
CollectionHeader.displayName = 'CollectionHeader';

export { CollectionHeader };
