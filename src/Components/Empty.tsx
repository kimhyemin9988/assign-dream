import styled from "styled-components";


export const ErrorMain = styled.main`
  font-size: 20px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Empty = () => {
    return (
        <ErrorMain>
            <span>빈페이지2</span>
        </ErrorMain>
    );
};
export default Empty;