"use client";

import { useUser } from "@clerk/nextjs";

export const WelcomeMsg = () => {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-2 mb-4">
      <h2 className="text-2xl lg:text-4xl font-bold text-white font-medium">
        Welcome back, {isLoaded ? ", " : " "}
        {user?.firstName}
      </h2>
      <p className="text-sm lg:text-base text-[#89b6ff]">
        This is your financial overview
      </p>
    </div>
  );
};
