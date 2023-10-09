import { MailOutline, LockOutlined, PersonOutline } from '@mui/icons-material';
import { useFormik } from 'formik';
import { Grid, TextField, InputAdornment, Button, DialogActions, DialogContent, Alert, LinearProgress } from '@mui/material';
import { FC, useState } from 'react';
import { IRegisterRequestDTO } from '../../../models/DTO/RegisterDTO';
import { AccountApi } from '../../../Utils/API/requests/AccountApi';
import { useAlert } from '../../../Contexts/AlertContext';
import { DEBUG_MODE } from '../../../appsetings.ts';

interface IProps {
    handleSwitchMode: () => void;
}

export const Register: FC<IProps> = ({ handleSwitchMode }) => {
    const { showAlert } = useAlert()
    const [requestLoading, setRequestLoading] = useState(false)

    const formik = useFormik<IRegisterRequestDTO>({
        initialValues: {
            email: '',
            password: '',
            username: '',
            confirmPassword: ''
        },
        onSubmit: async (values) => {
            try {
                setRequestLoading(true);
                var response = await AccountApi.register(values)
                if (response.isSuccessful) {
                    if (response.result?.isSuccessful) {
                        showAlert('Registration successful', 'success')
                        handleSwitchMode()
                    } else {
                        const errors: Partial<IRegisterRequestDTO> = {};
                        response.result?.errorMessage.forEach((fieldError) => {
                            //@ts-ignore
                            errors[fieldError.fieldName] = fieldError.errorMessages[0]
                        });

                        formik.setErrors(errors)
                        showAlert('Registration failed', 'error')
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
            const errors: Partial<IRegisterRequestDTO> = {};
            if (!DEBUG_MODE) {
                if (!values.username) {
                    errors.username = 'Username is required';
                } else if (values.username.length < 3) {
                    errors.username = 'Username must be at least 3 characters';
                }

                if (!values.email) {
                    errors.email = 'Email is required';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                    errors.email = 'Invalid email address';
                }

                if (!values.password) {
                    errors.password = 'Password is required';
                } else if (values.password.length < 6) {
                    errors.password = 'Password must be at least 6 characters';
                }

                if (!values.confirmPassword) {
                    errors.confirmPassword = 'Confirm Password is required';
                } else if (values.confirmPassword !== values.password) {
                    errors.confirmPassword = 'Passwords do not match';
                }
            }
            return errors;
        },
    });

    return (
        <>
            <DialogContent>
                <form style={{ marginTop: '10px' }} >
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                label="Username"
                                onChange={formik.handleChange}
                                value={formik.values.username}
                                name="username"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PersonOutline />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            {formik.errors.username && <Alert severity="error" sx={{ width: '100%' }} style={{ marginTop: '2px' }}>
                                {formik.errors.username}
                            </Alert>}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                label="Email Address"
                                name="email"
                                type="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <MailOutline />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            {formik.errors.email && 
                            <Alert severity="error" sx={{ width: '100%' }} style={{ marginTop: '2px' }}>
                                {formik.errors.email}
                            </Alert>}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                label="Password"
                                name="password"
                                type="password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockOutlined />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            {formik.errors.password && 
                            <Alert severity="error" sx={{ width: '100%' }} style={{ marginTop: '2px' }}>
                                {formik.errors.password}
                            </Alert>}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                label="Confirm Password"
                                name="confirmPassword"
                                type="password"
                                onChange={formik.handleChange}
                                value={formik.values.confirmPassword}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockOutlined />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            {formik.errors.confirmPassword &&
                            <Alert severity="error" sx={{ width: '100%' }} style={{ marginTop: '2px' }}>
                                {formik.errors.confirmPassword}
                            </Alert>}
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
                    onClick={() => formik.handleSubmit()}
                >
                    Register
                </Button>
                <Button fullWidth variant="outlined" color='secondary' onClick={handleSwitchMode}>
                    Switch to Sign In
                </Button>
            </DialogActions>
        </>
    )
}
