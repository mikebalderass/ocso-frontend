import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function SignupPage() {
  return (
    <form className="p-6 md:p-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl font-bold">¡Bienvenido!</h1>
          <p className="text-balance text-muted-foreground">
            ¡Regístrate para comenzar a usar Ocso!
          </p>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Correo electrónico</Label>
          <Input
            id="email"
            type="email"
            placeholder="correo@ejemplo.com"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Contraseña</Label>
          <Input
            id="password"
            type="password"
            required
            placeholder="********"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="">Confirmar contraseña</Label>
          <Input
            id="password"
            type="password"
            required
            placeholder="********"
          />
        </div>
        <Button type="submit" className="w-full">
          Registrarse
        </Button>
        <div className="text-center text-sm">
          ¿Ya tienes una cuenta?{" "}
          <Link href="/login" className="underline underline-offset-4">
            Inicia sesión
          </Link>
        </div>
      </div>
    </form>
  );
}
