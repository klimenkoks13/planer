import {features} from "../../../data/features_data.js";
import classes from "./AuthBranding.module.css";
import Logo from "../../ui/Logo/Logo.jsx";

export default function AuthBranding() {
    return (
        <div className={classes.authBranding}>
            <div style={{ position:"absolute", top:"-5%", left:"75%", width:280, height:280, borderRadius:"50%", background: "#FFD6E0", opacity:.18 }}/>
            <div style={{ position:"absolute", top:"45%", left:"50%", width:160, height:160, borderRadius:"50%", background:"#ffeea6", opacity:.12 }}/>
            <div style={{ position:"absolute", bottom:40, left:-60, width:220, height:220, borderRadius:"50%", background:"#FFD6E0", opacity:.15 }}/>

            <div className={classes.brandingWrapper}>
                <Logo />

                <h1 className={classes.brandingHeading}>Ваш день, <br/>
                    <em>ваши</em> <br/>
                    правила.</h1>
                <p className={classes.brandingParagraph}>Планируйте задачи, отслеживайте привычки и анализируйте свой прогресс в одном красивом пространстве.</p>

                <div className={classes.featuresWrapper}>
                    {features.map((feature) =>
                        <div className={classes.featureBlock} key={feature.id}>
                            <span className={classes.featureIcon}>{feature.icon}</span>
                            <p className={classes.featureText}>{feature.text}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}