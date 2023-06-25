import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {useState} from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {IconButton, InputAdornment} from "@mui/material";

function AddressFrom(){
    const [values, setValues] = useState({
        showPass: false
    })
    const [value, setValue] = useState({
        showPass: false
    })


    const togglePasswordHide = () => {
        setValues({
            ...values,
            showPass: !values.showPass
        });
    };

    const togglePasswordHides = () => {
        setValue({
            ...value,
            showPass: !value.showPass
        });
    };


    return(
        <div>
            <React.Fragment>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            label="아이디"
                            id="id"
                            name="id"
                            fullWidth
                            autoComplete="given-name"
                            variant="standard"
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="normal"
                            id="outlined-basic"
                            value={values}
                            type={values.showPass ? "text" : "password"}
                            onChange={(e) => setValues(e.target.value)}
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
                            label="비밀번호"
                            variant="standard"
                            name="password"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        {
                            values === value ? <TextField
                                margin="normal"
                                id="outlined-basic"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                type={value.showPass ? "text" : "password"}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password"
                                                edge="end"
                                                onClick={togglePasswordHides}
                                            >
                                                {value.showPass ? (
                                                    <VisibilityIcon/>
                                                ) : (
                                                    <VisibilityOffIcon/>
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                                label="비밀번호확인"
                                variant="standard"
                                name="user_pwd"
                                fullWidth
                            /> : <TextField
                                margin="normal"
                                id="outlined-basic"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                type={value.showPass ? "text" : "password"}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password"
                                                edge="end"
                                                onClick={togglePasswordHides}
                                            >
                                                {value.showPass ? (
                                                    <VisibilityIcon/>
                                                ) : (
                                                    <VisibilityOffIcon/>
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                                label="비밀번호확인"
                                variant="standard"
                                color={"error"}
                                helperText="비밀번호가 동일하지 않습니다."
                                name="password"
                                fullWidth
                            />
                        }
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            required
                            label="이름"
                            fullWidth
                            autoComplete="shipping address-line1"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="번호"
                            type={"number"}
                            fullWidth
                            variant="standard"
                        />
                    </Grid>
                </Grid>
            </React.Fragment>
        </div>
    )
}
export default AddressFrom;