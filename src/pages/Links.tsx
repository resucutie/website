import styles from "./Links.module.scss"
import { FaGithub, FaDiscord, FaTwitter, FaMastodon } from "react-icons/fa"
import { SiMatrix, SiEpicgames } from "react-icons/si"
import { MdEmail } from "react-icons/md"
import React from "react"

export default () => {
    return <div id={styles["links"]}>
        <div className="card">
            <h1>Links</h1>
            <h3>Active</h3>
            <LinkIcon icon={FaGithub} href="https://github.com/abUwUser">abuwuser</LinkIcon>
            <LinkIcon icon={FaDiscord} href="https://discord.com/users/264062457448759296">@resucutie</LinkIcon>
            <LinkIcon icon={FaMastodon} href="https://furry.engineer/@resu">@resu@furry.engineer</LinkIcon>
            <LinkIcon icon={MdEmail} href="mailto:resucutie@proton.me">Email <i>(not used for contact)</i></LinkIcon>
            <LinkIcon icon={SiEpicgames}>abUwUser</LinkIcon>
            <LinkIcon icon={SiMatrix} href="https://matrix.to/#/@abuwuser:catvibers.me">@abuwuser:catvibers.me</LinkIcon>
            
            <h3>Inactive</h3>
            <LinkIcon icon={FaTwitter} href="https://twitter.com/auwuser">auwuser</LinkIcon>
        </div>
    </div>
}

// create a component to wrap an anchor tag and an icon
export const LinkIcon = ({href, children, icon: Icon}: {href?: string, children: React.ReactNode, icon: any}) => {
    return <span>
        <Icon/>
        <a href={href}>{children}</a>
    </span>
}