import { Index } from '@/__registry__';
import { BlockCategoryHeader } from '@/components/block-category-header';
import { config } from '@/lib/config';
import { notFound } from 'next/navigation';

export default async function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const category = Index['default'][slug];

  category ? console.log(category) : console.log('Category not found');

  if (!category || category === undefined) {
    notFound();
  }

  const configCategory = config.categories[slug];

  const crumbs = [
    {
      name: 'Blocks',
      href: '/blocks',
    },
    {
      name: configCategory.title,
      href: `/blocks/${configCategory.slug}`,
    },
  ];

  return <BlockCategoryHeader crumbs={crumbs} title={configCategory.title} />;
}
