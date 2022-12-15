import useStyleifyMode from "../hooks/useStyleifyMode"
import styles from "./Styleify.module.scss"

export default () => {
    const styleify = useStyleifyMode()

    const changeStorage = () => {
        var x = window.open("", "StorageUpdater", "width=10,height=10");
        if(x != null) {
            x.localStorage.setItem("styleify", styleify ? "false" : "true")
            x.close();
        }
    }

    return <button onClick={changeStorage} className={styles['styleify-button']}>
        Do a styleify
    </button>
}