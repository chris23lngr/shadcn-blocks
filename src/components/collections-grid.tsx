import type { CategoryMetadata, CollectionMetadata } from '@/lib/types';
import { cn } from '@/lib/utils';
import React from 'react';
import { CollectionThumbnail } from './collection-thumbnail';

interface CollectionsGridProps extends React.HTMLAttributes<HTMLDivElement> {
  category: CategoryMetadata;
  collections: CollectionMetadata[];
}

const CollectionsGrid = React.forwardRef<HTMLDivElement, CollectionsGridProps>(
  (props, ref) => {
    const { collections, category, className, ...otherProps } = props;

    return (
      <section
        id={`${category.id ? category.id : 'category'}-collections-grid`}
        ref={ref}
        className={cn('scroll-m-20', className)}
        {...otherProps}
      >
        <div className="container grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {collections.map((collection) => {
            return (
              <CollectionThumbnail
                key={collection.id}
                categoryId={category.id}
                collection={collection}
              />
            );
          })}
        </div>
      </section>
    );
  }
);
CollectionsGrid.displayName = 'CollectionsGrid';

export { CollectionsGrid };
