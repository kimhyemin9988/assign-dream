import { styled } from "styled-components";


const Row = styled.div`
    display: flex;
    flex-direction: row;
    height: 56px;
    align-items: center;
    padding: 16px 0px;
    gap: 64px;
    align-items: center;
    width: 100%;
`
export const FormLabel = styled.label`
    color: #333333;
    width: 140px;
    font-weight: 500;
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