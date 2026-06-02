import AuthForm from "../../components/auth/AuthForm/AuthForm.jsx";
import AuthBranding from "../../components/auth/AuthBranding/AuthBranding.jsx";
import classes from './AuthPage.module.css'

export default function AuthPage() {
    return (
        <div className={classes.authPage}>
            <AuthBranding />
            <AuthForm />
        </div>
    )
}