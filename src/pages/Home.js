import React from 'react';
import { LogoLink } from '../components/logo/LogoLink';
import { Content } from '../components/content/Content';
import { Hidden } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { ThemeToggle } from '../components/theme/ThemeToggle';
/*import { FooterText } from '../components/footer/FooterText';*/
import { SocialIcons } from '../components/content/SocialIcons';
import { SpeedDials } from '../components/speedDial/SpeedDial';
import { useTheme } from '@mui/material/styles'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

export const Home = () => {
  const classes = useStyles();
  const theme = useTheme();

  return <>
    <div className={classes.root}>
    <div id='background' style={{background: theme.headerBackground}}></div>
      <LogoLink />
      <Content />
      <ThemeToggle />
      <Hidden mdDown>
        <SocialIcons />
      </Hidden>
      <Hidden mdUp>
        <SpeedDials />
      </Hidden>
      {/* <FooterText /> */}
    </div>
  </>;
};
