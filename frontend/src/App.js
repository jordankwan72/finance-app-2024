import styled from 'styled-components';
import bg from './img/bg.png'
import { MainLayout } from './styles/Layouts';
import Navigation from './Components/Navigation/Navigation';
import { useState, useMemo } from 'react';
import Orb from './Components/Orb/Orb';

import Dashboard from './Components/Dashboard/Dashboard';
import Income from './Components/Income/Income';
import Expenses from './Components/Expenses/Expenses';
import { useGlobalContext } from './context/globalContext';

function App() {
  const [active, setActive] = useState(1)

  const {addIncome, } = useGlobalContext()


  const displayData = () => {
    switch(active){
      case 1:
        console.log('returning dashboard')
        return <Dashboard />
      case 2:
        return <Dashboard />
      case 3:
        console.log('returning income')
        return <Income />
      case 4:
        console.log('returning expenses')
        return <Expenses />
      default:
        return <Dashboard />
    }
  }



  const orbMemo = useMemo(() => {
    return <Orb/>
  },[])




  return (
    <AppStyled  bg = {bg} className="App">

      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive}>
        </Navigation>
        <main>
          <h1>{displayData()}</h1>
        </main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  background-position: center;
  background-size: cover;
  
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
`;




export default App;
