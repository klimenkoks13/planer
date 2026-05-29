import AuthorizationLoginForm from "../AuthorizationLoginForm/AuthorizationLoginForm.jsx";
import classes from './Authorization.module.css'

export default function Authorization() {
    return (
        <section>
            <div className={classes.authorization_branding}>
                <div className={classes.logo}>Forma</div>
                <h1>Ваш день, <br/>
                    ваши <br/>
                    правила.</h1>
                <p>Планируйте задачи, отслеживайте привычки и анализируйте свой прогресс в одном красивом пространстве.</p>
                <div>
                    <img/>
                    <p>Умный дневной планировщик</p>
                </div>
                <div>
                    <img/>
                    <p>Трекер привычек и настроения</p>
                </div>
                <div>
                    <img/>
                    <p>Глубокая аналитика</p>
                </div>

            </div>
            <div  className={classes.authorization}>
                <AuthorizationLoginForm/>
            </div>
        </section>
    )
}