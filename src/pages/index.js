import React from 'react';
import IconInfo from 'material-ui-icons/Info';
import IconPerson from 'material-ui-icons/Person';
import IconTimer from 'material-ui-icons/Timer';

const items = [
  {
    text: 'ЛУРВ',
    navigate: '/rep.lurv/main',
    need_meta: true,
    icon: <IconTimer/>
  },
  {
    text: 'Профиль',
    navigate: '/login',
    need_meta: true,
    icon: <IconPerson/>
  },
  {
    text: 'О программе',
    title: 'ЛУРВ онлайн - о программе',
    navigate: '/about',
    icon: <IconInfo/>
  }
];

function path_ok(path, item) {
  const pos = item.navigate && item.navigate.indexOf(path);
  return pos === 0 || pos === 1;
}

function with_recursion(path, parent) {
  if(path && path != '/'){
    for(const item of parent){
      const props = item.items ? with_recursion(path, item.items) : path_ok(path, item) && item;
      if(props){
        return props;
      }
    }
  }
}

export function item_props(path) {
  if(!path){
    path = window.location.pathname;
  }
  // здесь можно переопределить нужность meta и авторизованности для корневой страницы
  let res = with_recursion(path, items);
  if(!res && path.match(/\/(doc|cat|ireg|cch|rep)\./)){
    res = {need_meta: true, need_user: true};
  }
  return res || {};
}

export default items;
