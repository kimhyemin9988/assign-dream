import { useState } from "react";
import { styled } from "styled-components";
import { MenuUl } from "../Menu";
import { Link } from "react-router-dom";

interface OpenProps {
    readonly $openProps: boolean;
}


const MenuBig = styled.button<OpenProps>`
  height: 36px;
  display: flex;
  width: 100%;
  border: none;
  margin: 0;
  justify-content: space-between;
  padding: 9px 28px;
  background-color: ${(props) => props.$openProps ? "E0E4E8" : "#fff"};
  align-items: center;
  font-size: 14px;
    font-style: normal;
    font-weight: 500;
  &:hover{
    background-color: #F0F2F3;
  }
`

const MenuSmall = styled.li`
  height: 36px;
  display: flex;
  width: 100%;
  border: none;
  margin: 0;
  justify-content: space-between;
  padding: 8px 40px;
  background-color: #fff;
  &:hover{
    background-color: #F0F2F3;
  }
`

/* 대메뉴 삼각형 openMenu에 띠라 rotate */
const Triangle = styled.svg<OpenProps>`
  width: 18px;
  height: 10px;
  transform: ${(props) => props.$openProps ? "rotate(180deg)" : "rotate(0)"};
`

const MenuLink = styled(Link)`
    display: block;
    font-size: 14px;
    color:#333333;
    font-style: normal;
    font-weight: 500;
`


interface menuData {
    element: {
        topMenu: string;
        subMenu: {
            title: string;
            url: string;
        }[];
    }
}

const MenuCpnent = ({ element }: menuData) => {
    
    const [openMenu, setopenMenu] = useState<boolean>(false);
    //openMenu의 상태에 따라 하위 메뉴를 랜더링 함
    const menuControl = () => {
        setopenMenu((prev) => !prev)
    };

    //openMenu를 각 styled 컴포넌트의 props로 넘겨 그에 따라 css를 변경함
    return (
        <div>
            <MenuBig $openProps={openMenu} onClick={menuControl}>
                {element["topMenu"]}
                <Triangle viewBox="0 0 20 20" $openProps={openMenu}>
                    <path d="M0 7 L 20 7 L 10 16" />
                </Triangle>
            </MenuBig>
            {openMenu &&
            /* 하위 메뉴 */
                <MenuUl>
                    {element["subMenu"].map((sub) => {
                        return (
                            <MenuLink to={`${sub["url"]}`} key={Math.random() * 1000}>
                                <MenuSmall>
                                    {sub["title"]}
                                </MenuSmall>
                            </MenuLink>
                        )
                    })}
                </MenuUl>
            }
        </div>
    )
}
export default MenuCpnent;
