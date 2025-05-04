"use client";

import Link from "next/link";
import axios from "axios";
import { API_URL } from "@/constants";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const formData = new FormData(e.target);
    let authData: any = {};
    authData.userEmail = formData.get("userEmail");
    authData.userPassword = formData.get("userPassword");
    console.log(authData);
    try {
      const response = await axios.post(
        `${API_URL}/auth/login`,
        {
          ...authData,
        },
        {
          withCredentials: true,
        },
      );
      if (response.status === 201) router.push("/dashboard");
      setSubmitting(false);
    } catch (e) {
      setSubmitting(false);
    }
    return;
  };

  return (
    <form className="p-6 md:p-8" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl font-bold">Bienvenido de vuelta</h1>
          <p className="text-balance text-muted-foreground">
            Inicia sesión en tu cuenta de Ocso
          </p>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="userEmail">Correo electrónico</Label>
          <Input
            id="userEmail"
            name="userEmail"
            type="email"
            placeholder="correo@ejemplo.com"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="userPassword">Contraseña</Label>
          <Input
            id="userPassword"
            name="userPassword"
            type="password"
            required
            placeholder="********"
          />
        </div>
        <Button type="submit" className="w-full" disabled={submitting}>
          {submitting ? "Iniciando sesión..." : "Iniciar sesión"}
        </Button>
        <div className="text-center text-sm">
          ¿Aun no tienes una cuenta?{" "}
          <Link href="/signup" className="underline underline-offset-4">
            Registrate
          </Link>
        </div>
      </div>
    </form>
  );
}
