'use server';

import type { CollectionMetadata } from '@/lib/types';
import { cn } from '@/lib/utils';
import fs from 'fs';
import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Link from 'next/link';
import path from 'path';
import React from 'react';
import FallbackThumbnail from '../../public/collections/fallback.svg';
import { Card, CardHeader, CardTitle } from './ui/card';

interface CollectionThumbnailProps
  extends React.HTMLAttributes<HTMLDivElement> {
  categoryId: string;
  collection: Partial<CollectionMetadata>;
}

async function CollectionThumbnail(props: CollectionThumbnailProps) {
  const { categoryId, collection, className, ...otherProps } = props;

  const thumbnailPath = path.join(
    process.cwd(),
    'public/collections/',
    `${collection.id}.svg`
  );

  let thumbnailSrc: string | StaticImport = FallbackThumbnail as StaticImport;

  if (fs.existsSync(thumbnailPath)) {
    thumbnailSrc = `/collections/${collection.id}.svg`;
  }

  return (
    <Link href={`/${categoryId}/${collection.id}`}>
      <Card className={cn('', className)} {...otherProps}>
        <Image
          src={thumbnailSrc}
          alt={`${collection.label} thumbnail`}
          className="rounded-t-lg border-b border-border"
          width={1728}
          height={1117}
        />
        <CardHeader>
          <CardTitle>{collection.label}</CardTitle>
        </CardHeader>
      </Card>
    </Link>
  );
}
CollectionThumbnail.displayName = 'CollectionThumbnail';

export { CollectionThumbnail };
