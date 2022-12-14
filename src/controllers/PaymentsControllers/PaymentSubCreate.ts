import axios from "axios";
import SubscriptionDetail from "./SubscriptionDetail";
import { config } from "dotenv";
config();

const PaymentSubCreate = async (data: any, id:any) => {

    try {
      let sub = await SubscriptionDetail(data,id)
        let subscription = JSON.stringify(sub)
        let response: any = await axios.post('https://api.mercadopago.com/preapproval_plan', subscription, {headers: {
            'Authorization': 'Bearer ' + process.env.ACCESS_TOKEN_MP,
            'Content-Type': 'application/json'
        }})
        
        return response

    } catch (error: any) {
      console.log(error)
      throw new Error(error)
    }
  }

export default PaymentSubCreate;