import {Link} from "react-router-dom";
import './styles/index.scss'
import {ClassNames} from "shared/lib/ClassNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import {AppRouter} from "app/providers/router";

const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={ClassNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Сменить тему</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <AppRouter />
        </div>
    )
}

export default App