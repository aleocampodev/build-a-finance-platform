import Image from "next/image";
import { Loader2 } from "lucide-react";
import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";

const signInPage = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg-:flex flex-col items-center justify-center px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#2E2A47]">Welcome back!</h1>
          <p className="text-muted-foreground text-lg">
            Please sign in to your account to continue
          </p>
        </div>
        <div>
          <ClerkLoaded>
            <SignIn path="/sign-in" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animate-spin text-muted-foreground text-lg" />
          </ClerkLoading>
        </div>
      </div>
      <div className="h-full bg-purple-700 hidden lg:flex flex-col items-center justify-center">
        <Image src="/logo.svg" alt="logo" width={100} height={100} />
      </div>
    </div>
  );
};

export default signInPage;
