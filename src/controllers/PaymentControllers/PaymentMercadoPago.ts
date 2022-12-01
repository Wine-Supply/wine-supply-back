const mercadopago = require("mercadopago");
// Agrega credenciales
mercadopago.configure({
  access_token: "APP_USR-3174015380458021-120116-7007fc4370703da6647ed55e64d066fb-1251387614",
});


const paymentMercadoPago = async()=>{

	let preference = {
        back_urls : {
            success : 'http://localhost:3001/succes'
        },
        // PRODUCTOS -
        items: [
        {
            title: "Producto1",
            unit_price: 120,
            quantity: 1,
            currency_id: "ARS" //Tipo de moneda en el cual va estar
        },
        {
            title : "Producto2",
            unit_price : 140,
            quantity : 1,
            currency_id : "ARS"
        },
        {
            title : "Producto3",
            unit_price : 100,
            quantity : 1,
            currency_id : "ARS"
        }
        ],
        // Aca es donde sea cual sea el pago, me va postear a esta url que le mando.
        // No me va dejar mandar la informacion dentro del servidor localhost, por el momento no lo utilizo y doy por hecho que el usuario clickea VolverAlSitio
        // notification_url : 'http://localhost:3001/notificar'
    };

	const mercadoPagoPrefrences = await mercadopago.preferences.create(preference);

	return mercadoPagoPrefrences;
}



export default paymentMercadoPago;



// INFO QUE ME LLEGA DE LA URL DESPUES DE REALIZAR EL PAGO
/*
https://www.mercadopago.com.ar/checkout/v1/payment/redirect/b989e4a0-2617-45fa-a9c5-fe387aed456e/congrats/approved/?
preference-id=1251387614-0e2b6751-c433-421d-bdbd-12c1d8febcd1&
router-request-id=0462849b-9168-4d62-96bf-ec67805b71f2&
p=43a28abe53882dd4e65c9c3ecd834e0b


http://localhost:3001/succes?
collection_id=52094870530
collection_status=approved

payment_id=52094870530&
status=approved&external_reference=null
payment_type=account_money

merchant_order_id=6686739595
preference_id=1251387614-0e2b6751-c433-421d-bdbd-12c1d8febcd1&
site_id=MLA
processing_mode=aggregator&
merchant_account_id=null
*/