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

export interface FormI {
  [parameter: string]: string | string[];
}

const Form = () => {
  const {
    handleSubmit,
    register,
  } = useForm<FormI>();


  const onSubmit = async (data: any) => {
    const inform1And3 = FormList.filter((e) => e.label === "정보1" || e.label === "정보3").map((e) => Object.values(e)); // 정적data 객체형태로 바꾸기
    //console.log(data);{정보2: '', 정보4: '', date: '', 정보5: null, 정보6: false}
    const output = { //api로 보낼 데이터
      ...data,
      ...Object.fromEntries(inform1And3)
    }
  }
  return (
    <MainForm onSubmit={handleSubmit(onSubmit)}>
      {FormList.map((element) => {
        return (
          <FrameRow label={element.label} key={element.label}>
            <InputSwitch label={element.label} data={element.data} type={element.type} key={element.label + "a"} register={register}></InputSwitch>
          </FrameRow>
        )
      })}
      <Button></Button>
    </MainForm>
  )
};
export default Form;