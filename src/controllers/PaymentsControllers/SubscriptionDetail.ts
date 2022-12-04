

const SubscriptionDetail = async (data: any) => {
    switch (data) {
        case 'Regular':{
            return {
                "reason": "Wine Club (Regular Subscription)",
                "auto_recurring": {
                "frequency": 1,
                "frequency_type": "months",
                "billing_day": 10,
                "billing_day_proportional": false,
                "transaction_amount": 40,
                "currency_id": "ARS"
                },
                "back_url": "http://google.com"
              }
            break;}
        case 'Premium':{
            return {
                "reason": "Wine Club (Premium Subscription)",
                "auto_recurring": {
                "frequency": 1,
                "frequency_type": "months",
                "billing_day": 10,
                "billing_day_proportional": false,
                "transaction_amount": 60,
                "currency_id": "ARS"
                },
                "back_url": "http://google.com"
              }
            break;}
        case 'Sommeliere':{
            return {
                "reason": "Wine Club (Sommeliere Subscription)",
                "auto_recurring": {
                "frequency": 1,
                "frequency_type": "months",
                "billing_day": 10,
                "billing_day_proportional": false,
                "transaction_amount": 80,
                "currency_id": "ARS"
                },
                "back_url": "http://google.com"
              }
            break;}
        default:
            return console.log('No membership specified!');
    }
  }

export default SubscriptionDetail;