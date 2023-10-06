const API = "https://test-task.test211.workers.dev";

export const registerUser = async (email, password) => {
  const response = await fetch(`${WP_API}/user`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const data = await response.json();

  return data;
};
