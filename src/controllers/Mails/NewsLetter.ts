const nodemailer = require("nodemailer");
import newsLettrerModel from "./NewsLetermodel";

const sendNewsLetter = async(mail: string, subject: string, title: string, news: string, image: string) => {
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
				html:newsLettrerModel(news, image), // html body
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