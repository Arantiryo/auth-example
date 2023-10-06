export const API = "https://test-task.test211.workers.dev";

const userPostRequest = async (email, password, path) => {
  const response = await fetch(`${API}${path}`, {
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

export const registerUser = async (email, password) =>
  userPostRequest(email, password, "/user");

export const loginUser = async (email, password) =>
  userPostRequest(email, password, "/login");
