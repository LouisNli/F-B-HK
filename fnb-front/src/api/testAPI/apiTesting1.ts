import api from "../axiosConfig";

export const testing1 = async () => {
  try {
    const response = await api.get("/api/testing1");
    console.log("[api] /testing1 response:", response);
    console.log("[api] /testing1 response data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching test data:", error);
    throw error;
  }
};
