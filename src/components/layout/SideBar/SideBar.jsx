import UserBadge from "../UserBadge/UserBadge.jsx";
import classes from "./SideBar.module.css"
import NavItem from "../NavItem/NavItem.jsx";
import Logo from "../../ui/Logo/Logo.jsx";

export default function SideBar() {
    const nav_items = [
        {
            id: 1,
            icon: 'today',
            text: "Сегодня",
            href: '/today',
        },
        {
            id: 2,
            icon: 'planner',
            text: "Планировщик",
            href: '/planner',
        },
        {
            id: 3,
            icon: 'projects',
            text: "Проекты",
            href: '/projects',
        },
        {
            id: 4,
            icon: 'stats',
            text: "Статистика",
            href: '/stats',
        },
        {
            id: 5,
            icon: 'settings',
            text: "Настройки",
            href: '/settings',
        },

    ]

    return (
        <div className={classes.sideBar}>
            <Logo />

            {nav_items.map((item) =>
                <NavItem key={item.id} item={item} />
            )}


            <UserBadge />
        </div>
    )
}