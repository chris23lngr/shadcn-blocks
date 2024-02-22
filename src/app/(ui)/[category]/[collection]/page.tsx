import { BlockList } from '@/components/block-list';
import { CollectionHeader } from '@/components/collection-header';
import { getCategory } from '@/lib/category';
import { getCollection } from '@/lib/collection';
import { notFound } from 'next/navigation';

interface CollectionPageProps {
  params: { category: string; collection: string };
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { category: categoryId, collection: collectionId } = params;

  // Check if category or collection is not found
  if (!categoryId || !collectionId) {
    return notFound();
  }

  const collection = await getCollection({
    category: categoryId,
    collection: collectionId,
  });

  if (!collection.data) {
    throw new Error(
      collection.error
        ? collection.error
        : 'An unexpected server error occurred.'
    );
  }

  const category = await getCategory(categoryId);

  if (!category.data) {
    throw new Error(
      category.error ? category.error : 'An unexpected server error occurred.'
    );
  }

  return (
    <>
      <CollectionHeader collection={collection.data} category={category.data} />
      <BlockList
        className="mt-24"
        blocks={collection.data.blocks}
        categoryId={category.data.id}
        collectionId={collection.data.id}
      />
    </>
  );
}
