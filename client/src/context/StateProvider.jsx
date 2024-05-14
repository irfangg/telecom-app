import { Notify } from "../utils";

export const fetchCustemers = async (cb, auth) => {
  try {
    const response = await fetch("/api/private/customers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.token}`,
      },
    });
    const data = await response.json();
    if (data.success) {
      cb(data.data);
      return Notify(data.data, "success");
    } else {
      // navigate("/login");
      return Notify("You are not authorized please login", "error");
    }
  } catch (error) {
    //   navigate("/login");
    return Notify("Internal server error", "error");
  }
};
