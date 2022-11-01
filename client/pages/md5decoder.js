import { useState } from "react";
import MD5 from "crypto-js/md5";
import axios from 'axios';
import nProgress from "nprogress"
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import Link from "next/link";

export default function Home() {
  const [value,setValue] = useState('');
  const [decoded,setDecoded] = useState('');


  const errorNotification = (message) => {
      NotificationManager.error(message);
    };

  const generateHash = () => {
    if(value != ""){
      nProgress.start();
      axios.post('http://localhost:5000/md5-decoder',{
        hash:value
      })
        .then(function (res) {
          setDecoded(res.data.text)
          nProgress.done();
        })
        .catch(function (error) {
          errorNotification(error.response.data.message)
          nProgress.done();
          setDecoded("")
        })
    }
    else{
      setDecoded("")
    }
  }

  return (
    <>
    <div className="container Centers">
        <div className="col-12 p-1" style={{letterSpacing:"1px",fontWeight:"600",color:"white",fontFamily:"Anton",fontSize:"50px",textAlign:"center"}}>
          MD5 Şifre Kırıcı
        </div>
        <div className="col-md-6 col-12 p-2" style={{margin:"0 auto"}}>
          <input type="text" onChange={(e) => setValue(e.target.value)} placeholder="Kırmak istediğiniz metni girin" className="form-control col-12" />
        </div>
        <div className="col-md-6 col-12 p-2" style={{margin:"0 auto"}}>
          <input type="button" onClick={() => generateHash()} value="Dönüştür" className="btn btn-light col-12" />
        </div>
        {
          decoded != "" ? 
            <div className="col-12 p-2" style={{fontWeight:"600",color:"white",fontFamily:"Anton",fontSize:"20px",letterSpacing:"1px",textAlign:"center"}}>
               {decoded}
            </div> :
            null
        }
        <div className="col-md-6 col-12 p-2" style={{textAlign:"center",margin:"0 auto"}}>
           <Link style={{color:"#eee"}} href={"/md5generator"}>MD5 şifre oluşturucu</Link>
        </div>



    </div>
    <NotificationContainer/>
  </>
  )
}
