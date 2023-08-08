import { styled } from "styled-components";
import FrameRow from "./FrameRow";
import InputSwitch from "../InputSwitch";
import { FormList } from "./LiteralData";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { apiJobtest } from "../api";

export const MainForm = styled.form`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  position:absolute;
  left: 297px;
  top: 98px;
  gap: 16px;
  width: 943px;
  padding: 0px;
  
`;

const FormFrame = styled.div`
  border-bottom: 1px solid #E0E4E8;
  border-top: 1px solid #E0E4E8;
  width: 100%;
`

export interface FormI {
  [parameter: string]: string | string[];
}

const Form = () => {
  const {
    handleSubmit,
    register,
    reset,
  } = useForm<FormI>();


  const onSubmit = async (data: FormI) => {
    let changeKeyObj: FormI = {};
    for (var key in data) {
      let newKey = key.replace('정보', 'info');
      changeKeyObj[newKey] = data[key];
    }
    apiJobtest(changeKeyObj).then((value) => {
      alert(value["message"]);
      if (value["message"] === "저장되었습니다.") {
        reset();
      }
    });

  };

  return (
    <MainForm onSubmit={handleSubmit(onSubmit)}>
      <FormFrame>
        {FormList.map((element) => {
          return (
            <FrameRow label={element.label} key={element.label}>
              <InputSwitch label={element.label} data={element.data} type={element.type} key={element.label + "a"} register={register}></InputSwitch>
            </FrameRow>
          )
        })}
      </FormFrame>
      <Button></Button>
    </MainForm>
  )
};
export default Form;