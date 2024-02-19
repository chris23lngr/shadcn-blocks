'use client';

import { BlockPreview } from '@/components/block-preview';

const initialString = `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

/**
 * AccordionDemo
 * @description
 * A simple accordion component that can be used to display a list of
 * questions and answers, or any other content that can be toggled.
 * 
 */

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

`;
export default function Home() {
  return (
    <main>
      <section className="container space-y-64 py-24">
        {/* <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={100} minSize={25}>
            <div>
              <iframe
                src="/auth/sign-up"
                className="h-full min-h-[85vh] w-full rounded-lg border border-border"
              />
            </div>
          </ResizablePanel>
          <ResizableHandle className="w-fit bg-transparent ps-2">
            <div className="h-20 w-1.5 rounded-full bg-border" />
          </ResizableHandle>
          <ResizablePanel />
        </ResizablePanelGroup> */}
        <BlockPreview
          name="auth-simple-centered"
          label="Auth Simple centered"
        />
        <BlockPreview
          name="auth-split-with-image"
          label="Auth Split with Image"
        />
        {/* <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={50}>
            {/* <div
              src="/auth/sign-up"
              // className="min-h-[80vh] w-full min-w-80 max-w-full resize-x overflow-y-scroll rounded-lg border border-border"
              className="min-h-[80vh] w-[90%]"
            /> 
            <div>
              <p>Hello world</p>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle className=" bg-red-400" />
          <ResizablePanel defaultSize={50} className="h-full bg-red-400">
            <p>Hello World</p>
          </ResizablePanel>
        </ResizablePanelGroup> */}
        {/* <CodeBlock code={initialString} /> */}
      </section>
    </main>
  );
}
