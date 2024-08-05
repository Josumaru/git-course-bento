"use client"

import Image from "next/image"

import ButtonA from "./ButtonA"
import logo from "../../public/images/logo.png"
import Link from "next/link"
import { useState } from "react"


const NavbarA = ({}) => {
  const [selected, setSelected] = useState('home')
  return <nav className="flex justify-between w-full px-28 py-4">
    <div className="w-full flex items-center">
      <Image src={logo} className="mx-4" height={54}/>
      <div className="grid gap-4 grid-cols-4 ">
        <Link className={`text-center ${selected === "home" ? "font-bold" : ""}`} onClick={()=>setSelected("home")} href={"/"}>Home</Link>
        <Link className={`text-center ${selected === "competition" ? "font-bold" : ""}`} onClick={()=>setSelected("competition")} href={"/"}>Competition</Link>
        <Link className={`text-center`} href={"/"}>Event Details</Link>
        <Link className={`text-center`} href={"/"}>Partnership</Link>
      </div>
    </div>
    <div className="flex">
      <ButtonA text={"Sign In"} backgroundColor={"#FFFFFF"} fontColor={"black"}/>
      <ButtonA text="Join now" backgroundColor={"#616BDA"} fontColor={"white"}/>
    </div>
  </nav>
}

export default NavbarA