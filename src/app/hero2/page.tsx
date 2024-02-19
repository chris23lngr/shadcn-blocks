'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import SampleHeroImg from '../../../public/sample-hero-img.jpeg';

export default function Home() {
  return (
    <main>
      <section className="container py-24">
        <div className="mx-auto">
          <Badge variant={'secondary'} size={'large'} className="mb-6">
            Stet clita kasd gubergren, no sea takimata!!{' '}
            <span className="ms-3">🎉</span>
          </Badge>
          <h1 className="max-w-screen-lg scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy
          </h1>
          <h2 className="mt-6 max-w-prose text-lg font-normal text-muted-foreground">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </h2>
          <div className="mt-6 flex items-center justify-start gap-4">
            <Button>Primary </Button>
            <Button variant="outline">
              Secondary
              <GitHubLogoIcon className="ms-2 h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="mt-20 rounded-lg">
          <Image
            src={SampleHeroImg}
            alt="Sample hero image"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>
    </main>
  );
}
