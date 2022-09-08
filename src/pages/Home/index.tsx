import { Alarm, Coffee, Package, ShoppingCart } from 'phosphor-react';
import coffeBanner from '../../assets/coffe-banner.svg';
import { Banner, Card, Content, IconWrapper, ListIcons } from './styles';

export function Home() {
  return (
    <main>
      <Banner>
        <Content>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

          <ListIcons>
            <li>
              <IconWrapper>
                <ShoppingCart size={16} />
              </IconWrapper>
              Compra simples e segura
            </li>
            <li>
              <IconWrapper>
                <Alarm size={16} />
              </IconWrapper>
              Entrega rápida e rastreada
            </li>
            <li>
              <IconWrapper>
                <Package size={16} />
              </IconWrapper>
              Embalagem mantém o café intacto
            </li>
            <li>
              <IconWrapper>
                <Coffee size={16} />
              </IconWrapper>
              O café chega fresquinho até você
            </li>
          </ListIcons>
        </Content>
        <div>
          <img src={coffeBanner} alt="coffe delivery banner" />
        </div>
      </Banner>

      <h2>Nossos cafés</h2>

      <ul>
        <Card>
          <img src="../../../public/coffees/arabe.svg" alt="arabe" />
          <span>Tradicional</span>
          <h3>Expresso tradicional</h3>
          <p>O tradicional café feito com água quente e grãos moídos</p>
          <div>
            <span>R$ 9,90</span>
            <form>
              <input type="number" />
              <button>
                <ShoppingCart size={16} />
              </button>
            </form>
          </div>
        </Card>
      </ul>
    </main>
  );
}
