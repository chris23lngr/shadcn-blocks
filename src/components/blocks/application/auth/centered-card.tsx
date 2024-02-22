import { Icon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

const AuthCenteredCard: React.FC = () => {
  return (
    <main>
      <section className="container flex h-full min-h-screen flex-col items-center justify-center">
        <Card className="shadow-lg">
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
              <p className="text-sm text-muted-foreground">Or continue with</p>
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
        </Card>
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
      </section>
    </main>
  );
};

export default AuthCenteredCard;
