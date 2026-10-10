import axios from "axios";
import { useUserStore } from "../store/useUserStore"

const apiInstance = axios.create({
    baseURL: "https://api.kitek-pg.ru/api/feedback/",
    header: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
})

apiInstance.interceptors.request.use((config) => {
    const {session} = useUserStore.getState()

    if (session?.token) {
        config.header.Authoriaztion = `Bearer ${session.token}`
    }

    return config
}) 

const registerUser = async (user) => {
    const res = await apiInstance.post("/auth/register", user)
    return res
}

const LoginUser = async (user) => {
    const res = await apiInstance.post("/auth/login", user)
    return res
}

const getMessages = async () => {
    const res = await apiInstance.get("/messages")
    return res
}

const sendMessage = async (message) => {
    const res = await apiInstance.post("/messages" message)
    return res
}

export const api = {
    registerUser,
    LoginUser,
    getMessages,
    sendMessage
}
