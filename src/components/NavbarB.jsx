"use client"
import ButtonB from "./ButtonB"
import images from "../../public/images/logo.png"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"


const NavbarB = ({}) => {
  const [selected, setSelected] = useState('home')
  return <nav className="px-24 flex justify-between w-full py-5">
    <div className="w-full flex items-center">
      <Image src={images} className="mx-4" height={54}/>
    <div className="grid gap-5 grid-cols-5">
      <Link href={"/"} className={`text-center ${selected == 'home' ? "font-bold" : ""}`} onClick={()=>setSelected('home')}>Home</Link>
      <Link href={"/"} className={`text-center ${selected == 'competition' ? "font-bold" : ""}`} onClick={()=>setSelected('competition')}>Competition</Link>
      <Link href={"/"} className={`text-center ${selected == 'evendetails' ? "font-bold" : ""}`} onClick={()=>setSelected('evendetails')}>Even Details</Link>
      <Link href={"/"} className={`text-center ${selected == 'partnership' ? "font-bold" : ""}`} onClick={()=>setSelected('partnership')}>Partnership</Link>
    </div>
    </div>
    <div className="flex"> 
       <ButtonB text={"Sign in"} bgcolor={"#ffffff"} fontcolor={"black"}/>
       <ButtonB text={"Join Now"} bgcolor={"#616BDA"} fontcolor={"white"}/>
    </div>
  </nav>
}

export default NavbarB