import { API_URL, TOKEN_NAME } from "@/constants";
import SelectManager from "./SelectManager";
import { Location, Manager } from "@/entities";
import { cookies } from "next/headers";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { updateLocation } from "@/actions/locations/update";

export default async function FormUpdateLocation({
  store,
}: {
  store: string | string[] | undefined;
}) {
  if (!store || store === undefined || typeof store === "object") return null;

  const userCookies = await cookies();
  const token = userCookies.get(TOKEN_NAME)?.value;
  const responseManagers = await fetch(`${API_URL}/managers`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    next: {
      tags: ["dashboard:managers"],
    },
  });
  const dataManagers: Manager[] = await responseManagers.json();
  const responseLocations = await fetch(`${API_URL}/locations`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    next: {
      tags: ["dashboard:locations"],
    },
  });
  const dataLocations: Location[] = await responseLocations.json();

  let foundLocation = dataLocations.find(
    (location) => location.locationId === +store,
  );
  let foundManager = dataManagers.find(
    (manager) => manager.managerId === foundLocation?.manager?.managerId,
  );

  const updateWithStoreId = updateLocation.bind(null, store);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Actualizar tienda</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Actualizar tienda</DialogTitle>
        </DialogHeader>
        <form
          action={updateWithStoreId}
          className="flex flex-col gap-2 w-full rounded-lg"
        >
          <Label htmlFor="locationName">Nombre</Label>
          <Input
            defaultValue={foundLocation?.locationName}
            placeholder="Ocso Jurikiya"
            name="locationName"
            required
          />
          <Label htmlFor="locationAddress">Dirección</Label>
          <Input
            defaultValue={foundLocation?.locationAddress}
            placeholder="Av De La Luz S/N"
            name="locationAddress"
            required
          />
          <Label htmlFor="locationLat">Latitud</Label>
          <Input
            defaultValue={foundLocation?.locationLatLng[0].toString()}
            placeholder="-120"
            name="locationLat"
            required
          />
          <Label htmlFor="locationLng">Longitud</Label>
          <Input
            defaultValue={foundLocation?.locationLatLng[1].toString()}
            placeholder="20"
            name="locationLng"
            required
          />
          <Label htmlFor="manager">Manager</Label>
          <SelectManager
            defaultManager={foundManager?.managerId}
            managers={dataManagers}
            locations={dataLocations}
          />
          <Button type="submit">Actualizar</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
