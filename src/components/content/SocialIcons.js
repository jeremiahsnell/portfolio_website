import React from 'react';
import { Link, Tooltip, IconButton, Zoom } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import Resume from '../../settings/resume.json';

const useStyles = makeStyles((theme) => ({
  socialIcons: {
    position: 'absolute',
    top: theme.spacing(6),
    right: theme.spacing(6),
  },
  iconButton: {
    height: '3rem',
    width: '3rem',
    display: 'block !important',
    marginBottom: theme.spacing(2),
    fontSize: '0rem !important'
  },
  icon: {
    fontSize: '1.75rem',
  },
}));

export const SocialIcons = () => {
  const classes = useStyles();

  const socialItems = Resume.basics.profiles.map((socialItem) => (
    <Link
      href={socialItem.url}
      key={socialItem.network.toLowerCase()}
      target='_blank'
      rel='noopener noreferrer'
      underline='none'
      color='inherit'
    >
      <Tooltip
        title={socialItem.username}
        placement='left'
        TransitionComponent={Zoom}
      >
        <IconButton
          color='inherit'
          aria-label={socialItem.network}
          className={classes.iconButton}
          size="large">
          <i className={`${classes.icon} ${socialItem.x_icon}`}></i>
        </IconButton>
      </Tooltip>
    </Link>
  ));

  return <div className={classes.socialIcons}>{socialItems}</div>;
};
