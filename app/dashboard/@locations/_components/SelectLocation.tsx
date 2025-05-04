"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Location } from "@/entities";
import { useRouter } from "next/navigation";

export default function SelectLocation({
  locations,
  store,
}: {
  locations: Location[];
  store: string | string[] | undefined;
}) {
  const router = useRouter();

  const handleStoreChange = (store: string) => {
    if (store === "0" || store === "") {
      router.push(`/dashboard`);
    } else {
      router.push(`/dashboard?store=${store}`);
    }
  };

  return (
    <div>
      <h2 className="text-xl mb-2">Selecciona una locación</h2>
      <ScrollArea className="flex flex-col gap-2 w-full">
        <div className="w-full flex flex-col gap-2">
          {locations.map((location) => (
            <Button
              key={location.locationName}
              variant={
                location.locationId.toString() === store ? "default" : "outline"
              }
              onClick={() => handleStoreChange(location.locationId.toString())}
              className="flex justify-start text-lg"
            >
              {location.locationName}
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
