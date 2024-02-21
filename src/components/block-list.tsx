import { BlockMetadata } from '@/lib/types';
import { cn } from '@/lib/utils';
import React from 'react';
import { BlockPreview } from './block-preview';

interface BlockListProps extends React.HTMLAttributes<HTMLDivElement> {
  categoryId: string;
  collectionId: string;
  blocks: Partial<BlockMetadata>[];
}

const BlockList = React.forwardRef<HTMLDivElement, BlockListProps>(
  (props, ref) => {
    const {
      categoryId,
      collectionId,
      blocks,
      children,
      className,
      ...otherProps
    } = props;
    return (
      <section ref={ref} className={cn('', className)} {...otherProps}>
        <div className="container">
          {blocks.map((block, index) => {
            return (
              <BlockPreview
                key={`index-${index}`}
                blockMetadata={block}
                categoryId={categoryId}
                collectionId={collectionId}
              />
            );
          })}
        </div>
      </section>
    );
  }
);
BlockList.displayName = 'BlockList';

export { BlockList };
