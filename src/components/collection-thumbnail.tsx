import { CollectionMetadata } from '@/lib/types';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';

interface CollectionThumbnailProps
  extends React.HTMLAttributes<HTMLDivElement> {
  categoryId: string;
  collection: Partial<CollectionMetadata>;
}

const CollectionThumbnail = React.forwardRef<
  HTMLDivElement,
  CollectionThumbnailProps
>((props, ref) => {
  const { categoryId, collection, children, className, ...otherProps } = props;
  return (
    <Link href={`/${categoryId}/${collection.id}`}>
      <Card ref={ref} className={cn('', className)} {...otherProps}>
        <CardHeader>
          <CardTitle>{collection.label}</CardTitle>
          {collection.description && (
            <CardDescription>{collection.description}</CardDescription>
          )}
          <CardContent>
            <p>THIS IS THE CONTENT</p>
          </CardContent>
        </CardHeader>
      </Card>
    </Link>
  );
});
CollectionThumbnail.displayName = 'CollectionThumbnail';

export { CollectionThumbnail };
