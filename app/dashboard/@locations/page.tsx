import { cookies } from "next/headers";
import { Location } from "@/entities";
import { API_URL, TOKEN_NAME } from "@/constants";
import SelectLocation from "./_components/SelectLocation";
import LocationCard from "./_components/LocationCard";
import FormNewLocation from "./_components/FormNewLocation";

const LocationsPage = async (props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const searchParams = await props.searchParams;
  const userCookies = await cookies();
  const token = userCookies.get(TOKEN_NAME)?.value;
  const response = await fetch(`${API_URL}/locations`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    next: {
      tags: ["dashboard:locations"],
    },
  });

  const data: Location[] = await response.json();

  return (
    <div className="w-1/2">
      <div className="w-full flex h-[90vh] gap-6">
        <div className="w-1/3">
          <SelectLocation locations={data} store={searchParams.store} />
          <FormNewLocation store={searchParams.store} />
        </div>
        <div className="w-2/3">
          <LocationCard store={searchParams.store} />
        </div>
      </div>
    </div>
  );
};

export default LocationsPage;
