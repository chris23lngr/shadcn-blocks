import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { APIResponse, CategoryMetadata } from './types';

async function getCategories(): Promise<
  APIResponse & {
    data: CategoryMetadata[] | null;
  }
> {
  let resolvedCategories: CategoryMetadata[] = [];

  const categoriesPath = path.join(process.cwd(), '/src/data/blocks');

  if (!fs.existsSync(categoriesPath)) {
    console.error(`Path to categories does not exist: ${categoriesPath}`);
    return {
      error: `Path to categories does not exist: ${categoriesPath}`,
      data: null,
    };
  }

  const categoryChildren = fs.readdirSync(categoriesPath);

  for (const child of categoryChildren) {
    const category = await getCategory(child);

    if (category.data === null) {
      console.error('Category not found');
      continue;
    }

    resolvedCategories.push(category.data);
  }

  return { error: null, data: resolvedCategories };
}

async function getCategory(
  categorySlug: string
): Promise<APIResponse & { data: CategoryMetadata | null }> {
  const categoryPath = path.join(
    process.cwd(),
    '/src/data/blocks',
    categorySlug
  );

  if (!fs.existsSync(categoryPath)) {
    console.error(`Path to category does not exist: ${categoryPath}`);
    return {
      error: `Path to category does not exist: ${categoryPath}`,
      data: null,
    };
  }

  const categoryMetadataPath = path.join(
    process.cwd(),
    '/src/data/blocks',
    categorySlug,
    'metadata.mdx'
  );

  const categoryMetadataFile = fs.readFileSync(categoryMetadataPath, 'utf-8');

  const { data: frontmatter } = matter(categoryMetadataFile);

  return { error: null, data: frontmatter as CategoryMetadata };
}

export { getCategories, getCategory };
