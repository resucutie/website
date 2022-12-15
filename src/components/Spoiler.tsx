import React from "react";
import styles from "./Spoiler.module.scss";

export default ({children}: {children: React.ReactNode}) => {
    const [revealed, setRevealed] = React.useState(false)

    return <span className={!revealed ? styles.spoiler : ""} onClick={() => !revealed && setRevealed(true)}>
        {children}
    </span>
}