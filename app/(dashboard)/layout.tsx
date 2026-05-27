import { Header } from "@/components/header";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="px-3 lg:px-14 pb-14 flex-1">{children}</main>
    </>
  );
};

export default DashboardLayout;
