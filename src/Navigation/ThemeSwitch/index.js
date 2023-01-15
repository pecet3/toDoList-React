import { useDispatch, useSelector } from "react-redux";
import { Switch, SwitchBody } from "./styled";
import { selectDarkTheme, toggleDarkTheme } from "./themeSwitchSlice";

const ThemeSwitch = () => {
    const dispatch = useDispatch();
    const darkTheme = useSelector(selectDarkTheme);
    return (
        <SwitchBody
            darkTheme={darkTheme}
            title="Zmień motwy strony">
            <Switch
                onClick={() => dispatch(toggleDarkTheme())}
                darkTheme={darkTheme}>
                {darkTheme ?
                    "🌙" :
                    "🌞"}
            </Switch>
        </SwitchBody>
    )
};

export default ThemeSwitch;