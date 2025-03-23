import Header from "./_components/Header";
import Sidebar from "./_components/_sidebar/Sidebar";

export default function LayoutDashboard({
  children,
  locations,
}: Readonly<{
  children: React.ReactNode;
  locations: React.ReactNode;
}>) {
  return (
    <div>
      {/*<Header />*/}
      <div className="flex flex-row items-center">
        <Sidebar />
        <div className="h-screen w-full p-2 bg-primary">
          <div className="bg-background h-full w-full rounded-xl p-4 flex">
            {children}
            {locations}
          </div>
        </div>
      </div>
    </div>
  );
}
