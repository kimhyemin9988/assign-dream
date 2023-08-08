import { useState } from "react";
import { styled } from "styled-components";
import { MenuUl } from "../Menu";

const MenuBig = styled.button`
  height: 36px;
  display: flex;
`
const MenuSmall = styled.li`
  height: 36px;
`
interface OpenProps {
    readonly $openProps: boolean;
}

const Triangle = styled.svg<OpenProps>`
  width: 15px;
  height: 15px;
  transform: ${(props) => props.$openProps ? "rotate(180deg)" : "rotate(0)"};
`

interface menuData {
    element: {
        topMenu: string;
        subMenu: string[];
    }
}

const MenuCpnent = ({ element }: menuData) => {
    const [openMenu, setopenMenu] = useState<boolean>(false);
    const menuControl = () => {
        setopenMenu((prev) => !prev)
    }
    return (
        <div>
            <MenuBig onClick={menuControl}>
                <div>{element["topMenu"]}</div>
                <Triangle viewBox="0 0 20 20" $openProps={openMenu}>
                    <path d="M0 7 L 20 7 L 10 16" />
                </Triangle>
            </MenuBig>
            {openMenu &&
                <MenuUl>
                    {element["subMenu"].map((sub) => {
                        return (
                            <MenuSmall key={Math.random()*1000}>{sub}</MenuSmall>
                        )
                    })}
                </MenuUl>
            }
        </div>
    )
}
export default MenuCpnent;
