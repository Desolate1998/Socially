import React, { useState } from 'react';
import {
    Dialog,
    Typography,
    Grid,
    DialogTitle,
    IconButton,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import { Login } from './Login';
import { Register } from './Register';

interface IProps {
    visible: boolean;
    onClose: () => void;
}

export const AuthForm: React.FC<IProps> = ({ visible, onClose }) => {
    const [isSignIn, setIsSignIn] = useState(true);

    const handleSwitchMode = () => {
        setIsSignIn((prev) => !prev);
    };

    return (
        <Dialog open={visible} onClose={onClose} maxWidth="xs" fullWidth>
            <DialogTitle >
                <Grid container>
                    <Grid item xs={11}>
                        <Typography variant="h6">{isSignIn ? 'Sign In' : 'Register'}</Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <IconButton edge="start" color="primary" onClick={onClose} aria-label="close">
                            <Close />
                        </IconButton>
                    </Grid>
                </Grid>
            </DialogTitle>
            {isSignIn ? <Login handleSwitchMode={handleSwitchMode} /> : <Register handleSwitchMode={handleSwitchMode} />}
        </Dialog >
    );
};
