import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { Link } from 'react-router-dom';

import footerAdornment from '../../assets/Footer Adornment.svg';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: '100%',
    zIndex: 1302,
    position: 'relative',
  },
  adornment: {
    width: '25em',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('md')]: {
      width: '21em',
    },
    [theme.breakpoints.down('md')]: {
      width: '15em',
    },
  },
  mainContainer: {
    position: 'absolute',
  },
  link: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  gridItem: {
    margin: '3em',
  },
  icon: {
    height: '4em',
    width: '4em',
    [theme.breakpoints.down('xs')]: {
      height: '2.5em',
      width: '2.5em',
    },
  },
  socialContainer: {
    position: 'absolute',
    marginTop: '-6em',
    right: '1.5em',
    [theme.breakpoints.down('xs')]: {
      right: '0.6em',
    },
  },
}));

const Footer = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify='center' className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid
              container
              direction='column'
              className={classes.link}
              onClick={() => setValue(0)}
              component={Link}
              to='/'>
              Home
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(0);
                }}
                to='/services'>
                Services
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(1);
                }}
                to='customsoftware'>
                Custom Software Development
              </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(2);
                }}
                component={Link}
                to='/mobileapps'>
                iOS/Android App Development
              </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(3);
                }}
                component={Link}
                to='/websites'>
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                className={classes.link}
                onClick={() => setValue(2)}
                component={Link}
                to='/revolution'>
                The Revolution
              </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => setValue(2)}
                component={Link}
                to='/revolution'>
                Vision
              </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => setValue(2)}
                component={Link}
                to='/revolution'>
                Technology
              </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => setValue(2)}
                component={Link}
                to='/revolution'>
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                className={classes.link}
                onClick={() => setValue(3)}
                component={Link}
                to='/about'>
                About Us
              </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => setValue(3)}
                component={Link}
                to='/about'>
                History
              </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => setValue(3)}
                component={Link}
                to='/about'>
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                className={classes.link}
                onClick={() => setValue(4)}
                component={Link}
                to='/contact'>
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        alt='black decorative slash'
        src={footerAdornment}
        className={classes.adornment}
      />
      <Grid
        container
        justify='flex-end'
        spacing={2}
        className={classes.socialContainer}>
        <Grid
          item
          component={'a'}
          href='http://www.facebook.com'
          rel='noopener noreferrer'
          target='_blank'>
          <img alt='facebook logo' src={facebook} className={classes.icon} />
        </Grid>
        <Grid
          item
          component={'a'}
          href='http://www.twitter.com'
          rel='noopener noreferrer'
          target='_blank'>
          <img alt='twitter logo' src={twitter} className={classes.icon} />
        </Grid>
        <Grid
          item
          component={'a'}
          href='http://www.instagram.com'
          rel='noopener noreferrer'
          target='_blank'>
          <img alt='instagram logo' src={instagram} className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
