import { getCategories } from '@/lib/category';
import { getCollections } from '@/lib/collection';
import { config } from '@/lib/config';
import { CollectionMetadata, CommandItemGroup } from '@/lib/types';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import { Icon } from './icons';
import { NavbarMenu } from './navbar-menu';
import { NavbarSearch } from './navbar-search';

interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {}

async function Navbar(props: NavbarProps, ref?: React.Ref<HTMLDivElement>) {
  const { className, ...otherProps } = props;

  const categories = await getCategories();

  let commandItems: CommandItemGroup[] = [];

  if (categories.data != null) {
    for (const category of categories.data) {
      let collectionsArr: CollectionMetadata[] = [];

      const collections = await getCollections(category.id);

      // Push all collections into the collections array
      if (collections.data != null) {
        for (const collection of collections.data) {
          collectionsArr.push(collection);
        }
      }

      const categoryObj: CommandItemGroup = {
        id: category.id,
        description: category.description,
        label: category.label,
        collections: collectionsArr,
      };

      commandItems.push(categoryObj);
    }
  }

  return (
    <nav
      ref={ref}
      className={cn(
        'fixed top-0 z-30 w-full border-b border-border bg-background py-2',
        className
      )}
      {...otherProps}
    >
      <div className="container flex items-center justify-start gap-6">
        <Link href="/" className=" font-semibold text-foreground">
          shadcn/ui <span className="font-light italic">blocks</span>
        </Link>

        {categories.data && <NavbarMenu categories={categories.data} />}

        <div className="ml-auto flex items-center gap-6">
          <NavbarSearch items={commandItems} />
          <Link href={config.repository.url} className="group" target="_blank">
            <Icon.Github className="h-6 w-6 text-foreground group-hover:text-foreground/70" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
Navbar.displayName = 'Navbar';

export { Navbar };
