import { Link, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import styles from './App.module.scss'
import Linux from './components/88x31'
import Return from './components/Return'
import StyleifyButton from './components/StyleifyButton'
import useStyleifyMode from './hooks/useStyleifyMode'
import About from './pages/About'
import Links from './pages/Links'
import Projects from './pages/Projects'
import Banner from "./components/88x31"
import AboutTab from './components/AboutTab'
import OC from './pages/OC'

function App() {
    const styleify = useStyleifyMode()
    const location = useLocation()

    return <div className={`app${styleify ? " styleify" : ""}`}>
        <Routes>
            <Route path="/" element={<ClickToEnter />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<><Return /><Outlet /></>}>
                <Route path="about" element={<><AboutTab /><Outlet /></>}>
                    <Route index element={<About />}></Route>
                    <Route path="oc" element={<OC />}/>
                </Route>
                <Route path="links" element={<Links />} />
                <Route path="projects" element={<Projects />} />
            </Route>
        </Routes>
        {location.pathname !== "/" && <StyleifyButton />}
    </div>
}

export const Home = () => {
    return <div id={styles["home"]}>
        <Link to="/about">About</Link>
        <Link to="/links">Links</Link>
        <Link to="/projects">Projects</Link>
        <Banner />
    </div>
}

export const ClickToEnter = () => {
    return <div id={styles["clickToEnter"]}>
        <img src="/enter.png" />
        <Link to="/home">click</Link>
    </div>
}

export default App
