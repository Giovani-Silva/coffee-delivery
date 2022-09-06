import { Alarm, Coffee, Package, ShoppingCart } from 'phosphor-react';
import coffeBanner from '../../assets/coffe-banner.svg';
import { Banner, Content } from './styles';

export function Home() {
  return (
    <main>
      <Banner>
        <Content>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

          <ul>
            <li>
              <span>
                <ShoppingCart size={16} />
              </span>
              <span>Compra simples e segura</span>
            </li>
            <li>
              <span>
                <Alarm size={16} />
              </span>
              <span>Entrega rápida e rastreada</span>
            </li>
            <li>
              <span>
                <Package size={16} />
              </span>
              <span>Embalagem mantém o café intacto</span>
            </li>
            <li>
              <span>
                <Coffee size={16} />
              </span>
              <span>O café chega fresquinho até você</span>
            </li>
          </ul>
        </Content>
        <div>
          <img src={coffeBanner} alt="Voffe delivery banner" />
        </div>
      </Banner>
    </main>
  );
}
