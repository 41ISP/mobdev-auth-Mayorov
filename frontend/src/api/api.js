import axios from "axios";
import { useUserStore } from "../store/useUserStore"

const apiInstance = axios.create({
    //baseURL: "https://potential-adventure-pj5rvj5x57492rqj4-3001.app.github.dev/",
    //baseURL: "https://api.kitek-pg.ru/api/feedback/",
    baseURL: "https://ktkv.dev/api/feedback/",
    header: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
})

apiInstance.interceptors.request.use((config) => {
    const {session} = useUserStore.getState()

    console.log(session)
    if (session?.token) {
        config.header.Authorization = `Bearer ${session.token}`
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
    const res = await apiInstance.post("/messages", message)
    return res
}

const authMe = async () => {
    const res = await apiInstance.get(`/auth/me`)
    return res
}

const deleteMessage = async (id) => {
    const res = await apiInstance.delete(`/massages/${id}`)
    return res
}

const likeMessage = async (id) => {
    const res = await apiInstance.post(`/messages/${id}/like`)
    return res
}

const reportMessage = async (id) => {
    const res = await apiInstance.post(`/essages/${id}/report`)
    return res
}

const getStats = async () => {
    const res = await apiInstance.get(`/stats`)
    return res
}

const getMyMessages = async () => {
    const res = await apiInstance.get(`/my-messages`)
    return res
}

export const api = {
    registerUser,
    LoginUser,
    getMessages,
    sendMessage,
    authMe,
    deleteMessage,
    likeMessage,
    reportMessage,
    getStats,
    getMyMessages
}
