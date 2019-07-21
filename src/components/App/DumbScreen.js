import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/styles';
import styles from '../../pages/Home/styles';

class DumbScreen extends Component {

  render() {

    let {title, page, first_run, classes} = this.props;
    const over = page && page.limit * page.page > page.total_rows;
    if (!title) {
      title = (first_run || over) ? 'Первый запуск требует дополнительного времени...' : 'Загрузка модулей...';
    }
    const footer = page ? (over ?
      <div>{`Такт №${page.page}, загружено ${page.total_rows} объектов - чтение изменений `} <i className="fa fa-spinner fa-pulse"></i></div>
      :
      page.text || `Такт №${page.page}, загружено ${Math.min(page.page * page.limit, page.total_rows)} из ${page.total_rows} объектов`)
    : '';

    return <div className={classes.root}>
      <div className={classes.hero}>
        <div className={classes.content}>
          <div>{title}</div>
          {page && <div style={{position: 'absolute', bottom: '-52px'}}>{footer}</div>}
        </div>
      </div>
    </div>;
  }
}

DumbScreen.propTypes = {
  classes: PropTypes.object.isRequired,
  step: PropTypes.number,
  step_size: PropTypes.number,
  count_all: PropTypes.number,
  first_run: PropTypes.bool,
  title: PropTypes.string,
  processed: PropTypes.string,
  current: PropTypes.string,
  bottom: PropTypes.string,
  page: PropTypes.object,
};

export default withStyles(styles)(DumbScreen);
