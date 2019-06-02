import React from 'react';
import * as styles from './style';
import PlusIcon from '../Icons/Plus';

const CardList = ({ cards, onClick }) => {
  return (
    <styles.Container>
      {cards &&
        cards.map(card => (
          <styles.CardItem key={card.cardId} onClick={() => onClick(card.cardId)}>
            <styles.CardInfo>
              <styles.CardBrand>{card.brandLogoUrl}</styles.CardBrand>
              <styles.CardNumber>{card.lastDigits}</styles.CardNumber>
            </styles.CardInfo>

            <styles.Circle selected={card.selected} />
          </styles.CardItem>
        ))}

      <styles.CardItem>
        <styles.ButtonText>
          <PlusIcon />
          adicionar cartão
        </styles.ButtonText>
      </styles.CardItem>
    </styles.Container>
  );
};

export default CardList;
