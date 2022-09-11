import { Alarm, Coffee, Package, ShoppingCart } from 'phosphor-react';
import coffeBanner from '../../assets/coffe-banner.svg';
import { Stepper } from '../../components/Stepper';
import { AddCard, Banner, Card, CardBody, CardFooter, CardHeader, Content, IconWrapper, ListCard, ListIcons, Tag } from './styles';

export function Home() {
  const itens = [1, 2, 3, 4, 5, 6];
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

      <ListCard>
        {itens.map((i) => (
          <Card key={`item${i}`}>
            <CardHeader>
              <img src="../../../public/coffees/arabe.svg" alt="arabe" />
              <Tag>Tradicional</Tag>
            </CardHeader>
            <CardBody>
              <h3>Expresso tradicional</h3>
              <p>O tradicional café feito com água quente e grãos moídos</p>
            </CardBody>
            <CardFooter>
              <span>R$</span>
              <span>9,90</span>
              <form>
                <Stepper />
                <AddCard type="button">
                  <ShoppingCart size={16} />
                </AddCard>
              </form>
            </CardFooter>
          </Card>
        ))}
      </ListCard>
    </main>
  );
}
