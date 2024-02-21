import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

const teamMembers = [
  {
    name: 'Maurice Bradle',
    role: 'Founder & CEO',
    image: 'https://images.pexels.com/photos/8276629/pexels-photo-8276629.jpeg',
  },
  {
    name: 'James Parker',
    role: 'Founder & CTO',
    image: 'https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg',
  },
  {
    name: 'Maria Smith',
    role: 'COO',
    image: 'https://images.pexels.com/photos/4347368/pexels-photo-4347368.jpeg',
  },
  {
    name: 'Chris Johnson',
    role: 'CFO',
    image: 'https://images.pexels.com/photos/6326377/pexels-photo-6326377.jpeg',
  },
];

const TeamGridWithCards: React.FC = () => {
  return (
    <main>
      <section id="team" className="py-24">
        <div className="container">
          <p className="mb-4 text-sm uppercase tracking-wide text-primary ">
            Our Team
          </p>
          <h3 className="max-w-screen-md text-4xl font-bold text-foreground">
            Meet the team behind the project
          </h3>
          <p className="mt-4 max-w-prose text-muted-foreground">
            We are a team of dedicated individuals who are passionate about our
            work. Our culture is our foundation, and we are committed to
            fostering a diverse and inclusive environment.
          </p>
        </div>
        <div className="container mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {teamMembers.map((member, index) => {
            return (
              <Card>
                <Image
                  src={member.image}
                  alt="Team Member 1"
                  className="h-72 w-full rounded-t-lg border-b border-border object-cover object-top"
                  width={665}
                  height={995}
                />
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
                <CardFooter className="flex items-center justify-start gap-2">
                  <Link
                    href="#"
                    className="text-primary transition-colors duration-150 hover:text-primary/70"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="72"
                      viewBox="0 0 72 72"
                      width="72"
                      className="h-5 w-5"
                    >
                      <g fill="none" fillRule="evenodd">
                        <path
                          d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z"
                          fill="currentColor"
                        />
                        <path
                          d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z"
                          fill="#FFF"
                        />
                      </g>
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    className="h-5 w-5 text-primary transition-colors duration-150 hover:text-primary/70"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="300"
                      height="271"
                      viewBox="0 0 300 271"
                      className="h-full w-full"
                    >
                      <path
                        fill="currentColor"
                        d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z"
                      />
                    </svg>
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </section>
    </main>
  );
};
export default TeamGridWithCards;
