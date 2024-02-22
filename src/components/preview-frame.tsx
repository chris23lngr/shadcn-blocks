'use client';

import { cn } from '@/lib/utils';
import React from 'react';
import { createPortal } from 'react-dom';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from './ui/resizable';

interface PreviewFrameProps
  extends React.IframeHTMLAttributes<HTMLIFrameElement> {}

const PreviewFrame: React.FC<PreviewFrameProps> = (props) => {
  const { children, className, ...otherProps } = props;
  const ref = React.useRef<HTMLIFrameElement | null>(null);
  const [mountNode, setMountNode] = React.useState<HTMLElement | null>(null);
  const iframeKey = React.useId();

  React.useEffect(() => {
    if (ref && ref.current) {
      // check if the iframe is ready
      if (
        !ref.current.contentWindow ||
        !ref.current.contentWindow.document ||
        !ref.current.contentWindow.document.body
      ) {
        setMountNode(null);
        return;
      }

      const bodyNode: HTMLElement | undefined =
        ref.current.contentWindow?.document.body;

      if (!bodyNode) {
        setMountNode(null);
        return;
      }

      applyTwToIframe();
      setMountNode(bodyNode);
    } else {
      setMountNode(null);
    }
  }, [ref.current]);

  const applyTwToIframe = () => {
    if (ref && ref.current) {
      const iframe = ref.current;
      const iframeDocument = iframe.contentDocument;

      if (!iframeDocument) {
        return;
      }
      const link = iframeDocument.createElement('link');
      link.rel = 'stylesheet';
      link.href = '/_next/static/css/app/layout.css';

      iframeDocument.head.appendChild(link);
    }
  };
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={100} minSize={25}>
        <iframe
          ref={ref}
          className={cn('rounded-lg border border-border', className)}
          // onLoad={resizeIframe}
          {...otherProps}
        >
          {mountNode && createPortal(children, mountNode, iframeKey)}
        </iframe>
      </ResizablePanel>
      <ResizableHandle className="w-fit bg-transparent ps-2">
        <div className="z-0 h-20 w-1.5 rounded-full bg-border" />
      </ResizableHandle>
      <ResizablePanel />
    </ResizablePanelGroup>
  );
};
PreviewFrame.displayName = 'PreviewFrame';
export { PreviewFrame };
