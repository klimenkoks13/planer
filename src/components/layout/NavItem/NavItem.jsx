import classes from './NavItem.module.css'
import Icon from "../../ui/Icon/Icon.jsx";

export default function NavItem( { item }) {
    return (
        <a href={item.href} className={classes.itemLink}>
            <Icon name={item.icon} className={classes.itemIcon}/>
            {item.text}
        </a>
    )
}