import SideBar from "../SideBar/SideBar.jsx";
import {Outlet} from "react-router-dom";
import classes from "./Layout.module.css"

export default function Layout() {
    return (
        <div className={classes.layout}>
            <SideBar />
            <Outlet />
        </div>
    )
}