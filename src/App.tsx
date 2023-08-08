import { Outlet } from 'react-router-dom';
import Menu from './Menu';
import StyleComponent from './StyleComponent';
import { styled } from 'styled-components';

const MainPage = styled.main`
  height: 100vh;
  margin-left: 256px;
  min-width: 330px;
`
/* Outlet을 사용, 라우팅  */
const App = () => {
  return (
    <>
      <StyleComponent></StyleComponent>
      <Menu></Menu>
      <MainPage>
        <Outlet></Outlet>
      </MainPage>
    </>
  )
}
export default App;
