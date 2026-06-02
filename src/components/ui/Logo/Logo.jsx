import Icon from '../../ui/Icon/Icon.jsx';
import classes from './Logo.module.css'

export default function Logo() {
    return (
        <div className={classes.logoBlock}>
            <Icon name="logo" width={"1.6rem"} height={"1.6rem"} color={"var(--color-icon-light)"} className={classes.logoIcon} />
            <span className={classes.logoText}>Forma</span>
        </div>
    )
}