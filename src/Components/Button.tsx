import { styled } from "styled-components";

/*form 저장 버튼 */
const SubmitBtn = styled.button`
    color: #FFFFFF;
    font-weight: 400;
    font-size: 14px;
    font-style: normal;
    width: 74px;
    height: 40px;
    background: #024EEE;
    border-radius:5px;
    align-self: end;
    &:hover{
        background: #003AD6;
    }
`

const Button = () => {

    return (
        <SubmitBtn id="titleSubmit" type="submit" title="FormSubmit">저장</SubmitBtn>
    );
}
export default Button;