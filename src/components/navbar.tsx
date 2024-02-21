import { getCategories } from '@/lib/category';
import { config } from '@/lib/config';
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

  return (
    <nav
      ref={ref}
      className={cn(
        'fixed top-0 w-full border-b border-border bg-background py-2',
        className
      )}
      {...otherProps}
    >
      <div className="container flex items-center justify-start gap-6">
        <Link href="/" className=" font-semibold text-foreground">
          shadcn/ui <span className="font-light italic">blocks</span>
        </Link>

        {categories && <NavbarMenu categories={categories} />}

        <div className="ml-auto flex items-center gap-6">
          <NavbarSearch />
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
