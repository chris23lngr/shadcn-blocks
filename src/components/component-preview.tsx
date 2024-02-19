import { cn } from '@/lib/utils';
import { CodeIcon, ImageIcon } from '@radix-ui/react-icons';
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  href: string;
}

const ComponentPreview = React.forwardRef<
  HTMLDivElement,
  ComponentPreviewProps
>(({ title, description, href, children, ...props }, ref) => {
  return (
    <div ref={ref} className="" {...props}>
      <Tabs defaultValue="preview">
        <div className="mb-4 w-full">
          <h3 className="text-lg font-medium text-foreground">
            Simple centered
          </h3>
          <TabsList>
            <TabsTrigger value="preview">
              <ImageIcon className="me-2 h-5 w-5" />
              Preview
            </TabsTrigger>
            <TabsTrigger value="code">
              <CodeIcon className="me-2 h-5 w-5" />
              Code
            </TabsTrigger>
          </TabsList>
        </div>

        <div
          className={cn(
            'w-full max-w-screen-2xl rounded-md border border-border'
          )}
        >
          <TabsContent value="preview">{children}</TabsContent>
          <TabsContent value="code">
            <pre>Hello Wrold</pre>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
});
ComponentPreview.displayName = 'ComponentPreview';

const PreviewTabs = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, ...props }, ref) => {
  return <Tabs></Tabs>;
});

export { ComponentPreview };
