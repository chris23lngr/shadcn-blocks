'use client';

import { BlockMetadata } from '@/lib/types';
import { cn } from '@/lib/utils';
import { ClipboardIcon } from '@radix-ui/react-icons';
import { TabsProps } from '@radix-ui/react-tabs';
import React from 'react';
import { toast } from 'sonner';
import '../styles/prism/prism-dark.css';
import { CodeBlock } from './code-block';
import { PreviewFrame } from './preview-frame';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface BlockPreviewProps extends TabsProps {
  categoryId: string;
  collectionId: string;
  blockMetadata: Partial<BlockMetadata>;
}

const BlockPreview = React.forwardRef<HTMLDivElement, BlockPreviewProps>(
  (
    { categoryId, collectionId, blockMetadata, children, className, ...props },
    ref
  ) => {
    const code: string = React.useMemo(() => {
      const code = `<p className="text-sm text-muted-foreground">
  Code for{' '}
  <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
    {name}
  </code>{' '}
  not found in registry.
</p>`;

      return code;
    }, [blockMetadata.name]);

    const path =
      blockMetadata.name == 'centered-card'
        ? '@/components/blocks/application/auth/centered-card'
        : '@/components/blocks/application/auth/split-with-image';

    const Component: React.LazyExoticComponent<React.ComponentType<any>> =
      React.lazy(
        () =>
          import(
            // `@/components/blocks/${categoryId}/${collectionId}/${blockMetadata.name}`
            '@/components/blocks/application/auth/centered-card'
          )
      );

    const onCopy = React.useCallback(() => {
      async function go() {
        await navigator.clipboard.writeText(code);

        toast.success(`Block '${blockMetadata.label}' copied to clipboard`);
      }

      go();
    }, [code]);

    return (
      <Tabs
        defaultValue="preview"
        ref={ref}
        className={cn('', className)}
        {...props}
      >
        <div className="flex items-center justify-between">
          <p className="text-lg font-medium text-foreground">
            {blockMetadata.label}
          </p>
          <div className="flex items-center gap-2">
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
            <Button size={'icon'} variant={'secondary'} onClick={onCopy}>
              <ClipboardIcon />
            </Button>
          </div>
        </div>
        <div className="">
          <TabsContent value="preview">
            {/* <BlockPreviewComponent name={name} /> */}
            <PreviewFrame className="min-h-[90vh] w-full">
              <Component />
            </PreviewFrame>
          </TabsContent>
          <TabsContent value="code">
            <CodeBlock code={code} />
          </TabsContent>
        </div>
      </Tabs>
    );
  }
);
BlockPreview.displayName = 'BlockPreview';

/**
 * BlockPreviewComponent
 */
interface BlockPreviewComponentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
}

export { BlockPreview };
