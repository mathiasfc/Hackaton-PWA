import React from 'react';
import * as styles from './style';
import PlusIcon from '../Icons/Plus';

const CardList = ({ cards, onClick, selectable, add, asideContent }) => {
  return (
    <styles.Container>
      {cards &&
        cards.map(card => (
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
        ))}

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
