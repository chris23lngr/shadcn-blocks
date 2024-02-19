'use client';

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Home() {
  return (
    <main>
      <section className="container py-24">
        <div className="mx-auto">
          <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            The People of the Kingdom
          </h2>

          <div className="mt-12 grid grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>King Arthur</CardTitle>
                <CardDescription>
                  King Arthur is the legendary leader of the Britons. He is
                  portrayed as a great warrior and leader who united the Britons
                  against the Saxon invaders and is considered a great hero.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
