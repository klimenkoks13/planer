import AuthorizationLoginForm from "../AuthorizationLoginForm/AuthorizationLoginForm.jsx";
import classes from './Authorization.module.css'
import {features} from "../../data.js";
import Features from "../Features.jsx";

export default function Authorization() {
    return (
        <section className={classes.authorizationPage}>
            <div className={classes.authorizationBranding}>
                <div className={classes.logo}>Forma</div>
                <h1>Ваш день, <br/>
                    ваши <br/>
                    правила.</h1>
                <p>Планируйте задачи, отслеживайте привычки и анализируйте свой прогресс в одном красивом пространстве.</p>

                <div className={classes.features}>
                    {features.map((feature) =>
                        <Features feature={feature} key={feature.id} />
                    )}
                </div>
            </div>

            <div  className={classes.authorizationForm}>
                <AuthorizationLoginForm/>
            </div>
        </section>
    )
}