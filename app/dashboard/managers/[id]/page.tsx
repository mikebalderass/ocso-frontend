import { API_URL, TOKEN_NAME } from "@/constants";
import { Manager } from "@/entities";
import { cookies } from "next/headers";
import ManagerCard from "./_components/ManagerCard";
import DeleteManagerButton from "./_components/DeleteManagerButton";

export default async function ManagerPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const userCookies = await cookies();
  const token = userCookies.get(TOKEN_NAME)?.value;

  const response = await fetch(`${API_URL}/managers/${params.id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    next: {
      tags: [`dashboard:managers:${params.id}`, `dashboard:managers`],
    },
  });
  const data: Manager = await response.json();

  return (
    <div className="flex flex-col gap-10 flex-grow-0 items-center justify-center">
      <ManagerCard manager={data} />
      <div className="bg-white shadow-medium rounded-md px-10 py-2">
        <DeleteManagerButton managerId={data.managerId} />
      </div>
    </div>
  );
}
