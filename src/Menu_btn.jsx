import React, { useContext } from 'react';
import styled from 'styled-components';
import { App_context } from './Context';

const Menu_btn = () => {
    let { drk_mod, menu, setmenu } = useContext(App_context)

    return (
        <StyledWrapper $drk_mod={drk_mod} $menu={menu}>
            <div className='flex lg:hidden'>
                <input
                    type="checkbox"
                    id="checkbox"
                    checked={menu}
                    onChange={() => setmenu(!menu)} // ✅ toggle menu
                />
                <label htmlFor="checkbox" className="toggle">
                    <div className="bars" id="bar1" />
                    <div className="bars" id="bar2" />
                    <div className="bars" id="bar3" />
                </label>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  #checkbox {
    display: none;
  }

  .toggle {
    position: relative;
    width: 30px;
    height: 30px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition-duration: .5s;
  }

  .bars {
    width: 100%;
    height: 4px;
    background-color:  ${({ $drk_mod }) => ($drk_mod ? 'black' : 'white')};
    border-radius: 4px;
  }

  #bar2 {
    transition-duration: .8s;
     box-shadow: ${({ $drk_mod }) => ($drk_mod ? '.2px .3px 3px 0px black' : '.2px .3px 3px 0px black')};
  }

  #bar1,#bar3 {
    width: 70%;
     box-shadow: ${({ $drk_mod }) => ($drk_mod ? '.2px .3px 3px 0px black' : '.2px .3px 3px 0px black')};
  }

  #checkbox:checked + .toggle .bars {
    position: absolute;
    transition-duration: .5s;
  }

  #checkbox:checked + .toggle #bar2 {
    transform: scaleX(0);
    transition-duration: .5s;
  }

  #checkbox:checked + .toggle #bar1 {
    width: 100%;
    transform: rotate(45deg);
    transition-duration: .5s;
  }

  #checkbox:checked + .toggle #bar3 {
    width: 100%;
    transform: rotate(-45deg);
    transition-duration: .5s;
  }

  #checkbox:checked + .toggle {
    transition-duration: .5s;
    transform: rotate(180deg);
  }

@media screen and (max-width: 1024px) {
  .toggle {
    height: 24px;
    gap: 4px; /* Reduce the gap for small size */
  }
}
  `;

export default Menu_btn;
