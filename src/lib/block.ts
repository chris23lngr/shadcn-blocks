import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import type { APIResponse, BlockMetadata } from './types';

async function getBlock(
  category: string,
  collection: string,
  block: string
): Promise<APIResponse & { data: BlockMetadata | null }> {
  const blockPath = path.join(
    '/src/data/blocks',
    category,
    collection,
    `${block}.mdx`
  );

  if (!fs.existsSync(blockPath)) {
    console.error(`Path to block does not exist: ${blockPath}`);
    return {
      error: `Path to collection does not exist: ${blockPath}`,
      data: null,
    };
  }

  const blockFile = fs.readFileSync(blockPath, 'utf-8');

  const { data: frontmatter } = matter(blockFile);

  return { error: null, data: frontmatter as BlockMetadata };
}

async function getBlocks(
  category: string,
  collection: string
): Promise<APIResponse & { data: BlockMetadata[] | null }> {
  const collectionPath = path.join(
    process.cwd(),
    '/src/data/blocks',
    category,
    collection
  );

  if (!fs.existsSync(collectionPath)) {
    console.error(`Path to collection does not exist: ${collection}`);
    return {
      error: `Path to collection does not exist: ${collection}`,
      data: null,
    };
  }

  const collectionChildren = fs.readdirSync(collectionPath);
  const resolvedBlocks: BlockMetadata[] = [];

  for (const child of collectionChildren) {
    if (child === 'metadata.mdx') {
      console.info('Skipping metadata file');
      continue;
    }

    const childPath = path.join(collectionPath, child);

    if (fs.lstatSync(childPath).isDirectory()) {
      console.info('Skipping directory:', childPath);
      continue;
    }

    // Skip files that don't end in .mdx or end in info.md
    if (!child.endsWith('.mdx') || child.endsWith('info.mdx')) {
      console.info('ignoring file:', childPath);
      continue;
    }

    const blockFile = fs.readFileSync(childPath, 'utf-8');

    const { data: frontmatter } = matter(blockFile);

    console.log(frontmatter);

    resolvedBlocks.push(frontmatter as BlockMetadata);
  }

  return { error: null, data: resolvedBlocks };
}

export { getBlock, getBlocks };
