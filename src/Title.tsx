import BigTitle from "./Components/BigTitle";
import Form from "./Components/Form";
import { PageTitle } from "./Components/LiteralData";


/* 타이틀 페이지 */
const Title = () => {
  return (
    <>
      <BigTitle PageTitle={PageTitle}></BigTitle>
      <Form></Form>
    </>
  )
}
export default Title;