import React from 'react';

interface AuthSimpleCenteredProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const AuthSimpleCentered = React.forwardRef<
  HTMLDivElement,
  AuthSimpleCenteredProps
>((props, ref) => {
  return (
    <div ref={ref} className="bg-red-500 p-8" {...props}>
      <p className="text-4xl font-semibold text-primary">Hello World</p>
      <p className="text-4xl font-semibold text-primary">Hello World</p>
      <p className="text-4xl font-semibold text-primary">Hello World</p>
      <p className="text-4xl font-semibold text-primary">Hello World</p>
      <p className="text-4xl font-semibold text-primary">Hello World</p>
      <p className="text-4xl font-semibold text-primary">Hello World</p>
      <p className="text-4xl font-semibold text-primary">Hello World</p>
    </div>
  );
});

export default AuthSimpleCentered;
