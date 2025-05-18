import { TOKEN_NAME } from "@/constants";
import { cookies } from "next/headers";
import { cache } from "react";

export const authHeaders = async () => {
  const userCookies = await cookies();
  const token = userCookies.get(TOKEN_NAME)?.value;
  return {
    Authorization: `Bearer ${token}`,
  };
};
