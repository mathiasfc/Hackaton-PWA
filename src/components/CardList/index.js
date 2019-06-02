import React from 'react';
import * as styles from './style';
import PlusIcon from '../Icons/Plus';
import paylyLogo from '../../images/logo-payly.svg';

const CardList = ({ cards, onClick, selectable, add, asideContent }) => {
  return (
    <styles.Container>
      {cards &&
        cards.map(card =>
          selectable && card.cardId === 'payly' ? (
            <styles.CardItem onClick={() => onClick(card.cardId)}>
              <styles.CardInfo>
                <styles.CardBrand>
                  <styles.CardBrandImage src={paylyLogo} />
                </styles.CardBrand>
                <styles.CardNumber>Payly</styles.CardNumber>
              </styles.CardInfo>

              <styles.Circle selected={card.selected} />
            </styles.CardItem>
          ) : (
            <styles.CardItem key={card.cardId} onClick={() => onClick(card.cardId)}>
              <styles.CardInfo>
                <styles.CardBrand>
                  <styles.CardBrandImage src={`${card.brandLogoUrl}.png`} />
                </styles.CardBrand>
                <styles.CardNumber>{card.lastDigits}</styles.CardNumber>
              </styles.CardInfo>

              {selectable && <styles.Circle selected={card.selected} />}
              {asideContent}
            </styles.CardItem>
          )
        )}

      {add && (
        <styles.CardItem>
          <styles.ButtonText>
            <PlusIcon />
            adicionar cartão
          </styles.ButtonText>
        </styles.CardItem>
      )}
    </styles.Container>
  );
};

CardList.defaultProps = {
  selectable: true,
  add: true,
  asideContent: null,
};

export default CardList;
