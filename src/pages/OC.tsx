import styles from "./About.module.scss"

export default () => {
    return <div id={styles["about"]}>
        <a className={styles["checkMoreArts"]} href="https://cloud.uratania.ch/s/dnjxAZrwCd2BoE8">Check out for more arts</a>
        <img className={styles["ref"]} src="/ref.png" />
        {/* <p>Thanks to <a href="https://twitter.com/dishflowers">@dishflowers@twitter.com</a> for doing it!</p> */}
    </div>
}