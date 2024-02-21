'use server';

import fs from 'fs';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import path from 'path';
import { CollectionMetadata } from './types';

async function getCollections(
  category: string
): Promise<Partial<CollectionMetadata>[] | null> {
  const categoryPath = path.join(process.cwd(), '/src/data/blocks', category);

  if (!fs.existsSync(categoryPath)) {
    console.error('Category not found');
    notFound();
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
      console.warn('Skipping directory:', childPath);
      continue;
    }

    // Skip files that don't end in .mdx or end in info.md
    if (!child.endsWith('.mdx') || child.endsWith('info.mdx')) {
      console.warn('ignoring file:', childPath);
      continue;
    }

    const collectionFile = fs.readFileSync(childPath, 'utf-8');

    const { data: frontmatter } = matter(collectionFile);

    resolvedCollections.push(frontmatter as CollectionMetadata);
  }

  return resolvedCollections;
}

async function getCollection({
  category,
  collection,
}: {
  category: string;
  collection: string;
}): Promise<Partial<CollectionMetadata> | null> {
  // Get Collection Metadata

  const collectionMetaPath = path.join(
    process.cwd(),
    '/src/data/blocks',
    category,
    `${collection}.mdx`
  );

  if (!fs.existsSync(collectionMetaPath)) {
    // TODO Return Error
    // throw new Error(`Collection metadata not found: ${collectionMetaPath}`);
    throw new Error(`Collection metadata not found: ${collectionMetaPath}`);
  }

  // Read metadata from file
  const metadataFile = fs.readFileSync(collectionMetaPath, 'utf-8');

  const { data: frontmatter } = matter(metadataFile);
  console.log(frontmatter);

  return frontmatter as CollectionMetadata;
}

export { getCollection, getCollections };
