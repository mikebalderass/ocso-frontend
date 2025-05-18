import { Employee } from "@/entities";
import { API_URL, TOKEN_NAME } from "@/constants";
import { cookies } from "next/headers";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default async function EmployeesLocation({
  store,
}: {
  store: string | string[] | undefined;
}) {
  if (!store) return "No hay empleados";
  const token = (await cookies()).get(TOKEN_NAME)?.value;

  const response = await fetch(`${API_URL}/employees/location/${store}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    next: {
      tags: ["dashboard:locations:employees"],
    },
  });

  const data: Employee[] = await response.json();

  if (data.length === 0 || !data)
    return (
      <div className="ml-5">
        <p>No hay empleados en esta tienda</p>
      </div>
    );

  return data?.map((employee) => {
    const fullName = employee.employeeName + " " + employee.employeeLastName;
    return (
      <Card className="ml-5" key={employee.employeeId}>
        <CardHeader>
          <p className="w-full">
            Nombre: <b>{fullName}</b>
          </p>
        </CardHeader>
        <CardContent>
          <p className="w-full">
            Email: <b>{employee.employeeEmail}</b>
          </p>
          <p className="w-full">
            Teléfono: <b>{employee.employeePhoneNumber}</b>
          </p>
        </CardContent>
      </Card>
    );
  });
}
