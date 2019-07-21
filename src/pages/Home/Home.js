// @flow

import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Helmet from 'react-helmet';
import AppFooter from './Footer';
import Flask from '@material-ui/icons/Timer';
import styles from './styles';
import classNames from 'classnames';

import {mainTitle} from '../../components/App/AppView';

function PageHome(props) {
  const {classes, handleNavigate, title} = props;

  if(title != mainTitle) {
    props.handleIfaceState({
      component: '',
      name: 'title',
      value: mainTitle,
    });
  }

  return (
    <div className={classes.root}>
      <Helmet title={mainTitle}/>

      <div className={classes.hero}>
        <div className={classes.content}>

          <div className={classes.text}>
            <Typography variant="h4" component="h1" color="inherit" noWrap style={{marginBottom: 24}}>{mainTitle}</Typography>
            <Flask alt={mainTitle} className={classes.logo}/>
            <Button className={classes.button} variant="contained" onClick={() => handleNavigate('/rep.lurv/main')}>Начать</Button>
          </div>
        </div>
      </div>
      <AppFooter/>
    </div>
  );
}

PageHome.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  handleNavigate: PropTypes.func.isRequired,
  handleIfaceState: PropTypes.func.isRequired,
};

export default withStyles(styles)(PageHome);
