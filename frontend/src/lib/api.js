import axiosInstance from "./axios.js";

export const signup = async (signupData) => {
    const response = await axiosInstance.post("/auth/signup",signupData);
    return response.data;
};

export const getAuthUser = async () => {
    const res = await axiosInstance.get("/auth/me");
    return res.data;
};

export const completeOnBoarding = async (formData) => {
    const res = await axiosInstance.post("/auth/onboarding",formData);
    return res.data;
};