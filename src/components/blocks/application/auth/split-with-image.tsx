import { Icon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import Link from 'next/link';

const AuthSplitWithImage: React.FC = () => {
  return (
    <main>
      <section className="grid h-full min-h-screen grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-0">
        <div className="container flex flex-col items-center justify-center py-12">
          <div>
            <CardHeader>
              <CardTitle>Welcome Back!</CardTitle>
              <CardDescription>
                Sign in to access the latest activity in the frontend world.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
              <div className="flex justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remeber" />
                  <Label htmlFor="remeber">Remeber me</Label>
                </div>
                <Link
                  href="/auth/sign-up"
                  className="text-sm font-semibold text-primary transition-colors hover:text-primary/70"
                >
                  Forgot Password?
                </Link>
              </div>
              <Button size={'lg'} variant={'default'} className="w-full">
                Sign In
              </Button>
              <div className="flex items-center justify-between gap-6">
                <div className="h-px grow bg-muted" />
                <p className="text-sm text-muted-foreground">
                  Or continue with
                </p>
                <div className="h-px grow bg-muted" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Button variant={'outline'}>
                  <Icon.Google className="me-2 h-5 w-5" />
                  Google
                </Button>
                <Button variant={'outline'}>
                  <Icon.Github className="me-2 h-5 w-5" />
                  Github
                </Button>
              </div>
            </CardContent>
            <CardFooter></CardFooter>
          </div>
          <div className="mt-8">
            <p className="text-sm text-muted-foreground">
              Not a member?{' '}
              <Link
                href="/auth/sign-up"
                className="font-semibold text-primary transition-colors hover:text-primary/70"
              >
                Start a 14 day free trial
              </Link>
            </p>
          </div>
        </div>
        <div className="relative min-h-32 bg-primary/30 lg:min-h-0">
          <Image
            src={
              'https://images.pexels.com/photos/20153222/pexels-photo-20153222/free-photo-of-schnee-holz-dammerung-landschaft.jpeg'
            }
            alt="Sample Hero Image"
            className="object-cover"
            layout={'fill'}
          />
        </div>
      </section>
    </main>
  );
};

export default AuthSplitWithImage;
