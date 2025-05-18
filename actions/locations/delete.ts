"use server";

import { API_URL, TOKEN_NAME } from "@/constants";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function deleteLocation(formData: FormData) {
  const locationId = formData.get("deleteValue");
  if (!locationId) return;
  const userCookies = await cookies();
  const token = userCookies.get(TOKEN_NAME)?.value;
  fetch(`${API_URL}/locations/${locationId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  revalidateTag("dashboard:locations");
  redirect("/dashboard");
}
