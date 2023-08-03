import { styled } from "styled-components";
import FrameRow from "./FrameRow";
import InputSwitch from "../InputSwitch";
import { FormList } from "./LiteralData";
import Button from "./Button";
import { useForm } from "react-hook-form";

export const MainForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;


const Form = () => {
  const {
    handleSubmit,
  } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <MainForm onSubmit={handleSubmit(onSubmit)}>
      {FormList.map((element) => {
        return (
          <FrameRow label={element.label} key={element.label}>
            <InputSwitch label={element.label} data={element.data} type={element.type} key={element.label + "a"}></InputSwitch>
          </FrameRow>
        )
      })}
      <Button></Button>
    </MainForm>
  )
}
export default Form;