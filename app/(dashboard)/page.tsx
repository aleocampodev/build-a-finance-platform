"use client";
import { useGetAccounts } from "@/features/accounts/api/use-get-accounts";

const Home = () => {
  const { data: accountQuery, isLoading } = useGetAccounts();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {accountQuery?.map((account) => (
        <div key={account.id}>{account.name}</div>
      ))}
    </div>
  );
};

export default Home;
