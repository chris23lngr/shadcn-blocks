import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { Category, CategoryMetadata } from './types';

async function getCategories(): Promise<Partial<CategoryMetadata>[] | null> {
  let resolvedCategories: Partial<Category>[] = [];

  const categoriesPath = path.join(process.cwd(), '/src/data/blocks');

  if (!fs.existsSync(categoriesPath)) {
    console.error('Categories not found');
    throw new Error('Categories not found');
  }

  const categoryChildren = fs.readdirSync(categoriesPath);

  for (const child of categoryChildren) {
    const category = await getCategory(child);

    if (category === null) {
      console.error('Category not found');
      continue;
    }

    resolvedCategories.push(category);
  }

  return resolvedCategories;
}

async function getCategory(
  categorySlug: string
): Promise<Partial<CategoryMetadata> | null> {
  const categoryPath = path.join(
    process.cwd(),
    '/src/data/blocks',
    categorySlug
  );

  if (!fs.existsSync(categoryPath)) {
    console.error(`Category ${categorySlug} not found`);
    throw new Error(`Category ${categorySlug} not found`);
  }

  const categoryMetadataPath = path.join(
    process.cwd(),
    '/src/data/blocks',
    categorySlug,
    'metadata.mdx'
  );

  const categoryMetadataFile = fs.readFileSync(categoryMetadataPath, 'utf-8');

  const { data: frontmatter } = matter(categoryMetadataFile);

  return frontmatter as CategoryMetadata;
}

export { getCategories, getCategory };
