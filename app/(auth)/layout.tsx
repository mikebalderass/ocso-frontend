import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-[#f8f8ff] p-6 md:p-10 w-full">
      <div className="w-full max-w-sm md:max-w-3xl">
        <div className={cn("flex flex-col gap-6")}>
          <Card className="overflow-hidden">
            <CardContent className="grid p-0 md:grid-cols-2">
              {children}
              <div className="relative hidden bg-[#f8f8ff] md:flex justify-center items-center">
                <Image
                  src="/Oxxo_Logo.svg"
                  alt="Logo de Ocso"
                  width={250}
                  height={0}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
