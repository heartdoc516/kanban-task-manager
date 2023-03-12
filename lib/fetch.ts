export const fetcher = async ({ url, method, body, json = true }) => {
  console.log(url, method, body);
  const res = await fetch(url, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("API error");
  }

  if (json) {
    const data = await res.json();
    return data.data;
  }
};

export const register = (user) => {
  return fetcher({ url: "api/register", method: "post", body: user });
};

export const signin = (user) => {
  return fetcher({ url: "api/signin", method: "post", body: user });
};

export const newBoard = (boardTitle) => {
  console.log(boardTitle);
  return fetcher({
    url: "/api/newboard",
    method: "post",
    body: { title: boardTitle },
  });
};

export const newTask = () => {
  return fetcher({
    url: "/api/newtask",
    method: "post",
    body: {
      title: "task 1",
    },
  });
};
