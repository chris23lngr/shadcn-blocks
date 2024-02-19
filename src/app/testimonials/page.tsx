import { Card, CardFooter, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react';

const Testimonials: {
  name: string;
  company: string;
  content: string;
  imgUri: string;
}[] = [
  {
    name: 'Sarah Johnson',
    company: 'TechSolutions Inc.',
    content:
      'Using shadcn/ui components has significantly sped up our React development process. The quality and customization options are unmatched.',
    imgUri: 'https://thispersondoesnotexist.com/',
  },
  {
    name: 'Michael Smith',
    company: 'WebCrafters Co.',
    content:
      'shadcn/ui components are a lifesaver for our frontend team. Their intuitive design and easy integration have saved us countless hours.',
    imgUri: 'https://thispersondoesnotexist.com/',
  },
  {
    name: 'Emily Chen',
    company: 'DigitalSolutions Ltd.',
    content:
      "I've tried several React component libraries, but shadcn/ui stands out for its clean code and extensive documentation. Highly recommended!",
    imgUri: 'https://thispersondoesnotexist.com/',
  },
  {
    name: 'John Davis',
    company: 'CodeGenius Corp.',
    content:
      'Impressed by the attention to detail in shadcn/ui components. They are not just beautiful but also performant. Great job!',
    imgUri: 'https://thispersondoesnotexist.com/',
  },
  {
    name: 'Jessica Lee',
    company: 'TechInnovate LLC',
    content:
      'shadcn/ui components have become an integral part of our frontend stack. Their reliability and ease of use make them our top choice.',
    imgUri: 'https://thispersondoesnotexist.com/',
  },
  {
    name: 'David Rodriguez',
    company: 'DevCraft Solutions',
    content:
      "We've seen a significant improvement in our React app's user interface since implementing shadcn/ui components. Our users love the new look!",
    imgUri: 'https://thispersondoesnotexist.com/',
  },
  {
    name: 'Amanda White',
    company: 'WebTech Innovations',
    content:
      'shadcn/ui components have greatly simplified our UI development process. Their flexibility allows us to create stunning interfaces with ease.',
    imgUri: 'https://thispersondoesnotexist.com/',
  },
  {
    name: 'Kevin Thompson',
    company: 'Digital Ventures',
    content:
      'As a frontend developer, shadcn/ui components have become my go-to choice for building React applications. They never disappoint.',
    imgUri: 'https://thispersondoesnotexist.com/',
  },
  {
    name: 'Rachel Brown',
    company: 'WebWorks Ltd.',
    content:
      "We've received nothing but positive feedback from our clients since incorporating shadcn/ui components into our projects. Exceptional quality!",
    imgUri: 'https://thispersondoesnotexist.com/',
  },
  {
    name: 'Daniel Wilson',
    company: 'DigitalCrafters Inc.',
    content:
      "shadcn/ui components have revolutionized our frontend workflow. They're easy to use, customizable, and always up-to-date with the latest React trends.",
    imgUri: 'https://thispersondoesnotexist.com/',
  },
  {
    name: 'Stephanie Taylor',
    company: 'TechGenius Solutions',
    content:
      "With shadcn/ui components, we've been able to deliver polished React applications to our clients faster than ever before. A game-changer!",
    imgUri: 'https://thispersondoesnotexist.com/',
  },
  {
    name: 'Andrew Martinez',
    company: 'DevSprint Technologies',
    content:
      "The quality and reliability of shadcn/ui components have exceeded our expectations. They've become an indispensable part of our frontend toolkit.",
    imgUri: 'https://thispersondoesnotexist.com/',
  },
  {
    name: 'Melissa Clark',
    company: 'WebWonders Co.',
    content:
      "Using shadcn/ui components has allowed our team to focus more on functionality and less on design. It's been a productivity booster for sure!",
    imgUri: 'https://thispersondoesnotexist.com/',
  },
  {
    name: 'Jason Taylor',
    company: 'CodeCrafters Inc.',
    content:
      "We've tried several UI component libraries, but shadcn/ui stands out for its simplicity and elegance. It's a developer's dream come true.",
    imgUri: 'https://thispersondoesnotexist.com/',
  },
  {
    name: 'Laura Garcia',
    company: 'WebWizards Ltd.',
    content:
      "shadcn/ui components have made it incredibly easy to maintain a consistent look and feel across our React applications. We couldn't be happier!",
    imgUri: 'https://thispersondoesnotexist.com/',
  },
  {
    name: 'Chris Turner',
    company: 'DigitalCrafters Co.',
    content:
      "We've seen a noticeable improvement in our React app's performance since switching to shadcn/ui components. The optimization is impressive!",
    imgUri: 'https://thispersondoesnotexist.com/',
  },
  {
    name: 'Megan Baker',
    company: 'WebTech Solutions',
    content:
      'shadcn/ui components have not only improved our frontend development process but have also enhanced the overall user experience of our applications.',
    imgUri: 'https://thispersondoesnotexist.com/',
  },
  {
    name: 'Eric Roberts',
    company: 'TechWorks Inc.',
    content:
      "With shadcn/ui components, we've been able to iterate on our UI designs more efficiently, resulting in a better end product for our clients.",
    imgUri: 'https://thispersondoesnotexist.com/',
  },
  {
    name: 'Jennifer Scott',
    company: 'CodeCraft Innovations',
    content:
      'shadcn/ui components have made React development enjoyable again. Their intuitive APIs and robust features make building UIs a breeze.',
    imgUri: 'https://thispersondoesnotexist.com/',
  },
  {
    name: 'Brian Hill',
    company: 'WebSolutions Ltd.',
    content:
      "Our frontend team loves working with shadcn/ui components. They're well-documented, easy to customize, and backed by excellent support.",
    imgUri: 'https://thispersondoesnotexist.com/',
  },
];

export default function Home() {
  return (
    <main>
      <section className="container py-24">
        <h2 className="scroll-m-20 pb-2 text-center text-3xl font-semibold tracking-tight first:mt-0">
          What our clients say about us
        </h2>
        <div className="mt-12 grid grid-cols-4 gap-6">
          {Testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              company={testimonial.company}
              content={testimonial.content}
              imgUri={testimonial.imgUri}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  company: string;
  content: string;
  imgUri: string;
}

const TestimonialCard = React.forwardRef<HTMLDivElement, TestimonialCardProps>(
  ({ name, company, content, imgUri, ...props }, ref) => {
    return (
      <Card {...props} className="h-fit">
        <CardHeader>
          <p className="text-foreground">{content}</p>
        </CardHeader>
        <CardFooter>
          <div className="flex items-center justify-start gap-2">
            <Image
              src={imgUri}
              width={256}
              height={256}
              alt={name}
              className="h-10 w-10 rounded-full"
            />
            <div>
              <p className="mb-0.5 text-sm">{name}</p>
              <p className="text-xs text-muted-foreground">{company}</p>
            </div>
          </div>
        </CardFooter>
      </Card>
    );
  }
);
