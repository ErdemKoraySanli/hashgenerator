import md5 from "../models/md5.js"
import MD5crypto from "crypto-js/md5.js";


export const create = async (req,res) => {
    try {
        // const a = await md5.deleteMany({})
        const ReqData = req.body;
        if(!ReqData.text){
            res.status(404).send({
                message:"Text required",
            });
        }

        const MD5control = await md5.findOne(
            {
            text:ReqData.text,
            hash:MD5crypto(ReqData.text).toString(),
            },
             'id'           
            );
        if(!MD5control){
            const create = await md5.create({
                text: ReqData.text,
                hash: MD5crypto(ReqData.text).toString(),
            })
        }    
        
        res.status(200).send({success:true})          
    } catch (error) {
        res.status(404).send({
            message:error.message,
        });
    }        
};


export const decoder = async (req,res) => {
    try {
        // const a = await md5.deleteMany({})
        const ReqData = req.body;
        if(!ReqData.hash){
            res.status(404).send({
                message:"Hash required",
            });
        }

        const Data = await md5.findOne(
            {
            hash:ReqData.hash,
            },
            [
             'text',
             'hash' 
             ]         
            );

        if(!Data){
            res.status(404).send({
            message:"MD5 şifresi kırılamadı",
            });
        }    
        
        res.status(200).send(Data)          
    } catch (error) {
        res.status(404).send({
            message:error.message,
        });
    }        
};