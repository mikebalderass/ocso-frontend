"use server";

import { API_URL, TOKEN_NAME } from "@/constants";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export default async function createManager(
  managerId: string,
  formData: FormData,
) {
  const userCookies = await cookies();
  const token = userCookies.get(TOKEN_NAME)?.value;
  const response = await fetch(`${API_URL}/managers/${managerId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response.status);
  if (response.status === 200) revalidateTag("dashboard:managers");
}
