import { MapPin, ShoppingCart } from 'phosphor-react';
import { memo } from 'react';
import { NavLink } from 'react-router-dom';

import logoCoffeeDelivery from '../../assets/coffee-delivery-logo.svg';
import { HeaderContainer } from './styles';

function HeaderComponent() {
  return (
    <HeaderContainer>
      <img src={logoCoffeeDelivery} alt="" />

      <nav>
        <NavLink to="/location" title="Localização">
          <MapPin size={32} />
          <span>São Bernardo do Campo, SP</span>
        </NavLink>
        <NavLink to="/cart" title="Carrinho">
          <ShoppingCart size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}

const Header = memo(HeaderComponent);
export { Header };
