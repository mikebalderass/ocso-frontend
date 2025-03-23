import Header from "./_components/Header";
import Sidebar from "./_components/_sidebar/Sidebar";

export default function LayoutDashboard({
  children,
  count,
}: Readonly<{
  children: React.ReactNode;
  count: React.ReactNode;
}>) {
  return (
    <div>
      {/*<Header />*/}
      <div className="flex flex-row items-center">
        <Sidebar />
        <div className="h-screen w-full p-2 bg-primary">
          <div className="bg-background h-full w-full rounded-xl p-4 flex">
            {children}
            {count}
          </div>
        </div>
      </div>
    </div>
  );
}
