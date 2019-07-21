/**
 * Reducer initial state
 */

import {mainTitle} from '../../components/App/AppView';

export default {
  'common': {
    title: mainTitle,
  },
  OrderList: {
    state_filter: '',
  },
  NavDrawer: {
    open: false,
  },
  NavList: {
    orders: true,
  },
  LogDrawer: {
    open: false,
  },
};
