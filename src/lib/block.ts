import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { BlockMetadata } from './types';

async function getBlock(
  category: string,
  collection: string,
  block: string
): Promise<Partial<BlockMetadata> | null> {
  const blockPath = path.join(
    '/src/data/blocks',
    category,
    collection,
    `${block}.mdx`
  );

  if (!fs.existsSync(blockPath)) {
    console.error('Block not found');
    return null;
  }

  const blockFile = fs.readFileSync(blockPath, 'utf-8');

  const { data: frontmatter } = matter(blockFile);

  return frontmatter as BlockMetadata;
}

async function getBlocks(
  category: string,
  collection: string
): Promise<Partial<BlockMetadata>[] | null> {
  const collectionPath = path.join(
    process.cwd(),
    '/src/data/blocks',
    category,
    collection
  );

  if (!fs.existsSync(collectionPath)) {
    console.error('Collection not found');
    return null;
  }

  const collectionChildren = fs.readdirSync(collectionPath);
  let resolvedBlocks: BlockMetadata[] = [];

  for (const child of collectionChildren) {
    if (child === 'metadata.mdx') {
      console.info('Skipping metadata file');
      continue;
    }

    const childPath = path.join(collectionPath, child);

    if (fs.lstatSync(childPath).isDirectory()) {
      console.warn('Skipping directory:', childPath);
      continue;
    }

    // Skip files that don't end in .mdx or end in info.md
    if (!child.endsWith('.mdx') || child.endsWith('info.mdx')) {
      console.warn('ignoring file:', childPath);
      continue;
    }

    const blockFile = fs.readFileSync(childPath, 'utf-8');

    const { data: frontmatter } = matter(blockFile);

    console.log(frontmatter);

    resolvedBlocks.push(frontmatter as BlockMetadata);
  }

  return resolvedBlocks;
}

export { getBlock, getBlocks };
