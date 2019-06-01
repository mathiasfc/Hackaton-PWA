import styled from 'styled-components';

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
	height: 100vh;
    background: black;
    padding: 20px`;
    

export const Conteiner = styled.p`
    color: white;
    text-align: left;
    font-size: 23px
    max-width: 180px`;

export const Header = styled.div`
    color: white;`;

export const Footer = styled.div`
    color: white;
    align-items: center;
    display: flex;
    flex-direction: column;`;


export const BotaoCriarConta = styled.button`
    width: 100%;
    height: 50px;
    margin-bottom: 20px;
    background-color: white;
    border: none;`;
