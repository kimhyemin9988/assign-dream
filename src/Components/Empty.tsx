import { useLocation } from "react-router-dom";
import styled from "styled-components";


export const ErrorMain = styled.main`
  font-size: 20px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
/* 타이틀 이외의 빈 페이지 */
//현재 URL 정보를 가져와 화면에 표시되는 text를 변경
const Empty = () => {
    const location = useLocation();
    return (
        <ErrorMain>
            <span>빈페이지{location.pathname.slice(-1)}</span>
        </ErrorMain>
    );
};
export default Empty;