"use client"

import { usePathname } from "next/navigation"
import Menu_Bar from "../menu_bar/menu_bar"

export default function MenuWrapper(){

    const pathName = usePathname()
    const hideMenu = ["/login","/forgot-pass","user-form"]

    if(hideMenu.includes(pathName)) return null;

    return <Menu_Bar/>

}