import { styled } from "styled-components";

const Row = styled.div`
    display: flex;
    flex-direction: row;
    height: 56px;
    align-items: center;
`
export const FormLabel = styled.label`
    color: #333333;
    font-size: 14px;
`;

type ChildProps = {
    children: JSX.Element;
    label: string;
}
const FrameRow = ({ children, label }: ChildProps) => {
    return (
        <Row>
            <FormLabel htmlFor={label}>{label}</FormLabel>
            {children}
        </Row>
    )
}
export default FrameRow;