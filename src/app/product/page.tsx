'use client';

import { Button } from '@/components/ui/button';
import { HeartIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import SampleProduct1 from '../../../public/assets/product/sample-1.jpg';
import SampleProduct2 from '../../../public/assets/product/sample-2.jpg';
import SampleProduct3 from '../../../public/assets/product/sample-3.jpg';

export default function Home() {
  return (
    <main>
      <section className="container grid grid-cols-5 gap-8 py-24">
        <div className="col-span-3">
          <div className="grid grid-cols-2 gap-8 [&>img]:rounded-lg">
            <Image
              src={SampleProduct1}
              alt="Sample product 1"
              className="col-span-2"
            />
            <Image src={SampleProduct2} alt="Sample product 2" />
            <Image src={SampleProduct3} alt="Sample product 3" />
          </div>
        </div>
        <div className="col-span-2">
          <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            The People of the Kingdom
          </h2>
          <p className="text-base text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
            dolorum sed quis ipsam maxime impedit, cum commodi a consequatur
            excepturi architecto velit adipisci quasi deserunt, dolor delectus.
            Ex, cupiditate laboriosam.
          </p>
          <div className="mt-8">
            <p className="text-lg font-semibold text-foreground">Select Size</p>
            <div className="mt-4 grid grid-cols-3 gap-2">
              <Button variant="outline" disabled>
                XS
              </Button>
              <Button variant="outline" disabled>
                S
              </Button>
              <Button variant="outline">M</Button>
              <Button variant="outline">L</Button>
              <Button variant="outline">XL</Button>
              <Button variant="outline">XXL</Button>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-2">
            <Button size={'lg'}>Add to Cart</Button>
            <Button size={'lg'} variant="outline">
              Add to Favorites <HeartIcon className="ms-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
