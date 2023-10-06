import Cookies from "js-cookie";
import { API } from "@/utils/auth";

export const fetcher = (url) =>
  fetch(url, {
    headers: {
      "token-tt": Cookies.get("token"),
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

export const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

const avatarImageRequest = async (body, method) => {
  const response = await fetch(`${API}/account/image`, {
    method: method,
    headers: {
      "token-tt": Cookies.get("token"),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image: body?.image || null,
    }),
  });
  const data = await response.json();

  return data;
};

export const uploadAvatar = async (body) => avatarImageRequest(body, "PUT");

export const getAvatar = async (body) => avatarImageRequest(body, "GET");

// {
//   "error": "AuthToken invalid or expired"
// }
