import { styled } from "styled-components";
import FrameRow from "./FrameRow";
import InputSwitch from "../InputSwitch";
import { FormList } from "./LiteralData";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { apiJobtest } from "../api";
import { useState } from "react";

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


  const onSubmit = async (data: FormI) => {
    let changeKeyObj: FormI = {};
    for (var key in data) {
      let newKey = key.replace('정보', 'info');
      changeKeyObj[newKey] = data[key];
    }
    apiJobtest(changeKeyObj).then((value)=> alert(value["message"]));
  };

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