import { useState } from "react"
import Button from "../components/Button"
import Input from "../components/Input"
import { Link } from "react-router-dom"
import { api } from "../api/api"

const SignUp = () => {
    const [error, setError] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")

        if (e.target.password.value !== e.target.
            password2.value) {
            setError("Пароли не совпадают")
            return
        }


        const user = {
            username: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }

    try {
        const data = await api.registerUser(user)
    } catch (error){
        setError(error.response.data.error)
        console.error(error)
    }}
    return (
        <div className="auth-page">
            <div className="auth-container">
                <h1 className="auth-title">Регистрация</h1>
                {error.length > 0 && <div className="auth-error">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <Input
                        id="username"
                        name="username"
                        minLength={5}
                        maxLength={15}
                        type="text"
                        label="Имя пользователя"
                        required
                        placeholder="Введите имя пользователя"
                    />
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        label="Почта"
                        minLength={6}
                        maxLength={40}
                        required
                        placeholder="Введите почту"
                    />
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        minLength={4}
                        maxLength={40}
                        label="Пароль"
                        required
                        placeholder="Введите пароль"
                    />
                    <Input
                        id="password2"
                        name="password2"
                        type="password"
                        label="Подтверждение пароля"
                        required
                        placeholder="Подтвердите пароль"
                    />
                    <Button>Зарегистрироваться</Button>
                </form>
                <div className="auth-footer">
                    <p>
                        <Link to={"/signin"}>Вход</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignUp
