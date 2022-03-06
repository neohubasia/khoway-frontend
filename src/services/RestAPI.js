import { API_URL, customAxios } from "./Interceptor";

// User routes
export const signUp = (data) =>
  customAxios.post(`${API_URL}/api/sign-up`, data);

export const signIn = (data) =>
  customAxios.post(`${API_URL}/api/sign-in`, data);

export const changePassword = (data) =>
  customAxios.post(`${API_URL}/users/changePassword`, data);

export const currentUser = () =>
  customAxios.get(`${API_URL}/users/currentUser`);

// Room routes
export const createRoom = (data) =>
  customAxios.post(`${API_URL}/api/chat_room`, data);

export const getRoomList = (data) =>
  customAxios.get(`${API_URL}/api/chat_rooms`, data);
