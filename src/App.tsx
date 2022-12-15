import { Link, Outlet, Route, Routes } from 'react-router-dom'
import styles from './App.module.scss'
import Linux from './components/Linux'
import StyleifyButton from './components/StyleifyButton'
import useStyleifyMode from './hooks/useStyleifyMode'
import About from './pages/About'
import Links from './pages/Links'

function App() {
    const styleify = useStyleifyMode()

    return <div className={`app${styleify ? " styleify" : ""}`}>
        <Routes>
            <Route path="/" element={<ClickToEnter />} />
            <Route path="/home" element={<><Home /><StyleifyButton /></>} />
            <Route path="/" element={<><Link to="/home">Return</Link><Outlet /><StyleifyButton /></>}>
                <Route path="about" element={<About />} />
                <Route path="links" element={<Links />} />
            </Route>
        </Routes>
        {/* <Linux /> */}
    </div>
}

export const Home = () => {
    return <div id={styles["home"]}>
        <Link to="/about">About</Link>
        <Link to="/links">Links</Link>
        <Link to="/links">Projects (empty)</Link>
    </div>
}

export const ClickToEnter = () => {
    return <div id={styles["clickToEnter"]}>
        <Link to="/home">enter</Link>
    </div>
}

export default App
