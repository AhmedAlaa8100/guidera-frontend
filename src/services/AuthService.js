import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api/";

export async function registerApi(formData) {
  try {
    const { data } = await axios.post(baseUrl + "users/auth/signup/", formData);
    return data;
  } catch (error) {
    if (error.response) {
      // Server responded with error status
      return error.response.data;
    } else if (error.request) {
      // Request was made but no response received
      return { error: "Network error. Please check your connection." };
    } else {
      // Something else happened
      return { error: error.message };
    }
  }
}

export async function loginApi(formData) {
  try {
    const { data } = await axios.post(baseUrl + "users/auth/login/", formData);
    return data;
  } catch (error) {
    return error.response ? error.response.data.error : error.message;
  }
}
