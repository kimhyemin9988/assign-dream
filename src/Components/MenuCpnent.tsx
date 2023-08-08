import { useState } from "react";
import { styled } from "styled-components";
import { MenuUl } from "../Menu";
import { Link, useMatch } from "react-router-dom";

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
    const menuControl = () => {
        setopenMenu((prev) => !prev)
    };

    return (
        <div>
            <MenuBig $openProps={openMenu} onClick={menuControl}>
                {element["topMenu"]}
                <Triangle viewBox="0 0 20 20" $openProps={openMenu}>
                    <path d="M0 7 L 20 7 L 10 16" />
                </Triangle>
            </MenuBig>
            {openMenu &&
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
