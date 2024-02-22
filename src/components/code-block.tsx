'use client';

import { cn } from '@/lib/utils';
import '@/styles/prism/prism-dark.css';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import React from 'react';

interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  language?: string;
  code?: string;
}

// TODO: Add suppport for forwardRef
// https://reactjs.org/docs/forwarding-refs.html
const CodeBlock = React.forwardRef<HTMLPreElement, CodeBlockProps>(
  (props, _) => {
    const { className, code, language, ...otherProps } = props;
    const ref = React.useRef<HTMLPreElement>(null);

    React.useEffect(() => {
      const highlight = async (): Promise<void> => {
        if (ref.current === null) {
          // Ref is not ready yet
          return;
        }

        // Highlight the code block with Prism
        Prism.highlightElement(ref.current);
      };

      void highlight();
    }, [, ref, code]);

    return (
      <pre
        ref={ref}
        className={cn(`language-${language ? language : 'jsx'}`, className)}
        {...otherProps}
      >
        <code className={'language-jsx'}>{code}</code>
      </pre>
    );
  }
);
CodeBlock.displayName = 'CodeBlock';
export { CodeBlock };
