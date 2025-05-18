"use server";

import { API_URL, TOKEN_NAME } from "@/constants";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export default async function createManager(formData: FormData) {
  let manager: any = {};
  for (const key of formData.keys()) {
    manager[key] = formData.get(key);
  }
  const userCookies = await cookies();
  const token = userCookies.get(TOKEN_NAME)?.value;
  const response = await fetch(`${API_URL}/managers`, {
    method: "POST",
    body: JSON.stringify(manager),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (response.status === 201) revalidateTag("dashboard:managers");
}
