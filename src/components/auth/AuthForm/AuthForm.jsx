import FormButton from "../../ui/FormButton/FormButton.jsx";
import {useState} from "react";
import InputField from "../../ui/InputField/InputField.jsx";
import classes from "./AuthForm.module.css";
import {useNavigate} from "react-router-dom";

export default function AuthForm() {
    const [mode, setMode] = useState("login");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        console.log(name, email, password, mode)
        navigate("/today", {})
    }

    return (
        <div className={classes.authForm} >
            <div className={classes.formWrapper} >
                <h2>
                    {mode === "login" ? "С возвращением" : "Создать аккаунт"}
                </h2>

                <p>
                    {mode === "login" ? "Войдите в свой планировщик" : "Начните свой путь к продуктивности"}
                </p>

                <form className={classes.formBlock}>
                    {mode === "register" && (
                        <InputField value={name} type={"text"} onChange={e => setName(e.target.value)} label="Ваше имя" placeholder="Иван Иванович" />
                    )}

                    <InputField id={"emailInput"} value={email} type={"email"} onChange={e => setEmail(e.target.value)} label="email" placeholder="you@example.com" />

                    <InputField id={"passwordInput"} value={password} type={"password"} onChange={e => setPassword(e.target.value)} label="Пароль" placeholder="••••••••" />

                    <FormButton type={"submit"} onClick={(e) => handleSubmit(e)}>Войти</FormButton>
                </form>

                <span>
                    {mode === "login" ? "Нет аккаунта? " : "Уже есть аккаунт? "}
                    <button onClick={() => setMode(mode==="login" ? "register" : "login")}>
                        {mode === "login" ? "Зарегистрироваться" : "Войти"}
                    </button>
                </span>
            </div>
        </div>
    )
}