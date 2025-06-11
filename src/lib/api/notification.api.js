import axios from "axios";
import { NOTIF_URL } from "./api_url";

// Add  Notifications
export async function addNotifications({ token, values }) {
  const options = {
    method: "POST",
    url: NOTIF_URL,
    data: { values },
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  const { data } = await axios.request(options);
  console.log(data);

  return data;
}

//Get All Notifications
export async function getAllNotifications({ token, page }) {
  const options = {
    method: "GET",
    url: `${NOTIF_URL}/me`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    page,
  };

  const { data } = await axios.request(options);
  console.log(data);

  return data;
}

// Get Unread Notifications
export async function getUnreadCountNotif({ token }) {
  const options = {
    method: "GET",
    url: `${NOTIF_URL}/unread-count`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  const { data } = await axios.request(options);
  console.log(data);

  return data;
}

// Add a Notification Mark
export async function addMarkNotif({ token, notifId }) {
  const options = {
    method: "PATCH",
    url: `${NOTIF_URL}/${notifId}/read`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  const { data } = await axios.request(options);
  console.log(data);

  return data;
}

// Add All Notifications Mark
export async function addAllMark({ token }) {
  const options = {
    method: "PATCH",
    url: `${NOTIF_URL}/read-all`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  const { data } = await axios.request(options);
  console.log(data);

  return data;
}

// Delete a Notification
export async function deleteNotif({ token, notifId }) {
  const options = {
    method: "DELETE",
    url: `${NOTIF_URL}/${notifId}`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  const { data } = await axios.request(options);
  console.log(data);

  return data;
}

// Delete All Notifications
export async function deleteAllNotif({ token }) {
  const options = {
    method: "DELETE",
    url: `${NOTIF_URL}/deleteAll`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  const { data } = await axios.request(options);
  console.log(data);

  return data;
}
