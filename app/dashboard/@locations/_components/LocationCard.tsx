import { Location } from "@/entities";
import axios from "axios";
import { cookies } from "next/headers";
import { API_URL, TOKEN_NAME } from "@/constants";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default async function LocationCard({
  store,
}: {
  store: string | string[] | undefined;
}) {
  if (!store) return null;
  const token = (await cookies()).get(TOKEN_NAME)?.value;
  const { data } = await axios.get<Location>(`${API_URL}/locations/${store}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
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
      </CardContent>
    </Card>
  );
}
