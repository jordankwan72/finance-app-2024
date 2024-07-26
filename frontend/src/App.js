import {GlobalStyle} from './styles/GlobalStyle'
import styled from 'styled-components';
import bg from './img/bg.png'
import { MainLayout } from './styles/Layouts';
import Navigation from './Components/Navigation/Navigation';
import { useState } from 'react';



const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  background-position: center;
  background-size: cover;
`;

function App() {
  const [active, setActive] = useState(1)
  
  return (
    <AppStyled  bg = {bg} className="App">
      <MainLayout>
        <Navigation active={active} setActive={setActive}>

        </Navigation>
      </MainLayout>
    </AppStyled>
  );
}

export default App;
