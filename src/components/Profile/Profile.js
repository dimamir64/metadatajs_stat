import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Helmet from 'react-helmet';
import Typography from 'material-ui/Typography';
import AppContent from 'metadata-react/App/AppContent';

const mainTitle = 'Профиль пользователя';

class Profile extends Component {

  componentDidMount() {
    this.props.handleIfaceState({
      component: '',
      name: 'title',
      value: mainTitle,
    });
  }

  render() {

    return <AppContent>
      <Helmet title={mainTitle} />
      <Typography key="h1" variant="title" component="h1">
        {mainTitle}
      </Typography>
      <Typography key="preamble">
        Мы не храним никакие свойства пользователя на сервере
      </Typography>
    </AppContent>;
  }
}

Profile.propTypes = {
  handleIfaceState: PropTypes.func.isRequired,
};


export default Profile;
