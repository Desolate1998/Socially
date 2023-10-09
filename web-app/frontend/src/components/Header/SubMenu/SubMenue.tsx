import { Button, Avatar, Typography, Menu, MenuItem, Grid, Switch, styled, Badge, ListItemIcon } from '@mui/material';
import { useState } from 'react';
import { useTheme } from '../../../Contexts/ThemeContext';
import { useIdentity } from '../../../Contexts/IdentityContext';
import ExitToAppIcon from '@mui/icons-material/ExitToApp'; 
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import PublicIcon from '@mui/icons-material/Public';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import HelpIcon from '@mui/icons-material/Help';
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined'; 
import { AuthForm } from '../AuthForm/AuthForm';

export const SubMenue = () => {
  const { authenticated,  user } = useIdentity();
  const { theme, toggleTheme } = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [online, setOnline] = useState(false);
  const [openAuthForm, setOpenAuthForm] = useState(false);

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: online ? '#44b700' : 'grey',
      color: online ? '#44b700' : 'grey',
      bomdhadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: online ? 'ripple 1.2s infinite ease-in-out' : 'none',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAuth = ()=>{
    setOpenAuthForm(!openAuthForm)
  }

  return (
    <>
    <AuthForm visible={openAuthForm} onClose={handleAuth}/>
      <Button
        aria-controls="dropdown-menu"
        aria-haspopup="true"
        onClick={handleClick}
        variant="outlined"
        color="primary"
      >
        <Grid container>
          <Grid item md={10} display='flex' flexDirection='column' >
            <Grid item md={12}>
              <Typography variant='body2' style={{ minWidth: '200px' }}>@{user?.username}</Typography>
            </Grid>
            <Grid item md={12}>
              <Typography variant='button'>{user?.apples} Apples</Typography>
            </Grid>
          </Grid>
          <Grid item md={2}>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
            >
              <Avatar alt="Remy Sharp" src={user?.profileImage} />
            </StyledBadge>
          </Grid>
        </Grid>
      </Button>
      <Menu
        id="dropdown-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {authenticated === true ? (
          <>
            <MenuItem style={{ padding: '20px' }}>
              <ListItemIcon>
                <ExitToAppIcon /> 
              </ListItemIcon>
              Sign Out
            </MenuItem>
            <MenuItem style={{ padding: '20px' }}>
              <ListItemIcon>
                <CheckCircleOutlineIcon /> 
              </ListItemIcon>
              Online Status <Switch checked={online} onChange={(e) => setOnline(e.target.checked)} />
            </MenuItem>
            <MenuItem style={{ padding: '20px' }}>
              <ListItemIcon>
                <PersonOutlineIcon /> 
              </ListItemIcon>
              Profile
            </MenuItem>
            <MenuItem style={{ padding: '20px' }}>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              User Settings
            </MenuItem>
            <MenuItem style={{ padding: '20px' }}>
              <ListItemIcon>
                <PublicIcon /> 
              </ListItemIcon>
              Advertise On Critex
            </MenuItem>
            <MenuItem style={{ padding: '20px' }}>
              <ListItemIcon>
                <LocalFloristIcon /> 
              </ListItemIcon>
              Leaves
            </MenuItem>
            <MenuItem style={{ padding: '20px' }}>
              <ListItemIcon>
                <HelpIcon />
              </ListItemIcon>
              Get Help
            </MenuItem>
          </>
        ) : (
          <MenuItem style={{ padding: '20px' }} onClick={handleAuth}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            Sign Up
          </MenuItem>
        )}
        <MenuItem style={{ padding: '20px' }}>
          <ListItemIcon>
            {theme === 'dark' ? <NightsStayOutlinedIcon /> : <WbSunnyOutlinedIcon />}
          </ListItemIcon>
          Dark Mode <Switch checked={theme === 'dark'} onChange={toggleTheme} />
        </MenuItem>
      </Menu>
    </>
  );
};
