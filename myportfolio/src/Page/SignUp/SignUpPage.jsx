import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddressForm from './SubPage/AddressFrom.jsx';
import Auth from './SubPage/Auth.jsx';
import {useState} from "react";
import {Alert, AlertTitle, Stack} from "@mui/material";
import {useNavigate} from "react-router-dom";

const steps = ['회원정보입력', '관리권한입력', '회원가입완료'];

function getStepContent(step) {
    switch (step) {
        case 0:
            return <AddressForm/>;
        case 1:
            return <Auth/>;
        default:
            throw new Error('Unknown step');
    }
}


function SignUpPage() {
    const [activeStep, setActiveStep] = useState(0);
    const navigate = useNavigate();

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };



    return (
        <div>
            <Box>
                <Container component="main" maxWidth="sm" sx={{mb: 4}}>
                    <Paper variant="outlined"
                           sx={{my: {xs: 3, md: 6}, p: {xs: 2, md: 3}}}
                           style={{backgroundColor: "#373943"}}>
                        <Typography component="h1" variant="h4" align="center">
                            회원가입
                        </Typography>
                        <Typography component="p" variant="p" align="center" sx={{
                            marginTop: 2
                        }}>
                            필수항목에 입력바랍니다.
                        </Typography>
                        <Stepper activeStep={activeStep} sx={{pt: 3, pb: 5}}>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        {activeStep === steps.length - 1 ? (
                            <React.Fragment>
                                <Alert severity="info">
                                    <AlertTitle>Success</AlertTitle>
                                    Thanks !
                                </Alert>

                                <Typography variant="h5" sx={{
                                    marginTop: 5
                                }}>
                                   회원가입이 완료 되었습니다.
                                </Typography>
                                <Button  variant="outlined" fullWidth sx={{marginTop: 4}} onClick={()=>{
                                    navigate('/');
                                }}>로그인</Button>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                {getStepContent(activeStep)}
                                <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                                    {activeStep !== 0 && (
                                        <Button onClick={handleBack} sx={{mt: 3, ml: 1}}>
                                            이전
                                        </Button>
                                    )}
                                    <Button
                                        variant="contained"
                                        onClick={handleNext}
                                        sx={{mt: 3, ml: 1}}
                                    >
                                        {activeStep === steps.length - 2 ? '완료' : '다음'}
                                    </Button>
                                </Box>
                            </React.Fragment>
                        )}
                    </Paper>
                </Container>
            </Box>
        </div>
    )
}

export default SignUpPage;