/**
 * ### При установке параметров сеанса
 * Процедура устанавливает параметры работы программы при старте веб-приложения
 *
 * @param prm {Object} - в свойствах этого объекта определяем параметры работы программы
 */

const is_node = typeof process !== 'undefined' && process.versions && process.versions.node;

module.exports = function settings(prm = {}) {

  const lsprefix = 'st_';
  const couch_path = 'https://stat.oknosoft.ru/couchdb/' + lsprefix;

  return Object.assign(prm, {

    is_node,

    // разделитель для localStorage
    local_storage_prefix: lsprefix,

    // гостевые пользователи для демо-режима
    guests: [],

    // расположение couchdb для сайта (редирект настроен в nginx)
    // если couchdb выполняется на том же сервере, что и nginx, можно указать "//localhost:5984/",
    couch_path: "/couchdb/" + lsprefix,

    // расположение couchdb для nodejs
    couch_local: process.env.COUCH_LOCAL || couch_path,

    // по умолчанию, используем прямое обращение к couchdb
    // если указать режим couch_direct здесь (не важно, true или false),
    // будет использовано это значение, а не константа из localStorage
    couch_direct: true,

    // фильтр для репликации с CouchDB не используем
    pouch_filter: {},

    // по умолчанию, обращаемся к зоне 0
    zone: 0,

    // объявляем номер демо-зоны
    zone_demo: -1,

    // если use_meta === false, не используем базу meta в рантайме
    // см.: https://github.com/oknosoft/metadata.js/issues/255
    use_meta: false,

    // размер вложений 2Mb
    attachment_max_size: 2000000,

    // разрешаем сохранение пароля
    enable_save_pwd: true,

    // геокодер не используем
    //use_ip_geo: true,

    // карты google не используем
    //use_google_geo: '',

  }, is_node && {
    // авторизация couchdb
    user_node: {
      username: process.env.DBUSER || '',
      password: process.env.DBPWD || '',
    }
  });

};
