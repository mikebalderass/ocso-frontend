"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Location, Manager } from "@/entities";

export default function SelectManager({
  managers,
  locations,
  defaultManager,
}: {
  managers: Manager[];
  locations: Location[];
  defaultManager?: string;
}) {
  const disabledKeys = locations
    .map((location: Location) => {
      if (location.manager?.managerId !== defaultManager)
        return location.manager?.managerId;
    })
    .filter((managerId) => managerId !== undefined);

  return (
    <Select name="manager">
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Selecciona un manager" />
      </SelectTrigger>
      <SelectContent defaultValue={defaultManager}>
        {managers.map((manager: Manager) => {
          return (
            <SelectItem
              key={manager.managerId}
              value={manager.managerId}
              disabled={disabledKeys.includes(manager.managerId)}
            >
              {manager.managerFullName}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}
