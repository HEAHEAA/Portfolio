import './App.css'
import {Route, Routes} from "react-router-dom";
import Main from "./Page/Main.jsx";
import TemporaryDrawer from "./Page/TemporaryDrawer.jsx";
import {createTheme, ThemeProvider} from "@mui/material";
import Login from "./Page/Login/Login.jsx";
import SignUpPage from "./Page/SignUp/SignUpPage.jsx";

function App() {
    //MUI 다크모드
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
        typography: {
            fontFamily: [
                'NanumSquareNeo-Variable'
            ]
        },
    });
    return (
        <div className="App">
            <ThemeProvider theme={darkTheme}>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/signUp" element={<SignUpPage/>}/>


                    <Route path="/sub" element={<TemporaryDrawer/>}/>
                </Routes>
            </ThemeProvider>
        </div>
    )
}

export default App
