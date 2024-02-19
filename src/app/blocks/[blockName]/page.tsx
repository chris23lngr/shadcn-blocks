'use client';

import React, { Suspense } from 'react';

export default function Page({
  params: { blockName },
}: {
  params: { blockName: string };
}) {
  const Component = React.useMemo(() => {
    const comp: React.LazyExoticComponent<React.ComponentType<any>> =
      React.lazy(() => import(`@/registry/blocks/${blockName}.tsx`));
    return comp;
  }, [blockName]);

  return (
    <>
      <Suspense>
        <Component />
      </Suspense>
    </>
  );
}
