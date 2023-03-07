import styles from "./Projects.module.scss"

export default () => {
    return <div id={styles["projects"]}>
        <div className={styles["scroll"]}>
            <div><h1>Projects</h1></div>
            <div className="card">
                <h2>Quevi</h2>
                <p>
                    Quevi is an decentralized app focused on providing an uninterrupted and accessible studying process by randomly providing questions from existing exams (e.g. PAS, ENEM, etc.)
                </p>
                <BigLinkButton href="https://github.com/Quevi-org">Check out on GitHub</BigLinkButton>
            </div>
            <div className="card">
                <h2>hospitalurgency.com</h2>
                <p>
                    hospitalurgency.com is a website that shows the nearest hospitals close to your area that have the shortest queue. Currently it is just a concept, and all of the data were mocked up. Maruska Tatiana Nascimento Silva Bueno, CEUB's computer engineering coordinator, has complimented this project. Made for a schoolar project.
                </p>
                <BigLinkButton href="http://hospitalurgency.auser.catvibers.me">Open the website</BigLinkButton>
            </div>
            <div className="card">
                <h2>Culture</h2>
                <p>
                    Culture is a website that shows cultural attractions near your location without the influence of an algorithm. Made for a schoolar project.
                </p>
                <BigLinkButton href="http://culutre.auser.catvibers.me">Open the website</BigLinkButton>
            </div>
            <div className="card">
                <h2>Examer</h2>
                <p>
                    Examer is a CLI application for exam evaluation. Made for a schoolar project.
                </p>
                <BigLinkButton href="https://github.com/abUwUser/Examer">Check out on GitHub</BigLinkButton>
            </div>
        </div>
    </div>
}

export const BigLinkButton = ({children, href}: {children: React.ReactNode, href: string}) => {
    return <button onClick={() => window.open(href, "_blank")} className={styles.bigLinkButton}>{children}</button>
}
