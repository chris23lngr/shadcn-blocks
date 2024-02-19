type Category = {
  title: string;
  description: string;
  slug: string;
  //   image: string;
};

type BlockMetadata = {
  name: string;
  displayName: string;
  description: string;
  category: Category;
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
};

export type { BlockMetadata, Category, Config };
