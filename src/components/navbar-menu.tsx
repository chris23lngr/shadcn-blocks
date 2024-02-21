'use client';

import { CategoryMetadata } from '@/lib/types';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu';

interface NavbarMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  categories: Partial<CategoryMetadata>[];
}

const NavbarMenu = React.forwardRef<HTMLDivElement, NavbarMenuProps>(
  (props, ref) => {
    const { className, categories, ...otherProps } = props;
    return (
      <NavigationMenu>
        <NavigationMenuList>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {categories.map((category) => (
                  <NavbarMenuListItem
                    key={category.id}
                    title={category.label}
                    href={`/${category.id}`}
                  >
                    {category.description}
                  </NavbarMenuListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
  }
);
NavbarMenu.displayName = 'NavbarMenu';

const NavbarMenuListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
NavbarMenuListItem.displayName = 'NavbarMenuListItem';

export { NavbarMenu };
