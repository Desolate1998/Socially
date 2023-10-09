import { MailOutline, LockOutlined } from '@mui/icons-material';
import { Grid, TextField, InputAdornment, Button, DialogActions, DialogContent, Switch, FormControl, FormControlLabel, LinearProgress } from '@mui/material'
import React, { useState } from 'react'
import { useAlert } from '../../../Contexts/AlertContext';
import { ILoginRequestDTO } from '../../../models/DTO/LoginDTO';
import { useFormik } from 'formik';
import { AccountApi } from '../../../Utils/API/requests/AccountApi';
import { DEBUG_MODE } from '../../../appsetings';

interface IProps {
    handleSwitchMode: () => void;
}

export const Login: React.FC<IProps> = ({ handleSwitchMode }) => {
    const { showAlert } = useAlert()
    const [requestLoading, setRequestLoading] = useState(false)
     
    const formik = useFormik<ILoginRequestDTO>({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: async (values) => {
            try {
                setRequestLoading(true);
                var response = await AccountApi.login(values)
                if (response.isSuccessful) {
                    if (response.result?.isSuccessful) {
                        showAlert('Login successful', 'success')
                    } else {
                        if(response.result?.timeRemaining != -1){
                            showAlert(`Account locked out please try again in ${response.result?.timeRemaining} minutes`, 'error')
                        }else{
                            showAlert(response.result?.message, 'error')
                        }
                    }

                } else {
                    showAlert(response.errorMessage, 'error')
                }
            } catch (error) {
                showAlert('Internal server occured please try again', 'error')
            } finally {
                setRequestLoading(false);
            }
        },
        validateOnChange: false,
        validateOnBlur: false,
        validate: (values) => {
            const errors: Partial<ILoginRequestDTO> = {};
            if (!DEBUG_MODE) {
                if (!values.email) {
                    errors.email = 'Email is required';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                    errors.email = 'Invalid email address';
                }

                if (!values.password) {
                    errors.password = 'Password is required';
                }
            }
            return errors;
        },
    });

    return (
        <>
            <DialogContent>
                <form style={{ marginTop: '10px' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                onChange={formik.handleChange}
                                label="Email Address"
                                name="email"
                                type="email"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <MailOutline />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                onChange={formik.handleChange}
                                label="Password"
                                name="password"
                                type="password"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockOutlined />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel control={<Switch defaultChecked />} label="Auto Log in" />
                        </Grid>
                    </Grid>
                </form>
                         {/*   Ensures the progress bar does not make the model jum/grow   */}
                         <div style={{ marginTop: '10px', height: '10px' }} >
                    {requestLoading && <LinearProgress color="primary" />}
                </div>
            </DialogContent>
            <DialogActions>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={()=>formik.handleSubmit()}
                >
                    Sign In
                </Button>
                <Button fullWidth variant="outlined" color='secondary' onClick={handleSwitchMode}>
                    Switch to Register
                </Button>
            </DialogActions>
        </>
    )
}
