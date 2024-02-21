import { CollectionMetadata } from '@/lib/types';
import { cn } from '@/lib/utils';
import React from 'react';

interface CollectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  collection: Partial<CollectionMetadata>;
}

const CollectionHeader = React.forwardRef<
  HTMLDivElement,
  CollectionHeaderProps
>((props, ref) => {
  const { collection, children, className, ...otherProps } = props;
  return (
    <section
      id={`${collection.id ? collection.id : 'collection'}-header`}
      ref={ref}
      className={cn('', className)}
      {...otherProps}
    >
      <div className="container">
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
