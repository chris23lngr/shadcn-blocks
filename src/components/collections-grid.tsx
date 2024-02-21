import { CollectionMetadata } from '@/lib/types';
import { cn } from '@/lib/utils';
import React from 'react';
import { CollectionThumbnail } from './collection-thumbnail';

interface CollectionsGridProps extends React.HTMLAttributes<HTMLDivElement> {
  category: Partial<CollectionMetadata>;
  collections: Partial<CollectionMetadata>[];
}

const CollectionsGrid = React.forwardRef<HTMLDivElement, CollectionsGridProps>(
  (props, ref) => {
    const { collections, category, children, className, ...otherProps } = props;

    if (category.id === undefined) {
      throw new Error('Category ID is required');
    }

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
                // @ts-ignore Fix: field id is checked in the if statement above
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
