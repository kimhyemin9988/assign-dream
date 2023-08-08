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
  } = useForm<FormI>(); //react-hook-form 라이브러리를 사용함


  /* 저장 버튼을 눌러 Post요청 */
  const onSubmit = async (data: FormI) => {
    let changeKeyObj: FormI = {};
    for (var key in data) {
      // 화면의 label은 한글이고 post요청으로 저장 되는 key값은 영어라 key값을 변경해줌
      let newKey = key.replace('정보', 'info');
      changeKeyObj[newKey] = data[key];
    }

    //apiJobtest => post요청을 보낼 함수
    //apiJobtest에 인자로 key값을 변경해준 객체를 넣어 실행
    apiJobtest(changeKeyObj).then((value) => {
      alert(value["message"]);  //응답 메세지를 alert로 처리
      if (value["message"] === "저장되었습니다.") {
        reset(); //Post요청 성공 했을 때만 form reset
      }
    });

  };

  return (
    <MainForm onSubmit={handleSubmit(onSubmit)}>
      <FormFrame>
        {FormList.map((element) => {
          return (
            /* FormList example
                {
                label: "정보5",
                data: ["선택1", "선택2", "선택3"],
                type: "radio" => 정보5와 정보6 구분
            }*/
            <FrameRow label={element.label} key={element.label}>
              {/* InputSwitch에서 5가지의 조건에 따라 각각의 행을 랜더링 */}
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