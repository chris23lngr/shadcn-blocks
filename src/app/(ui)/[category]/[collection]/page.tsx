import { BlockList } from '@/components/block-list';
import { CollectionHeader } from '@/components/collection-header';
import { getBlocks } from '@/lib/block';
import { getCollection } from '@/lib/collection';
import { CollectionMetadata } from '@/lib/types';
import { notFound } from 'next/navigation';

interface CollectionPageProps {
  params: { category: string; collection: string };
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { category, collection } = params;

  // Check if category or collection is not found
  if (!category || !collection) {
    return notFound();
  }

  const collectionMetadata: Partial<CollectionMetadata> | null =
    await getCollection({ category, collection });

  if (collectionMetadata === null) {
    // TODO Return Error
    return notFound();
  }

  const blocks = await getBlocks(category, collection);

  if (!collectionMetadata.blocks) {
    throw new Error('Blocks not found');
  }

  return (
    <>
      <CollectionHeader collection={collectionMetadata} />
      <BlockList
        className="mt-24"
        blocks={collectionMetadata.blocks}
        categoryId={category}
        collectionId={collection}
      />
    </>
  );
}
