/** @deprecate */
type Category = {
  title: string;
  description: string;
  slug: string;
  //   image: string;
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
  navigation: Record<string, Category>;
  categories: Record<string, Category>;
  repository: {
    url: string;
  };
};

type RegistryIndex = {
  default: Record<string, Record<string, BlockMetadata>>;
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
