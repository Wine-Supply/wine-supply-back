const nodemailer = require("nodemailer");

const sendNewsLetter = async(mail: string, subject: string, title: string, news: string) => {
	try {
		console.log(news);
		
		// async..await is not allowed in global scope, must use a wrapper
		async function main() {
			// Generate test SMTP service account from ethereal.email
			// Only needed if you don't have a real mail account for testing
			let testAccount = await nodemailer.createTestAccount();

			// create reusable transporter object using the default SMTP transport
			let transporter = nodemailer.createTransport({
				service: "gmail",
				host: "smtp.ethereal.email",
				port: 587,
				secure: false, // true for 465, false for other ports
				auth: {
					user: "winesupplyback@gmail.com", // generated ethereal user
					pass: "thotqtuoklmgfkee", // generated ethereal password
				},
			});

			// send mail with defined transport object
			let info = await transporter.sendMail({
				from: '" 🍷 Wine Suplly Team  🍷 " <winesupplyback@gmail.com>', // sender address
				to: `${mail}`, // list of receivers
				subject: `${subject}`, // Subject line
				text: `${news}`, // plain text body
				html: `<body>
						<div style='text-align:center; margin: auto;'> <h1> ${title} </h1></div>

						
						<div style='width:300px; height:140px'><img src='https://res.cloudinary.com/dq3sboxbn/image/upload/v1670356885/Utils/header_xl2qee.png'></div>

						</br>
						<div><p> ${news} </p></div>
						</br>
						<footer> <img src='https://res.cloudinary.com/dq3sboxbn/image/upload/v1670356921/Utils/footer_g8diys.png'/></footer>
						</body>`, // html body
			});

			console.log("Message sent: %s", info.messageId);
			// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

			// Preview only available when sending through an Ethereal account
			console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
			// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
		}
		return await main().catch(console.error)

	}
	catch (erro) {
		console.log(erro);

	}
}

export default sendNewsLetter;