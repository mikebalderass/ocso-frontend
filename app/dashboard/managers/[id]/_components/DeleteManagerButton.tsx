import deleteManager from "@/actions/managers/delete";
import { Button } from "@/components/ui/button";

export default function DeleteManagerButton({
  managerId,
}: {
  managerId: string;
}) {
  const deleteByManagerId = deleteManager.bind(null, managerId);
  return (
    <form action={deleteByManagerId}>
      <Button type="submit">Eliminar</Button>
    </form>
  );
}
