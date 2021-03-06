import React, { useState, useEffect } from 'react';
import * as styles from './style';
import onboarding1 from '../../images/onboarding-1.png';
import onboarding2 from '../../images/onboarding-2.png';
import onboarding3 from '../../images/onboarding-3.png';
import ReactSwipe from 'react-swipe';
import { withRouter } from 'react-router-dom';
import Button from '../../components/Button';
import Storage from '../../helpers/storage';

const Onboarding = ({ history }) => {

  useEffect(() => {
    const viewOnboarding = Storage.getLocalStorage('viewOnboarding');
    if (viewOnboarding) {
      history.push('/');
    }
    Storage.setLocalStorage('viewOnboarding', 'true');
  }, []);

  const next = reactSwipeEl => {
    if (reactSwipeEl.getPos() < 2) {
      reactSwipeEl.next();
    } else {
      history.push('/home');
    }
  };

  let reactSwipeEl;
  let selected;

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
          <styles.onboardingImage src={onboarding1} alt="onboardingImage" />
            <styles.innerText>
              Tenha controle sobre <br />o que você consumiu
            </styles.innerText>
          </styles.fullPage>
        </div>
        <div>
          <styles.fullPage>
          <styles.onboardingImage src={onboarding2} customSize  alt="onboardingImage" />
            <styles.innerText>
              Pague sua comanda <br />
              de forma rápida <br />e evite filas
            </styles.innerText>
          </styles.fullPage>
        </div>
        <div>
          <styles.fullPage>
          <styles.onboardingImage src={onboarding3}  alt="onboardingImage" />
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
        <Button
          as="button"
          onClick={() => next(reactSwipeEl)}
          rounded
          customStyles={styles.buttonStyle}
        >
          Próximo
        </Button>
      </styles.centeredButton>
    </div>
  );
};

export default withRouter(Onboarding);
