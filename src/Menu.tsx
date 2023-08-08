import { styled } from "styled-components";
import { menuData } from "./Components/LiteralData";
import MenuCpnent from "./Components/MenuCpnent";

const MenuBackground = styled.nav`
  width: 256px;
  padding-top: 20px;
  height: 100%;
  position: fixed;
  border-right: 1px solid #E0E4E8;
`
export const MenuUl = styled.ul`
`

const Menu = () => {


  return (
    <MenuBackground>
      <MenuUl>
        {menuData.map((element) => {
          return (
            <MenuCpnent element={element} key={Math.random()*1000}></MenuCpnent>);
        })}
      </MenuUl>
    </MenuBackground>
  )
}
export default Menu;
