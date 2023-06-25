import './style/App.css'
import {Route, Routes} from "react-router-dom";
import Login from "./Page/Login/Login.jsx";
import SignUpPage from "./Page/SignUp/SignUpPage.jsx";
import {createTheme, ThemeProvider} from "@mui/material";
function App() {
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
        typography: {
            fontFamily: 'suite',
            fontWeight: 300
        }
    });
    return (
        <div className="App">
            <ThemeProvider theme={darkTheme}>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/signUp" element={<SignUpPage/>}/>
                </Routes>
            </ThemeProvider>
        </div>
    )
}

export default App
