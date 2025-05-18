import { createLocation } from "@/actions/locations/create";
import { API_URL, TOKEN_NAME } from "@/constants";
import { cookies } from "next/headers";
import SelectManager from "./SelectManager";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Manager, Location } from "@/entities";

export default async function FormNewLocation({
  store,
}: {
  store: string | string[] | undefined;
}) {
  if (store) return null;

  const userCookies = await cookies();
  const token = userCookies.get(TOKEN_NAME)?.value;
  const responseManagers = await fetch(`${API_URL}/managers`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    next: {
      tags: ["dashboard:managers"],
    },
  });
  const responseLocation = await fetch(`${API_URL}/locations`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    next: {
      tags: ["dashboard:locations"],
    },
  });

  const dataLocations: Location[] = await responseLocation.json();
  const dataManagers: Manager[] = await responseManagers.json();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex justify-start text-lg w-full cursor-pointer">
          Agregar tienda
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Agregar tienda</DialogTitle>
        </DialogHeader>
        <form action={createLocation}>
          <Label htmlFor="locationName">Nombre</Label>
          <Input placeholder="Ocso Jurikiya" name="locationName" />
          <Label htmlFor="locationAddress">Descripción</Label>
          <Input placeholder="Av De La Luz S/N" name="locationAddress" />
          <Label htmlFor="locationLat">Latitud</Label>
          <Input placeholder="-120" name="locationLat" />
          <Label htmlFor="locationLng">Longitud</Label>
          <Input placeholder="20" name="locationLng" />
          <Label htmlFor="manager">Manager</Label>
          <SelectManager managers={dataManagers} locations={dataLocations} />
          <Button type="submit" className="mt-4 w-full">
            Agregar
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
