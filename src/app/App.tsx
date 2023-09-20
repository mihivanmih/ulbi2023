import {Suspense} from "react";
import {Link, Route, Routes} from "react-router-dom";
import './styles/index.scss'
import {ClassNames} from "shared/lib/ClassNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";

const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={ClassNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Сменить тему</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                        <Route path={'/about'} element={<AboutPage />} />
                        <Route path={'/'} element={<MainPage />} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default App