import { UserButton, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import { HeaderLogo } from "./header-logo";
import { Navigation } from "./navigation";
import { WelcomeMsg } from "./welcome-msg";

export const Header = () => {
  return (
    <header className="bg-gradient-to-r border-b p-4 flex items-center justify-between from-blue-600 to-blue-500 lg:px-14 pb-36">
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full flex items-center justify-between mb-14 ">
          <div className="flex items-center lg:gap-x-16">
            <HeaderLogo />
            <Navigation />
            <ClerkLoaded>
              <UserButton />
            </ClerkLoaded>
            <ClerkLoading>
              <Loader2 className="size-8 text-slate-400 animate-spin" />
            </ClerkLoading>
          </div>
          <WelcomeMsg />
        </div>
      </div>
    </header>
  );
};
