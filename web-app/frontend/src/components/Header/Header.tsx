
import { useEffect, useState } from 'react';
import {
  AppBar,
  TextField,
  Grid,
  InputAdornment,
  Chip,
  Hidden, // Import InputAdornment
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../assets/images/logo.png';
import critex from '../../assets/images/Critex.png';
import { SubMenue } from './SubMenu/SubMenue';
import { HeathApi } from '../../Utils/API/requests/HealthApi';
import { ECHO_ENABLED } from '../../appsetings';

function Header() {
  const [systemStatus, setSystemStatus] = useState('offline');

  useEffect(() => {
    if (ECHO_ENABLED) {
      setInterval(function () {
        HeathApi.echo().then(data => {
          setSystemStatus(data.result)
        }).catch(() => {
          setSystemStatus('offline')
        })
      }, 10_000);
    }

  })
  return (
    <AppBar position="static" color='default' >
      <Grid container display='flex' justifyContent='left' alignItems='center' spacing={2}>
        <Grid item md={2} display='flex' justifyContent='left' alignItems='center' padding={1}>
          <img src={logo} width={80} height={70} style={{ borderRadius: '100%' }} />
          <Hidden mdDown>
            <img src={critex} height={30} />
          </Hidden>
        </Grid>
        <Hidden mdDown>
          <Grid item md={1} xs={0}>
            <Chip
              variant="outlined"
              color={systemStatus.includes('offline') ? 'error' : 'success'}
              label={systemStatus}
            />
          </Grid>
        </Hidden>
        <Grid item md={5} xs={10}>
          <TextField
            variant="outlined"
            fullWidth
            placeholder='Search...'

            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid xs={12} item md={4} display='flex' justifyContent='flex-end' marginBottom='10px' marginTop='10px' paddingRight='10px'>
          <SubMenue />
        </Grid>
      </Grid>
    </AppBar>
  );
}

export default Header;
