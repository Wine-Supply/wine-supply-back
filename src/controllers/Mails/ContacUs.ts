const nodemailer = require("nodemailer");


const contactUsLetter = async(mail: string, subject: string, text: string, name: string) => {
	try {
		
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
				from: `${mail}`, // sender address
				to: `winesupplyback@gmail.com`, // list of receivers
				subject: `${subject}`, // Subject line
				text: `${text}`, // plain text body
				html:`
                <h1>${subject}</h1>
                <h2>Send by: ${name} <br/> Email: ${mail} </h2>
                <h3>${text}</h3>
                `, // html body
			});

			console.log("Message sent: %s", info.messageId);
			// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

			// Preview only available when sending through an Ethereal account
			console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
			// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
		}
		await main().catch(console.error)
        return true

	}
	catch (erro) {
		console.log(erro);

	}
}

export default contactUsLetter;