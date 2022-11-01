import { useState } from "react";
import MD5 from "crypto-js/md5";
import axios from 'axios';
import Link from "next/link";


export default function Home() {
  const [hash,setHash] = useState('');
  const [value,setValue] = useState('');

  const generateHash = () => {
    if(value != ""){
      setHash(MD5(value).toString())

      axios.post('http://localhost:5000/md5-create',{
        text:value
      })
        .then(function (response) {
        })
        .catch(function (error) {
        })
    }
    else{
      setHash("")
    }
  }

  return (
    <div className="container Centers">
        <div className="col-12 p-1" style={{letterSpacing:"1px",fontWeight:"600",color:"white",fontFamily:"Anton",fontSize:"50px",textAlign:"center"}}>
          MD5 Şifre Oluşturucu
        </div>
        <div className="col-md-6 col-12 p-2" style={{margin:"0 auto"}}>
          <input type="text" onChange={(e) => setValue(e.target.value)} placeholder="Şifrelemek istediğiniz metni girin" className="form-control col-12" />
        </div>
        <div className="col-md-6 col-12 p-2" style={{margin:"0 auto"}}>
          <input type="button" onClick={() => generateHash()} value="Dönüştür" className="btn btn-light col-12" />
        </div>
        {
          hash != "" ? 
            <div className="col-12 p-2" style={{fontWeight:"600",color:"white",fontFamily:"Anton",fontSize:"20px",letterSpacing:"1px",textAlign:"center"}}>
               {hash}
            </div> :
            null
        }
        <div className="col-md-6 col-12 p-2" style={{margin:"0 auto",textAlign:"center"}}>
           <Link style={{color:"#eee"}} href={"/md5decoder"}>MD5 şifre kırıcı</Link>
        </div>

    </div>
  )
}
