import styles from "./About.module.scss"

export default () => {
    return <div id={styles["about"]}>
        <img className={styles["ref"]} src="/ref.png" />
        <p>Thanks to <a href="https://twitter.com/dishflowers">@dishflowers@twitter.com</a> for doing it!</p>
    </div>
}