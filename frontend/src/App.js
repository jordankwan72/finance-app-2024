import {GlobalStyle} from './styles/GlobalStyle'
import styled from 'styled-components';
import bg from './img/bg.png'
import { MainLayout } from './styles/Layouts';
import Orb, { OrbStyled } from './Components/Orb/Orb';



const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
`;

function App() {
  return (
    <AppStyled  bg = {bg} className="App">
      <Orb />
      <MainLayout>

      </MainLayout>
    </AppStyled>
  );
}

export default App;
