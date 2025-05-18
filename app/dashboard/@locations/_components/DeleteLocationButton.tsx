import deleteLocation from "@/actions/locations/delete";
import { Button } from "@/components/ui/button";

export default function DeleteLocationButton({
  store,
}: {
  store: string | string[] | undefined;
}) {
  if (!store) return null;
  return (
    <form action={deleteLocation} className="my-4">
      <Button
        type="submit"
        name="deleteValue"
        value={store}
        className="text-white cursor-pointer w-full"
      >
        Borrar tienda
      </Button>
    </form>
  );
}
