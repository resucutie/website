import {useNavigate} from "react-router-dom"
import { MdArrowRightAlt } from "react-icons/md"
import useStyleifyMode from "../hooks/useStyleifyMode"
import styles from "./Return.module.scss"

export default () => {
    const nav = useNavigate()
    const styleify = useStyleifyMode()

    return <button onClick={() => nav("/home")} className={styles["returnButton"]}>
        {styleify && <MdArrowRightAlt />}
        Return
    </button>
}