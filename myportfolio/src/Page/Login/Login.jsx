import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { BiLogIn } from "react-icons/bi";
import {useState} from "react";
import {IconButton, InputAdornment} from "@mui/material";


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/HEAHEAA">
               JIHEEGitHub
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
function Login(){
    const [values, setValues] = useState({
        showPass: false
    })

    const togglePasswordHide = () => {
        setValues({
            ...values,
            showPass: !values.showPass
        });
    };




    return(
        <div>
            <Box>
                <Container component="main" maxWidth="xs" sx={{marginTop: 5}}
                           style={{
                    border: "1px solid #5b5e69",
                    backgroundColor: "#2b2e38"
                }}>
                    <Box
                        sx={{
                            marginTop: 5,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h4" style={{
                            fontFamily: 'kotra',
                            fontWeight: 'bold',
                            paddingTop: "10px"
                        }}>
                           LOGIN
                        </Typography>
                        <Typography component="small" variant="small" style={{
                            fontFamily: 'NanumSquareNeo-Variable'
                        }}>

                            Welcome To My Portfolio!
                        </Typography>
                        <Box component="form"  noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                label="ID"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                id="outlined-basic"
                                type={values.showPass ? "text" : "password"}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password"
                                                edge="end"
                                                onClick={togglePasswordHide}
                                            >
                                                {values.showPass ? (
                                                    <VisibilityIcon/>
                                                ) : (
                                                    <VisibilityOffIcon/>
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                                label="password"
                                variant="outlined"
                                name="user_pwd"
                                fullWidth
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                style={{
                                    backgroundColor: "#4c5061",
                                    color: "white"
                                }}
                            >
                               Login <BiLogIn/>
                            </Button>
                        </Box>
                        <p className="login-sign-p">
                            회원가입이 필요하신가요?
                        </p>
                    </Box>
                    <Copyright sx={{ mt: 8, mb: 4 }} />
                </Container>
            </Box>

        </div>
    )
}
export default Login;