import { user } from '../../../data/user_date.js'
import classes from './UserBadge.module.css'
import Button from "../../ui/Button/Button.jsx";
import {useNavigate} from "react-router-dom";
import Icon from "../../ui/Icon/Icon.jsx";

export default function UserBadge() {
    const navigate = useNavigate();

    function handleButton() {
        navigate("/", {})
    }

    return (
        <div className={classes.userBadge}>
            {user.avatar
                ? <img src={user.avatar} alt="user avatar" className={classes.userAvatar}/>
                : <div className={classes.userAvatar}>{user.firstName.charAt(0)}</div>
            }

            <div className={classes.userInfo} >
                <p className={classes.userName}>{user.firstName + " " + user.lastName}</p>
                <p className={classes.userPlan}>Plan</p>
            </div>

            <Button onClick={handleButton} className={classes.exitButton} width={"2rem"} height={"2rem"} backgroundColor={"var(--color-btn-bg-dark-hover)"}>
                <Icon name={"close"} width={"1rem"} haight={"1rem"} color={"var(--color-text-primary)"} />
            </Button>
        </div>
    )
}