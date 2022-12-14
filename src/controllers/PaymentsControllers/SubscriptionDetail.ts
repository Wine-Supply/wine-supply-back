

const SubscriptionDetail = async (data: any, id:any) => {
    switch (data) {
        case 'Regular':{
            return {
                "reason": "Regular",
                "auto_recurring": {
                "frequency": 1,
                "frequency_type": "months",
                "billing_day": 10,
                "billing_day_proportional": false,
                "transaction_amount": 40,
                "currency_id": "ARS"
                },
                "back_url": `https://wine-supply-back-production.up.railway.app/membershipcreateorder?user_id=${id}`
                // "back_url": `https://google.com`
              }
            break;}
        case 'Premium':{
            return {
                "reason": "Premium",
                "auto_recurring": {
                "frequency": 1,
                "frequency_type": "months",
                "billing_day": 10,
                "billing_day_proportional": false,
                "transaction_amount": 60,
                "currency_id": "ARS"
                },
                "back_url": `https://wine-supply-back-production.up.railway.app/membershipcreateorder?user_id=${id}`
              }
            break;}
        case 'Sommeliere':{
            return {
                "reason": "Sommeliere",
                "auto_recurring": {
                "frequency": 1,
                "frequency_type": "months",
                "billing_day": 10,
                "billing_day_proportional": false,
                "transaction_amount": 80,
                "currency_id": "ARS"
                },
                "back_url": `https://wine-supply-back-production.up.railway.app/membershipcreateorder?user_id=${id}`
              }
            break;}
        default:
            return console.log('No membership specified!');
    }
  }

export default SubscriptionDetail;