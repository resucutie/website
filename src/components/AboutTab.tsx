import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./AboutTab.module.scss"
import joinClasses from "../utils/joinClasses";

export default () => {
    const location = useLocation()

    return <div className={styles["tabContainer"]}>
        <Link to="/about" className={joinClasses(styles["tabElement"], location.pathname !== "/about" || styles["active"])}>About</Link>
        <Link to="/about/oc" className={joinClasses(styles["tabElement"], location.pathname !== "/about/oc" || styles["active"])}>OC</Link>
    </div>
}