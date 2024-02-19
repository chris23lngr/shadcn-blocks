'use client';

import { Index } from '@/__registry__';
import { cn } from '@/lib/utils';
import { ClipboardIcon } from '@radix-ui/react-icons';
import { TabsProps } from '@radix-ui/react-tabs';
import React from 'react';
import { toast } from 'sonner';
import '../styles/prism/prism-dark.css';
import { CodeBlock } from './code-block';
import { Button } from './ui/button';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from './ui/resizable';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface BlockPreviewProps extends TabsProps {
  label: string;
  name: string;
}

const BlockPreview = React.forwardRef<HTMLDivElement, BlockPreviewProps>(
  ({ label, name, children, className, ...props }, ref) => {
    const code: string = React.useMemo(() => {
      const code = Index['default'][name]?.code;

      if (!code) {
        return `
          <p className="text-sm text-muted-foreground">
            Code for{' '}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              {name}
            </code>{' '}
            not found in registry.
          </p>`;
      }

      return code;
    }, [name]);

    const onCopy = React.useCallback(() => {
      async function go() {
        await navigator.clipboard.writeText(code);

        toast.success(`Block '${label}' copied to clipboard`);
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
          <p className="text-lg font-medium text-foreground">{label}</p>
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
            <BlockPreviewComponent name={name} />
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

const BlockPreviewComponent = React.forwardRef<
  HTMLDivElement,
  BlockPreviewComponentProps
>(({ name, children, className, ...props }, ref) => {
  return (
    <div className={cn('', className)} ref={ref} {...props}>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={100} minSize={25}>
          <div>
            <iframe
              src={`/blocks/${name}`}
              className="h-full min-h-[90vh] w-full rounded-lg border border-border"
            />
          </div>
        </ResizablePanel>
        <ResizableHandle className="w-fit bg-transparent ps-2">
          <div className="h-20 w-1.5 rounded-full bg-border" />
        </ResizableHandle>
        <ResizablePanel />
      </ResizablePanelGroup>
    </div>
  );
});
BlockPreviewComponent.displayName = 'BlockPreviewComponent';

export { BlockPreview };
