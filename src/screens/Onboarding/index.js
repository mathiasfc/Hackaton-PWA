import React, { useEffect } from 'react';
import * as styles from './style';
import ReactSwipe from 'react-swipe';

const Onboarding = () => {
  useEffect(() => {
    console.log('scan tab didmount');
    // if(!props.voucher.cameraAccess) {
    //   props.show();
    // }
    //se não tiver premissão para acessar a camera
    //pedir para digitar
  }, []);
  let reactSwipeEl;
  return (
    <div>
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: false }}
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
            <styles.innerText>Pague sua comanda <br />de forma rápida <br />e evite filas</styles.innerText>
          </styles.fullPage>
        </div>
        <div>
          <styles.fullPage>
            <styles.innerText>Divida o valor da comanda com outras pessoas</styles.innerText>
          </styles.fullPage>
        </div>
      </ReactSwipe>
      <styles.dots className="dots">
        <span></span>
        <span></span>
        <span></span>
      </styles.dots >
      {/* <button onClick={() => reactSwipeEl.next()}>Next</button>
      <button onClick={() => reactSwipeEl.prev()}>Previous</button> */}
    </div>
  );
};

export default Onboarding;
