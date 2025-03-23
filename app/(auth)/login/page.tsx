"use client";

import Link from "next/link";
import { Input, Button, Spinner } from "@nextui-org/react";
import axios from "axios";
import { API_URL } from "@/constants";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { sub } from "framer-motion/m";

export default function LoginPage() {
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let authData: any = {};
    authData.userEmail = formData.get("userEmail");
    authData.userPassword = formData.get("userPassword");
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
    <form
      className="bg-primary px-5 py-2 rounded-xl w-80"
      onSubmit={handleSubmit}
    >
      <p className="text-2xl my-4 text-white">Iniciar sesión</p>
      <div className="flex flex-col gap-2 my-4 items-center">
        <Input
          label="Email"
          name="userEmail"
          type="email"
          isRequired={true}
          size="sm"
          radius="sm"
        />
        <Input
          label="Contraseña"
          name="userPassword"
          type="password"
          isRequired={true}
          size="sm"
          radius="sm"
        />
      </div>
      <div className="flex flex-col items-center gap-2">
        <Button
          className="w-full text-foreground"
          color="secondary"
          type="submit"
          isLoading={submitting}
          radius="sm"
        >
          {submitting ? "Iniciando sesión..." : "Iniciar Sesión"}
        </Button>
        <p className="text-white">
          ¿No tienes cuenta?{" "}
          <Link href="/signup" className="font-bold underline">
            Registrate
          </Link>
        </p>
      </div>
    </form>
  );
}
