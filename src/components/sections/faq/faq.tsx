import { cn } from '@/lib/utils';
import React from 'react';

interface FAQSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

const FAQSection = React.forwardRef<HTMLDivElement, FAQSectionProps>(
  ({ className, ...props }, ref) => {
    return (
      <section ref={ref} {...props} className={cn('py-24', className)}>
        <div ref={ref} {...props} className={cn('container', className)}>
          <div className={cn('grid grid-cols-1 gap-8')}></div>
        </div>
      </section>
    );
  }
);
