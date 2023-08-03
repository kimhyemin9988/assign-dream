import BigTitle from "./Components/BigTitle";
import Form from "./Components/Form";
import { PageTitle } from "./Components/LiteralData";

const Home = () => {
  return (
    <>
      <BigTitle PageTitle={PageTitle}></BigTitle>
      <Form></Form>
    </>
  )
}
export default Home;