export const saveToStorage = (name, object) => {
  window.localStorage.setItem(name, JSON.stringify(object));
};

export const getFromStorage = (name) => {
  const data = window.localStorage.getItem(name);
  return data ? JSON.parse(data) : [];
};
