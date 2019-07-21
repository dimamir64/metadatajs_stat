
import React from 'react';
import PropTypes from 'prop-types';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

// метод инициализации хранилища состояния приложения
import configureStore, {history} from './redux';

// диспетчер состояния интерфейса
import {dispatchIface} from 'metadata-redux';

// метод для вычисления need_meta, need_user для location.pathname
import {item_props} from './pages';

// заставка "загрузка занных"
//import DumbScreen from './components/App/DumbScreen';

// корневыой контейнер приложения
import AppView from './components/App';

// дополняем-переопределяем тему оформления
import theme from './styles/muiTheme';

// типовой RootView, в котором подключается Router и основной макет приложения
import RootView from 'metadata-react/App/RootView';

// sw для оффлайна и прочих дел
import * as serviceWorker from './serviceWorker';

// создаём redux-store
export const store = configureStore();

export const {handleIfaceState} = dispatchIface(store.dispatch);

class RootProvider extends React.Component {

  componentDidMount() {
    // font-awesome, roboto и стили metadata подгрузим асинхронно
    import('metadata-react/styles/roboto/font.css');
    import('metadata-react/styles/react-data-grid.css');
    import('font-awesome/css/font-awesome.min.css');

    // скрипт инициализации структуры метаданных и модификаторы
    import('./metadata')
      .then((module) => module.init(store));
  }

  getChildContext() {
    return {store};
  }

  render() {
    return <Provider store={store}>
      <RootView
    history={history}
    item_props={item_props}
    theme={theme}
    //DumbScreen={DumbScreen}
    AppView={AppView}
    ie11
    />
    </Provider>;
  }
}

RootProvider.childContextTypes = {
  store: PropTypes.object,
};

render(<RootProvider/>, document.getElementById('root'));

serviceWorker.register({
  onUpdate() {
    $p && $p.record_log('Доступен новый контент, обновите страницу');
  }
});
