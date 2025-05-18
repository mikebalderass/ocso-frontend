"use server";

import { API_URL, TOKEN_NAME } from "@/constants";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export default async function createManager(
  managerId: string,
  formData: FormData,
) {
  let manager: any = {};
  for (const key of formData.keys()) {
    manager[key] = formData.get(key);
  }
  const userCookies = await cookies();
  const token = userCookies.get(TOKEN_NAME)?.value;
  const response = await fetch(`${API_URL}/managers/${managerId}`, {
    method: "PATCH",
    body: JSON.stringify(manager),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (response.status === 200) {
    revalidateTag("dashboard:managers");
    revalidateTag(`dashboard:managers:${managerId}`);
  }
}
