import EmployeesLocation from "./@locations/_components/EmployeesLocation";

export default async function DashboardPage(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  return (
    <>
      <div className="h-full w-1/2 mr-10">
        <div className="h-[90vh] overflow-hidden overflow-y-auto first:mt-0 last:mb-0">
          {searchParams.store ? (
            <EmployeesLocation store={searchParams?.store} />
          ) : (
            <p className="w-full text-2xl px-2 text-center mt-10">
              Selecciona una tienda para ver los empleados
            </p>
          )}
        </div>
      </div>
    </>
  );
}
