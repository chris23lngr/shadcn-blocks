'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { config } from '@/lib/config';
import { GitHubLogoIcon } from '@radix-ui/react-icons';

export default function Home() {
  console.log('typeof config', typeof config);

  return (
    <main className="">
      <section id="hero" className="flex flex-col justify-end py-24">
        <div className="container h-full ">
          <p className="max-w-screen-sm text-4xl font-bold leading-[1.125] text-foreground md:text-5xl">
            Handrcafted UI Blocks, built with Tailwindcss and shadcn/ui
          </p>
          <p className="mt-2 max-w-screen-sm text-lg text-muted-foreground">
            High quality copy paste components for your next website built with
            the help of{' '}
            <span className="cursor-pointer font-medium decoration-2 underline-offset-2 hover:underline">
              Tailwindcss
            </span>{' '}
            and{' '}
            <span className="cursor-pointer font-medium decoration-2 underline-offset-2 hover:underline">
              @shadcn/ui
            </span>
            .
          </p>
          <div className="mt-6 flex w-fit items-center justify-center gap-4">
            <Button>Get Started</Button>
            <Button variant="outline">
              <GitHubLogoIcon className="me-2 h-5 w-5" />
              Github
            </Button>
          </div>
        </div>
      </section>

      <section id="categories" className="">
        <div className="container">
          <p className="text-3xl font-semibold text-foreground">Components</p>
          <div className="mt-10 grid grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Hero Sections</CardTitle>
              </CardHeader>
              <CardContent></CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Hero Sections</CardTitle>
              </CardHeader>
              <CardContent></CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Hero Sections</CardTitle>
              </CardHeader>
              <CardContent></CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
