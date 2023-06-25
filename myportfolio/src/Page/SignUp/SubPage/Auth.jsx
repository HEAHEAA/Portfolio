import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {useState} from "react";


function Auth(){
    const [auth, setAuth] = useState('');

    const handleChange = (event) => {
        setAuth(event.target.value);
    };

    return(
        <div>
            <React.Fragment>
                <Typography variant="h6" gutterBottom>
                   원하는 권한관리를 선택바랍니다.
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={12}>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Auth</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={auth}
                                    label="Age"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>관리자</MenuItem>
                                    <MenuItem value={20}>사용자</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                </Grid>
            </React.Fragment>
        </div>
    )
}
export default Auth;