import React from 'react';
import * as styles from './style';

const CardList = ({ cards, onClick }) => {
  return (
    <styles.Container>
      {cards &&
        cards.map(card => (
          <styles.CardItem key={card.cardId} onClick={() => onClick(cards.id)}>
            <styles.CardInfo>
              <styles.CardBrand>{card.brandLogoUrl}</styles.CardBrand>
              <styles.CardNumber>{card.lastDigits}</styles.CardNumber>
            </styles.CardInfo>

            <styles.Circle selected={cards.selected} />
          </styles.CardItem>
        ))}

      <styles.CardItem>
        <styles.ButtonText>adicionar cartão</styles.ButtonText>
      </styles.CardItem>
    </styles.Container>
  );
};

export default CardList;
