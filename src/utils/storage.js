//用于封装所有的localstragtge

const TOkEN_KEY = "Fun-Code";

export const setToken = (token) => localStorage.setItem(TOkEN_KEY, token);
export const getToken = () => localStorage.getItem(TOkEN_KEY);
export const removeToken = () => localStorage.removeItem(TOkEN_KEY);
export const hasToken = () => !!getToken();
