import { useState } from "react";
import Link from "next/link";


export default function Home() {
  return (
    <div className="container Centers">
        <div className="col-12 p-1" style={{letterSpacing:"1px",fontWeight:"600",color:"white",fontFamily:"Anton",fontSize:"50px",textAlign:"center"}}>
          Başlangıç
        </div>
        <div className="col-md-6 col-12 p-2" style={{margin:"0 auto",textAlign:"center"}}>
           <Link style={{color:"#eee"}} href={"/md5decoder"}>MD5 şifre kırıcı</Link>
        </div>
        <div className="col-md-6 col-12 p-2" style={{margin:"0 auto",textAlign:"center"}}>
           <Link style={{color:"#eee"}} href={"/md5decoder"}>MD5 şifre oluşturucu</Link>
        </div>

    </div>
  )
}
