import { styled } from "styled-components";
import BigTitle from "./Components/BigTitle";
import Form from "./Components/Form";
import { PageTitle } from "./Components/LiteralData";

const MainPage =styled.main`
  height: 100vh;
  margin-left: 256px;
  min-width: 330px;
`

const Home = () => {
  return (
    <MainPage>
      <BigTitle PageTitle={PageTitle}></BigTitle>
      <Form></Form>
    </MainPage>
  )
}
export default Home;