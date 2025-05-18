import { Location } from "@/entities";
import { cookies } from "next/headers";
import { API_URL, TOKEN_NAME } from "@/constants";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import DeleteLocationButton from "./DeleteLocationButton";

export default async function LocationCard({
  store,
}: {
  store: string | string[] | undefined;
}) {
  if (!store) return null;

  const token = (await cookies()).get(TOKEN_NAME)?.value;
  const response = await fetch(`${API_URL}/locations/${store}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    next: {
      tags: ["dashboard:locations", `dashboard:locations:${store}`],
    },
  });

  const data: Location = await response.json();

  return (
    <Card>
      <CardHeader className="pb-2">
        <h2 className="w-full text-2xl font-bold">{data.locationName}</h2>
      </CardHeader>
      <CardContent className="flex flex-col w-full">
        <p className="w-full">
          Manager:{" "}
          <Link href={{ pathname: `/dashboard/managers` }}>
            <b>{data.manager?.managerFullName}</b>
          </Link>
        </p>
        <p className="w-full">
          Dirección: <b>{data.locationAddress}</b>
        </p>
        <iframe
          className="border-2 border-orange-800 rounded-md my-2 w-full"
          width="300"
          height="300"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAz0Y6dhhUVleZmt7-H4PO1QQWCSEz3LBg
               &q=${data.locationLatLng[0]},${data.locationLatLng[1]}`}
        ></iframe>
        <DeleteLocationButton store={store} />
      </CardContent>
    </Card>
  );
}
