import { CategoryHeader } from '@/components/category-header';
import { CollectionsGrid } from '@/components/collections-grid';
import { getCollections } from '@/lib/collection';
import { CategoryMetadata } from '@/lib/types';
import fs from 'fs';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import path from 'path';

interface CategoryPageProps {
  params: { category: string };
}

async function getCategory(
  categorySlug: string
): Promise<Partial<CategoryMetadata> | null> {
  const categoriesPath = path.join(process.cwd(), '/src/data/blocks');

  // TODO
  if (!fs.existsSync(categoriesPath)) {
    console.error('Categories index not found');
    throw new Error('Categories index not found');
  }

  const categoryPath = path.join(
    process.cwd(),
    '/src/data/blocks',
    categorySlug
  );

  if (!fs.existsSync(categoryPath)) {
    console.error('Category not found');
    notFound();
  }

  const categoryMetadataPath = path.join(
    process.cwd(),
    '/src/data/blocks',
    categorySlug,
    'metadata.mdx'
  );

  if (!fs.existsSync(categoryMetadataPath)) {
    console.error('Category metadata not found');
    notFound();
  }

  const metadataFile = fs.readFileSync(categoryMetadataPath, 'utf-8');

  const { data: frontmatter } = matter(metadataFile);

  return frontmatter as CategoryMetadata;
}

// async function getCollections(
//   categorySlug: string
// ): Promise<Partial<CollectionMetadata>[] | null> {
//   const categoryPath = path.join(
//     process.cwd(),
//     '/src/data/blocks',
//     categorySlug
//   );

//   if (!fs.existsSync(categoryPath)) {
//     console.error('Category not found');
//     notFound();
//   }

//   const categoryChildren = fs.readdirSync(categoryPath);
//   let resolvedCollections: CollectionMetadata[] = [];

//   for (const child of categoryChildren) {
//     const childPath = path.join(categoryPath, child);

//     if (!fs.existsSync(childPath) || !fs.lstatSync(childPath).isDirectory()) {
//       console.warn('Skipping non-directory:', childPath);
//       continue;
//     }

//     const metadataPath = path.join(childPath, 'metadata.mdx');

//     if (!fs.existsSync(metadataPath)) {
//       console.warn('Collection metadata not found');
//       continue;
//     }

//     const metadataFile = fs.readFileSync(metadataPath, 'utf-8');

//     const { data: frontmatter } = matter(metadataFile);

//     resolvedCollections.push(frontmatter as CollectionMetadata);
//   }

//   return resolvedCollections;
// }

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = params;

  const category = await getCategory(categorySlug);

  if (!category) {
    notFound();
  }

  const collections = await getCollections(categorySlug);

  if (!collections) {
    notFound();
  }

  return (
    <main>
      <CategoryHeader category={category} />
      <CollectionsGrid category={category} collections={collections} />
    </main>
  );
}
