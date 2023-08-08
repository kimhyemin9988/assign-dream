import { styled } from "styled-components";

interface PageTitleI {
    PageTitle: string
}
/* 타이틀 */

const Title = styled.span`
    color: #333333;
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 24px;
    position: absolute;
    left: 297px;
    top: 32px;
`

const BigTitle = ({ PageTitle }: PageTitleI) => {
    return (
        <Title>{PageTitle}</Title>
    )
}
export default BigTitle;