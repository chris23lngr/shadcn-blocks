import { Button } from '@/components/ui/button';

const HeroCenteredWithBrowser = () => {
  return (
    <main>
      <section id="hero" className="">
        <div className="container flex flex-col items-center justify-center py-24">
          <p className="max-w-screen-md text-center text-4xl font-extrabold leading-[1.125] text-foreground md:text-5xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
          <p className="mt-6 max-w-prose text-center text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt a
            temporibus sapiente molestiae, delectus ab fuga ducimus excepturi
            dignissimos officia nam vero cupiditate alias vitae, quam tempora.
            Ipsa, est ratione.
          </p>
          <div className="mt-8 grid w-fit grid-cols-2 gap-3">
            <Button>Getting started</Button>
            <Button variant={'outline'}>Documentation</Button>
          </div>
        </div>
        <div className="container mb-32 mt-12">
          <div className="mx-auto max-w-screen-lg rounded-xl border border-border shadow-lg">
            <div className="flex items-center justify-between rounded-t-xl border-b border-border bg-muted px-4 py-1.5">
              <div
                id="dots"
                className="grid w-fit grid-cols-3 gap-2 [&>div.dot]:h-3 [&>div.dot]:w-3 [&>div.dot]:rounded-full"
              >
                <div className="dot bg-red-500" />
                <div className="dot bg-yellow-400" />
                <div className="dot bg-green-600" />
              </div>
              <div className="inline-flex w-64 items-center justify-center rounded-md border border-border bg-background px-2.5 py-1.5 lg:w-80">
                <p className="text-xs text-muted-foreground">
                  https://tailwindcss.com
                </p>
              </div>
              <div />
            </div>
            <div className="aspect-video w-full"></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeroCenteredWithBrowser;
