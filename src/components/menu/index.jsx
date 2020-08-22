import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { redirectTo } from '../../routes/history';

import {
  MenuToggle,
  MenuContainer,
  MenuItem,
  ProfileBar,
  ProfileThumb,
  ProfileName,

} from './styles';

export default function Menu() {
  const dispatch = useDispatch();
  const { showMenu, fixedMenu } = useSelector(state => state);

  return (
    <>
      <MenuContainer className={(!showMenu && !fixedMenu) ? 'hidden' : ''}>
        <ProfileBar>
          <ProfileThumb src="https://www.napratica.org.br/assets/v2017/desktop-logado-estilo-trabalho-a1f71fc369d0edf18289273f74f5a5b068bc34520b155c06a84a0c1616ae5571.png" />
          <ProfileName data-name="Jurandir Pinto" />
        </ProfileBar>

        <MenuItem
          onClick={() => { redirectTo('/'); }}
          data-title="Calendário"
        />
        <MenuItem
          onClick={() => { redirectTo('/goals'); }}
          data-title="Metas"
        />
        <MenuItem
          onClick={() => { redirectTo('/awards'); }}
          data-title="Recompensas"
        />
        <MenuItem
          onClick={() => { redirectTo('/history'); }}
          data-title="Histórico"
        />
        <MenuItem
          onClick={() => { redirectTo('/user'); }}
          data-title="Usuário"
        />
        <MenuItem
          onClick={() => { redirectTo('/config'); }}
          data-title="Configurações"
        />
      </MenuContainer>

      {
        !fixedMenu
        && <MenuToggle onClick={() => { dispatch({ type: 'TOGGLE_MENU' }); }} />
      }
    </>
  );
}
