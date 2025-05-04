import axios from "axios";
import { cookies } from "next/headers";
import { Location } from "@/entities";
import { TOKEN_NAME } from "@/constants";
import SelectLocation from "./_components/SelectLocation";
import LocationCard from "./_components/LocationCard";

const LocationsPage = async (props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const searchParams = await props.searchParams;
  const userCookies = await cookies();
  const token = userCookies.get(TOKEN_NAME)?.value;
  let { data } = await axios.get<Location[]>(
    "http://127.0.0.1:4000/locations",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return (
    <div className="w-1/2">
      <div className="w-full flex h-[90vh] gap-6">
        <div className="w-1/3">
          <SelectLocation locations={data} store={searchParams.store} />
        </div>
        <div className="w-2/3">
          <LocationCard store={searchParams.store} />
        </div>
      </div>
    </div>
  );
};

export default LocationsPage;
