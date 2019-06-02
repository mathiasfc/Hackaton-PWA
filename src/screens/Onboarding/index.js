import React, { useState, useEffect } from 'react';
import * as styles from './style';
import ReactSwipe from 'react-swipe';
import Button from '../../components/Button';

const Onboarding = () => {
  // const [selected, setSelected] = useState(0);

  const dotStyle = {
    background: 'grey',
    borderRadius: '10px',
    width: '15px',
    height: '15px',
    margin: '10px',
    display: 'inline-table',
  };

  useEffect(() => {
    console.log('mounted');
    //set token entered
  }, []);

  const next = reactSwipeEl => {
    if (reactSwipeEl.getPos() < 2) {
      reactSwipeEl.next();
    } else {
      console.log('vai para proxima pagina');
    }
  };

  let selected = 0;

  let reactSwipeEl;
  return (
    <div>
      <ReactSwipe
        className="carousel"
        swipeOptions={{
          continuous: false,
          transitionEnd: () => (selected = reactSwipeEl.getPos()),
        }}
        ref={el => (reactSwipeEl = el)}
      >
        <div>
          <styles.fullPage>
            <styles.innerText>
              Tenha controle sobre <br />o que você consumiu
            </styles.innerText>
          </styles.fullPage>
        </div>
        <div>
          <styles.fullPage>
            <styles.innerText>
              Pague sua comanda <br />
              de forma rápida <br />e evite filas
            </styles.innerText>
          </styles.fullPage>
        </div>
        <div>
          <styles.fullPage>
            <styles.innerText>Divida o valor da comanda com outras pessoas</styles.innerText>
          </styles.fullPage>
        </div>
      </ReactSwipe>
      <styles.dots className="dots">
        <styles.dot onClick={() => reactSwipeEl.slide(0)} selected={selected === 0} />
        <styles.dot onClick={() => reactSwipeEl.slide(1)} selected={selected === 1} />
        <styles.dot onClick={() => reactSwipeEl.slide(2)} selected={selected === 2} />
      </styles.dots>
      <styles.centeredButton>
        <Button onClick={() => next(reactSwipeEl)} rounded customStyles={styles.buttonStyle}>
          Próximo
        </Button>
      </styles.centeredButton>
    </div>
  );
};

export default Onboarding;
