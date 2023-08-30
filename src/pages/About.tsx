import { useMemo } from 'react';
import getAge from "../utils/getAge"
import styles from "./About.module.scss"
import useTimezoneClock from '../hooks/useTimezoneClock';

export default () => {
    const age = useMemo(() => getAge(new Date("2005-11-27")), [])

    return <div id={styles["about"]}>
        <div className="card">
            <h1>About</h1>
            <table>
                <tr>
                    <td>Username</td>
                    <td>A user</td>
                </tr>
                <tr>
                    <td>Current age</td>
                    <td>{age} (bday in 27/11 - DD/MM)</td>
                </tr>
                <tr>
                    <td>Timezone</td>
                    <td>America/Sao_Paulo (<TimezoneClock />)</td>
                </tr>
                <tr>
                    <td>Mastered technologies</td>
                    <td>
                        <ul>
                            <li>JavaScript / TypeScript</li>
                            <li>(S)CSS</li>
                            <li>Git</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>Training technologies</td>
                    <td>
                        <ul>
                            <li>Vite</li>
                            <li>Jest / Vitest</li>
                            <li>React Router</li>
                            <li>React Query</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>Awards</td>
                    <td>
                        <ul>
                            <li>⭐ Concurso Banco do Brasil 2023 - Agente de tecnologia, 102nd position in the disabled people category, at 17 years old</li>
                            <br />
                            <li>Standout Project HappyCode. Age: 9</li>
                            <li>OBA Bronze medal, 2022. Age: 16</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>Loves</td>
                    <td>
                        <ul>
                            <li>Modding Discord</li>
                            <li>Linux</li>
                            <li>Tech</li>
                            <li>Working on existing projects</li>
                            <li>VSCode</li>
                            <li><a href='https://github.com/catppuccin/catppuccin' target="_blank">Catppuccin</a></li>
                        </ul>
                    </td>
                </tr>
            </table>
        </div>
    </div>
}

const timezoneFormatter = new Intl.DateTimeFormat('pt-BR', {
    timeZone: 'America/Sao_Paulo',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
})

const TimezoneClock = () => {
    const time = useTimezoneClock(timezoneFormatter)

    return <>{time}</>
}