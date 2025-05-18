import { Manager } from "@/entities";
import { API_URL, TOKEN_NAME } from "@/constants";
import Link from "next/link";
import { cookies } from "next/headers";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default async function ManagerCards() {
  const userCookies = await cookies();
  const token = userCookies.get(TOKEN_NAME)?.value;
  const response = await fetch(`${API_URL}/managers`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    next: {
      tags: ["dashboard:managers"],
    },
  });
  const data: Manager[] = await response.json();
  return data?.map((manager: Manager) => {
    return (
      <Link
        key={manager.managerId}
        href={{ pathname: `/dashboard/managers/${manager.managerId}` }}
      >
        <Card className="mx-10 my-10 hover:scale-[110%] hover:bg-blue-100">
          <CardHeader>
            <p className="w-full">
              Nombre: <b>{manager.managerFullName}</b>
            </p>
          </CardHeader>
          <CardContent>
            <p className="w-full">
              Email: <b>{manager.managerEmail}</b>
            </p>
            <p className="w-full">
              Teléfono: <b>{manager.managerPhoneNumber}</b>
            </p>
          </CardContent>
        </Card>
      </Link>
    );
  });
}
