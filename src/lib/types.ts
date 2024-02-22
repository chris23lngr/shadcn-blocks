/** @deprecate */
type Category = {
  title: string;
  description: string;
  slug: string;
  //   image: string;
};

type BlockMetadataXX = {
  name: string;
  displayName: string;
  description: string;
  category: Category;
};

type BlockMeta = {
  title: string;
  description?: string;
};

type Config = {
  site: {
    title: string;
    description: string;
  };
  registry: {
    path: string;
    blockPath: string;
  };
  navigation: { [key: string]: Category };
  categories: { [key: string]: Category };
  repository: {
    url: string;
  };
};

type RegistryIndex = {
  default: {
    [key: string]: {
      // category
      [key: string]: BlockMetadata;
    };
  };
};

type Index = {
  default: {
    // Categories
    // Blocks
    // Blockk metadata
  };
  'new-york': {};
};

type CollectionMetadata = {
  id: string;
  description: string;
  label: string;
  blocks: BlockMetadata[];
};

type CategoryMetadata = {
  id: string;
  description: string;
  label: string;
};

type BlockMetadata = {
  id: string;
  label: string;
};

type APIResponse = {
  error: string | null;
};

type CommandItemGroup = CategoryMetadata & {
  collections: Omit<CollectionMetadata, 'blocks'>[];
};

export type {
  APIResponse,
  BlockMetadata,
  // Category,
  CategoryMetadata,
  CollectionMetadata,
  CommandItemGroup,
  // Category,
  Config,
  RegistryIndex,
};
