import styled from 'styled-components';

export const HeaderContainer = styled.div`  
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
  width: 100%;

  @media(min-width: 576px) {
    max-width: 540px;
  }

  @media(min-width: 768px) {
    max-width: 720px;
  }

  @media(min-width: 992px) {
    max-width: 960px;
  } 

  @media(min-width: 1200px) {
    max-width: 1140px;
  } 
`;


export const HeaderNavigator = styled.nav`
  align-items: center;
  background-color: rgb(69, 90, 100);
  box-align: center;
  box-pack: justify;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: .5rem 1rem;
  position: relative;
`;

export const HeaderSpan = styled.span`
  display: flex;
  color: whitesmoke;
  font-size: 30px;
  font-weight: 800;
  padding: 0px;
`;

export const HeaderImage = styled.img`
  margin-right: 15px; 
  width: 40px;
`;