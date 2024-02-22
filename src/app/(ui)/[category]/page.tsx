import { CategoryHeader } from '@/components/category-header';
import { CollectionsGrid } from '@/components/collections-grid';
import { getCategory } from '@/lib/category';
import { getCollections } from '@/lib/collection';

interface CategoryPageProps {
  params: { category: string };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categoryId } = params;

  const category = await getCategory(categoryId);

  if (!category.data) {
    console.error(
      category.error
        ? category.error
        : 'An unexpected server error occurred. Category not found.'
    );
    throw new Error(
      category.error
        ? category.error
        : 'An unexpected server error occurred. Category not found.'
    );
  }

  const collections = await getCollections(category.data.id);

  if (!collections.data) {
    throw new Error(
      collections.error
        ? collections.error
        : 'An unexpected server error occurred.'
    );
  }

  return (
    <>
      <CategoryHeader category={category.data} />
      <CollectionsGrid
        category={category.data}
        collections={collections.data}
        className="mt-16"
      />
    </>
  );
}
