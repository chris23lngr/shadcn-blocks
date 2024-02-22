'use server';

import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { APIResponse, CollectionMetadata } from './types';

async function getCollections(
  category: string
): Promise<APIResponse & { data: CollectionMetadata[] | null }> {
  const categoryPath = path.join(process.cwd(), '/src/data/blocks', category);

  if (!fs.existsSync(categoryPath)) {
    console.error(`Path to collection does not exist: ${categoryPath}`);
    return {
      error: `Path to collection does not exist: ${categoryPath}`,
      data: null,
    };
  }

  const categoryChildren = fs.readdirSync(categoryPath);
  let resolvedCollections: CollectionMetadata[] = [];

  for (const child of categoryChildren) {
    if (child === 'metadata.mdx') {
      console.info('Skipping metadata file');
      continue;
    }

    const childPath = path.join(categoryPath, child);

    if (fs.lstatSync(childPath).isDirectory()) {
      console.info('Skipping directory:', childPath);
      continue;
    }

    // Skip files that don't end in .mdx or end in info.md
    if (!child.endsWith('.mdx') || child.endsWith('info.mdx')) {
      console.info('ignoring file:', childPath);
      continue;
    }

    const collectionFile = fs.readFileSync(childPath, 'utf-8');

    const { data: frontmatter } = matter(collectionFile);

    resolvedCollections.push(frontmatter as CollectionMetadata);
  }

  return { error: null, data: resolvedCollections };
}

async function getCollection({
  category,
  collection,
}: {
  category: string;
  collection: string;
}): Promise<APIResponse & { data: CollectionMetadata | null }> {
  // Get Collection Metadata

  const collectionMetaPath = path.join(
    process.cwd(),
    '/src/data/blocks',
    category,
    `${collection}.mdx`
  );

  if (!fs.existsSync(collectionMetaPath)) {
    console.error(`Path to collection does not exist: ${collectionMetaPath}`);
    return {
      error: `Path to collection does not exist: ${collectionMetaPath}`,
      data: null,
    };
  }

  // Read metadata from file
  const metadataFile = fs.readFileSync(collectionMetaPath, 'utf-8');

  const { data: frontmatter } = matter(metadataFile);
  console.log(frontmatter);

  return { error: null, data: frontmatter as CollectionMetadata };
}

export { getCollection, getCollections };
