import { Icon } from '@/components/icons';
import { Button } from '@/components/ui/button';

export default function DevPage() {
  return (
    <main>
      <section id="hero" className="">
        <div className="container py-24">
          <p className="max-w-screen-md text-4xl font-extrabold leading-[1.125] text-foreground md:text-5xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
          <p className="mt-6 max-w-prose text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt a
            temporibus sapiente molestiae, delectus ab fuga ducimus excepturi
            dignissimos officia nam vero cupiditate alias vitae, quam tempora.
            Ipsa, est ratione.
          </p>
          <div className="mt-8 grid w-fit grid-cols-2 gap-3">
            <Button>Getting started</Button>
            <Button variant={'outline'}>Documentation</Button>
          </div>
          <div className="mt-32">
            <p className="mb-6 text-sm text-muted-foreground">
              Trusted by the best in the industry
            </p>

            <div className="flex w-full max-w-screen-md flex-wrap items-center gap-x-10 gap-y-6 text-zinc-500">
              <Icon.AdobeWoodmarkt className="h-6 w-fit" />
              <Icon.Netflix className="h-6 w-fit" />
              <Icon.Amazon className="h-6 w-fit" />
              <Icon.Meta className="h-6 w-fit" />
              <Icon.VercelWoodmark className="h-6 w-fit" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
