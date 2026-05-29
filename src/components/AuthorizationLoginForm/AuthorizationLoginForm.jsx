import FormButton from "../FormButton/FormButton.jsx";
import {useState} from "react";
import InputField from "../InputField/InputField.jsx";
import classes from "./AuthorizationLoginForm.module.css";

export default function AuthorizationLoginForm() {
    const [mode, setMode] = useState("auth");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        console.log(name, email, password, mode)
    }

    return (
        <div className={classes.formWrapper}>
            <h2>
                {mode === "auth" ? "С возвращением" : "Создать аккаунт"}
            </h2>

            <p>
                {mode === "auth" ? "Войдите в свой планировщик" : "Начните свой путь к продуктивности"}
            </p>

            <form className={classes.formBlock}>
                {mode === "login" && (
                    <InputField value={name} onChange={e => setName(e.target.value)} label="Ваше имя" placeholder="Иван Иванович" />
                )}

                <InputField value={email} onChange={e => setEmail(e.target.value)} label="email" placeholder="you@example.com" />

                <InputField value={password} onChange={e => setPassword(e.target.value)} label="Пароль" placeholder="••••••••" />

                <FormButton onClick={(e) => handleSubmit(e)}>Войти</FormButton>
            </form>

            <span>
                {mode === "auth" ? "Нет аккаунта? " : "Уже есть аккаунт? "}
                <button onClick={() => setMode(mode==="auth" ? "login" : "auth")}>
                    {mode === "auth" ? "Зарегистрироваться" : "Войти"}
                </button>
            </span>
        </div>
    )
}