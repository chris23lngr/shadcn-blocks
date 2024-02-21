'use client';

import { Index } from '@/__registry__';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { useRouter } from 'next/navigation';
import React from 'react';

function NavbarSearch() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const toggleDialog = () => {
    setOpen((open) => !open);
  };

  const router = useRouter();

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <button
        onClick={toggleDialog}
        className="inline-flex w-48 cursor-pointer justify-between gap-2 rounded-md border border-border px-2.5 py-1.5 text-sm text-muted-foreground transition-colors duration-200 hover:bg-muted"
      >
        Search...
        <span className="rounded-md border border-border bg-muted px-1 py-0.5 text-xs">
          ⌘ K
        </span>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {Index.map((category) => {
            return (
              <CommandGroup heading={category.label}>
                {category.collections.map((collection) => {
                  return (
                    <CommandItem
                      key={collection.id}
                      value={collection.label}
                      onSelect={() => {
                        runCommand(() =>
                          router.push(`/${category.id}/${collection.id}`)
                        );
                      }}
                    />
                  );
                })}
              </CommandGroup>
            );
          })}
          <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}

export { NavbarSearch };
