export const fetcher = async ({ url, method, body, json = true }) => {
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
  return fetcher({ url: "/api/register", method: "post", body: user });
};

export const signin = (user) => {
  return fetcher({ url: "/api/signin", method: "post", body: user });
};

export const signout = () => {
  return fetcher({ url: "/api/signout", method: "get", body: null });
};

export const newBoard = (boardTitle: string) => {
  console.log(boardTitle);
  return fetcher({
    url: "/api/board",
    method: "post",
    body: { title: boardTitle },
  });
};

export const newTask = (title, description, subtasks, status, boardId) => {
  return fetcher({
    url: "/api/task",
    method: "post",
    body: {
      title: title,
      description: description,
      subtasks: subtasks,
      status: status,
      boardId: boardId,
    },
  });
};

export const updateTask = (taskId, taskStatus, subtasks) => {
  return fetcher({
    url: "/api/task",
    method: "put",
    body: {
      taskId: taskId,
      taskStatus: taskStatus,
      subtasks: subtasks,
    },
  });
};

export const deleteBoard = (boardId) => {
  return fetcher({
    url: "/api/board",
    method: "delete",
    body: {
      boardId: boardId,
    },
  });
};

export const deleteTask = (taskId) => {
  return fetcher({
    url: "/api/task",
    method: "delete",
    body: {
      taskId: taskId,
    },
  });
};
