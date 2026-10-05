import axios from "axios";

const apiInstance = axios.create({
    baseURL: "https://api.kitek-pg.ru/api/feedback/",
    header: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
})

const registerUser = async (user) => {
    const res = await apiInstance.post("/auth/register", user)
    return res
}

const LoginUser = async (user) => {
    const res = await apiInstance.post("/auth/login", user)
    return res
}

export const api = {
    registerUser,
    LoginUser
}
