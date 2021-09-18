import React from 'react'
import styled from 'styled-components'
import HomeComponent from "./modules/home"
const Container = styled.div`
font-family:Montserrat;
display:flex;
flex-direction:column;
align-items:center;
margin: 0 10px;
padding:30px;
`;
const Header = styled.span`
font-size:28px;
font-weight:bold;
color:black;
`;

function App() {
  return (
      <Container>
    <Header>Expense Tracker</Header>
      <HomeComponent/>
      </Container>
  );
}

export default App;
