const nodemailer = require("nodemailer");

const welcomeMail = async( mail: string) => {
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
				from: '" 🍷 Wine Suplly Team  🍷 " <winesupplyback@gmail.com>', // sender address
				to: `${mail}`, // list of receivers
				subject: `Welcome to Wine Suplly `, // Subject line
				text: `YOUR ACCOUNT IS NOW ACTIVE

                Now you can add products to the cart, make purchases and access different subscription levels among other things.
                
                Remember that if you break the rules of conduct your account could be sanctioned or deleted by one of our administrators. We reserve the right of admission for the good of our community, a respectful and friendlycommunity of which we hope you will be a part of for a long time.
                
                See you soon,
                
                Wines Supply Team
                
                Email Admin`, // plain text body
				html: `<!doctype html>
                <html ⚡4email data-css-strict>
                 <head>
                  <meta charset="utf-8"><style amp4email-boilerplate>body{visibility:hidden}</style><script async src="https://cdn.ampproject.org/v0.js"></script>
                  
                  <style amp-custom>
                .es-button:hover {
                    background:#64030D;
                    border-color:#64030D;
                }
                .es-desk-hidden {
                    display:none;
                    float:left;
                    overflow:hidden;
                    width:0;
                    max-height:0;
                    line-height:0;
                }
                s {
                    text-decoration:line-through;
                }
                body {
                    width:100%;
                }
                body {
                    font-family:helvetica, "helvetica neue", arial, verdana, sans-serif;
                }
                table {
                    border-collapse:collapse;
                    border-spacing:0px;
                }
                table td, html, body, .es-wrapper {
                    padding:0;
                    Margin:0;
                }
                .es-content, .es-header, .es-footer {
                    table-layout:fixed;
                    width:100%;
                }
                p, hr {
                    Margin:0;
                }
                h1, h2, h3, h4, h5 {
                    Margin:0;
                    line-height:120%;
                    font-family:lato, "helvetica neue", helvetica, arial, sans-serif;
                }
                .es-left {
                    float:left;
                }
                .es-right {
                    float:right;
                }
                .es-p5 {
                    padding:5px;
                }
                .es-p5t {
                    padding-top:5px;
                }
                .es-p5b {
                    padding-bottom:5px;
                }
                .es-p5l {
                    padding-left:5px;
                }
                .es-p5r {
                    padding-right:5px;
                }
                .es-p10 {
                    padding:10px;
                }
                .es-p10t {
                    padding-top:10px;
                }
                .es-p10b {
                    padding-bottom:10px;
                }
                .es-p10l {
                    padding-left:10px;
                }
                .es-p10r {
                    padding-right:10px;
                }
                .es-p15 {
                    padding:15px;
                }
                .es-p15t {
                    padding-top:15px;
                }
                .es-p15b {
                    padding-bottom:15px;
                }
                .es-p15l {
                    padding-left:15px;
                }
                .es-p15r {
                    padding-right:15px;
                }
                .es-p20 {
                    padding:20px;
                }
                .es-p20t {
                    padding-top:20px;
                }
                .es-p20b {
                    padding-bottom:20px;
                }
                .es-p20l {
                    padding-left:20px;
                }
                .es-p20r {
                    padding-right:20px;
                }
                .es-p25 {
                    padding:25px;
                }
                .es-p25t {
                    padding-top:25px;
                }
                .es-p25b {
                    padding-bottom:25px;
                }
                .es-p25l {
                    padding-left:25px;
                }
                .es-p25r {
                    padding-right:25px;
                }
                .es-p30 {
                    padding:30px;
                }
                .es-p30t {
                    padding-top:30px;
                }
                .es-p30b {
                    padding-bottom:30px;
                }
                .es-p30l {
                    padding-left:30px;
                }
                .es-p30r {
                    padding-right:30px;
                }
                .es-p35 {
                    padding:35px;
                }
                .es-p35t {
                    padding-top:35px;
                }
                .es-p35b {
                    padding-bottom:35px;
                }
                .es-p35l {
                    padding-left:35px;
                }
                .es-p35r {
                    padding-right:35px;
                }
                .es-p40 {
                    padding:40px;
                }
                .es-p40t {
                    padding-top:40px;
                }
                .es-p40b {
                    padding-bottom:40px;
                }
                .es-p40l {
                    padding-left:40px;
                }
                .es-p40r {
                    padding-right:40px;
                }
                .es-menu td {
                    border:0;
                }
                a {
                    text-decoration:underline;
                }
                h1 a {
                    text-align:center;
                }
                h2 a {
                    text-align:left;
                }
                h3 a {
                    text-align:left;
                }
                p, ul li, ol li {
                    font-family:helvetica, "helvetica neue", arial, verdana, sans-serif;
                    line-height:150%;
                }
                ul li, ol li {
                    Margin-bottom:15px;
                    margin-left:0;
                }
                .es-menu td a {
                    text-decoration:none;
                    display:block;
                    font-family:helvetica, "helvetica neue", arial, verdana, sans-serif;
                }
                .es-menu amp-img, .es-button amp-img {
                    vertical-align:middle;
                }
                .es-wrapper {
                    width:100%;
                    height:100%;
                }
                .es-wrapper-color, .es-wrapper {
                    background-color:#F1F1F1;
                }
                .es-header {
                    background-color:transparent;
                }
                .es-header-body {
                    background-color:#333333;
                }
                .es-header-body p, .es-header-body ul li, .es-header-body ol li {
                    color:#FFFFFF;
                    font-size:14px;
                }
                .es-header-body a {
                    color:#FFFFFF;
                    font-size:14px;
                }
                .es-content-body {
                    background-color:#FFFFFF;
                }
                .es-content-body p, .es-content-body ul li, .es-content-body ol li {
                    color:#555555;
                    font-size:15px;
                }
                .es-content-body a {
                    color:#64030D;
                    font-size:15px;
                }
                .es-footer {
                    background-color:transparent;
                }
                .es-footer-body {
                    background-color:#FFFFFF;
                }
                .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li {
                    color:#666666;
                    font-size:12px;
                }
                .es-footer-body a {
                    color:#666666;
                    font-size:12px;
                }
                .es-infoblock, .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li {
                    line-height:120%;
                    font-size:12px;
                    color:#CCCCCC;
                }
                .es-infoblock a {
                    font-size:12px;
                    color:#CCCCCC;
                }
                h1 {
                    font-size:30px;
                    font-style:normal;
                    font-weight:bold;
                    color:#333333;
                }
                h2 {
                    font-size:20px;
                    font-style:normal;
                    font-weight:bold;
                    color:#333333;
                }
                h3 {
                    font-size:18px;
                    font-style:normal;
                    font-weight:normal;
                    color:#333333;
                }
                .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a {
                    font-size:30px;
                }
                .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a {
                    font-size:20px;
                }
                .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a {
                    font-size:18px;
                }
                a.es-button, button.es-button {
                    border-style:solid;
                    border-color:#A21524;
                    border-width:15px 30px 15px 30px;
                    display:inline-block;
                    background:#A21524;
                    border-radius:50px;
                    font-size:14px;
                    font-family:arial, "helvetica neue", helvetica, sans-serif;
                    font-weight:bold;
                    font-style:normal;
                    line-height:120%;
                    color:#FFFFFF;
                    text-decoration:none;
                    width:auto;
                    text-align:center;
                }
                .es-button-border {
                    border-style:solid solid solid solid;
                    border-color:#A21524;
                    background:#A21524;
                    border-width:0px 0px 0px 0px;
                    display:inline-block;
                    border-radius:50px;
                    width:auto;
                }
                .es-p-default {
                    padding-top:20px;
                    padding-right:40px;
                    padding-bottom:0px;
                    padding-left:40px;
                }
                .es-p-all-default {
                    padding:0px;
                }
                @media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150% } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120% } h1 { font-size:30px; text-align:center } h2 { font-size:26px; text-align:left } h3 { font-size:20px; text-align:left } h1 a { text-align:center } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px } h2 a { text-align:left } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:20px } h3 a { text-align:left } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px } .es-menu td a { font-size:16px } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:17px } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:17px } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px } *[class="gmail-fix"] { display:none } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left } .es-m-txt-r amp-img { float:right } .es-m-txt-c amp-img { margin:0 auto } .es-m-txt-l amp-img { float:left } .es-button-border { display:inline-block } a.es-button, button.es-button { font-size:14px; display:inline-block; border-width:15px 25px 15px 25px } .es-btn-fw { border-width:10px 0px; text-align:center } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100% } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%; max-width:600px } .es-adapt-td { display:block; width:100% } .adapt-img { width:100%; height:auto } td.es-m-p0 { padding:0px } td.es-m-p0r { padding-right:0px } td.es-m-p0l { padding-left:0px } td.es-m-p0t { padding-top:0px } td.es-m-p0b { padding-bottom:0 } td.es-m-p20b { padding-bottom:20px } .es-mobile-hidden, .es-hidden { display:none } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto; overflow:visible; float:none; max-height:inherit; line-height:inherit } tr.es-desk-hidden { display:table-row } table.es-desk-hidden { display:table } td.es-desk-menu-hidden { display:table-cell } .es-menu td { width:1% } table.es-table-not-adapt, .esd-block-html table { width:auto } table.es-social { display:inline-block } table.es-social td { display:inline-block } .es-desk-hidden { display:table-row; width:auto; overflow:visible; max-height:inherit } .h-auto { height:auto } }
                </style>
                 </head>
                 <body>
                  <div class="es-wrapper-color">
                   <!--[if gte mso 9]>
                            <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                                <v:fill type="tile" color="#f1f1f1"></v:fill>
                            </v:background>
                        <![endif]-->
                   <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
                     <tr>
                      <td valign="top">
                       <table cellpadding="0" cellspacing="0" class="es-header" align="center">
                         <tr>
                          <td align="center">
                           <table class="es-header-body" style="background-color: #ffffff" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                             <tr>
                              <td class="es-p30t es-p30b es-p40r es-p40l" style="background-color: #fdfdfd" bgcolor="#fdfdfd" align="left">
                               <table width="100%" cellspacing="0" cellpadding="0">
                                 <tr>
                                  <td width="520" valign="top" align="center">
                                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation">
                                     <tr>
                                      <td align="center" style="font-size: 0px"><a href="https://exquisite-brigadeiros-cc493c.netlify.app/" target="_blank"><amp-img src="https://i.ibb.co/D7nrgz1/wines-supply.png" alt style="display: block" width="200" height="50"></amp-img></a></td>
                                     </tr>
                                   </table></td>
                                 </tr>
                               </table></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table>
                       <table class="es-content" cellspacing="0" cellpadding="0" align="center">
                         <tr>
                          <td align="center">
                           <table class="es-content-body" style="background-color: #333333" width="600" cellspacing="0" cellpadding="0" bgcolor="#333333" align="center">
                             <tr>
                              <td class="es-p40t es-p40b es-p40r es-p40l" align="left">
                               <table width="100%" cellspacing="0" cellpadding="0">
                                 <tr>
                                  <td width="520" valign="top" align="center">
                                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation">
                                     <tr>
                                      <td align="center" class="es-p10t es-p20b"><h1 style="color: #fdfdfd;font-family: helvetica, 'helvetica neue', arial, verdana, sans-serif">WELCOME&nbsp; TO&nbsp;<br>WINES SUPPLY COMMUNITY!&nbsp;</h1></td>
                                     </tr>
                                     <tr>
                                      <td class="es-p10t es-p20b es-p30r es-p30l" align="center"><p style="color: #8d8d8d">Thank you&nbsp;for for register&nbsp;and trust in us, we hope you enjoy our store as we enjoy having you here. Have a nice day!</p></td>
                                     </tr>
                                     <tr>
                                      <td class="es-p10t es-p20b" align="center"><span class="es-button-border" style="border-style: solid; background: #a21524"><a href="https://exquisite-brigadeiros-cc493c.netlify.app/" class="es-button" target="_blank" style="color: #fdfdfd;font-family: helvetica, arial, verdana, sans-serif;">ACCESS ACCOUNT</a></span></td>
                                     </tr>
                                   </table></td>
                                 </tr>
                               </table></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table>
                       <table class="es-content" cellspacing="0" cellpadding="0" align="center">
                         <tr>
                          <td align="center">
                           <table class="es-content-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                             <tr>
                              <td class="es-p40t es-p40r es-p40l" align="left">
                               <table width="100%" cellspacing="0" cellpadding="0">
                                 <tr>
                                  <td width="520" valign="top" align="center">
                                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation">
                                     <tr>
                                      <td class="es-p5t es-p15b es-m-txt-c" align="left"><h2 style="font-family: helvetica, 'helvetica neue', arial, verdana, sans-serif">YOUR ACCOUNT IS NOW ACTIVE</h2></td>
                                     </tr>
                                     <tr>
                                      <td class="es-p10b" align="left"><p><strong>Now you can add products to the cart, make purchases and access different subscription levels among other things.</strong></p></td>
                                     </tr>
                                     <tr>
                                      <td class="es-p10t es-p10b" align="left"><p>Remember that if you break the rules of conduct your account could be sanctioned or deleted by one of our administrators.&nbsp;We reserve the right of admission for the good of our community, a respectful and friendlycommunity of which we hope you will be a part of for a long time.</p></td>
                                     </tr>
                                     <tr>
                                      <td class="es-p10t es-p10b" align="left"><p>See you soon,</p></td>
                                     </tr>
                                   </table></td>
                                 </tr>
                               </table></td>
                             </tr>
                             <tr>
                              <td class="es-p10t es-p40b es-p40r es-p40l" align="left">
                               <!--[if mso]><table width="520" cellpadding="0"
                                            cellspacing="0"><tr><td width="40" valign="top"><![endif]-->
                               <table class="es-left" cellspacing="0" cellpadding="0" align="left">
                                 <tr>
                                  <td class="es-m-p0r es-m-p20b" width="40" valign="top" align="center">
                                   <table width="100%" cellspacing="0" cellpadding="0" style="border-radius: 10px;border-collapse: separate" role="presentation">
                                     <tr>
                                      <td align="center" style="font-size: 0px"><a target="_blank" href="https://exquisite-brigadeiros-cc493c.netlify.app/"><amp-img src="https://i.ibb.co/vcK0yR4/logo-wines-supply.png" alt style="display: block" width="40" height="34"></amp-img></a></td>
                                     </tr>
                                   </table></td>
                                 </tr>
                               </table> 
                               <!--[if mso]></td><td width="20"></td><td width="460" valign="top"><![endif]-->
                               <table cellspacing="0" cellpadding="0" align="right">
                                 <tr>
                                  <td width="460" align="left">
                                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation">
                                     <tr>
                                      <td align="left"><p style="color: #222222;font-size: 14px"><b>Wines Supply Team</b></p></td>
                                     </tr>
                                     <tr>
                                      <td align="left"><p style="color: #666666;font-size: 14px">Email Admin</p></td>
                                     </tr>
                                   </table></td>
                                 </tr>
                               </table> 
                               <!--[if mso]></td></tr></table><![endif]--></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table>
                       <table class="es-content" cellspacing="0" cellpadding="0" align="center">
                         <tr>
                          <td align="center">
                           <table class="es-content-body" style="background-color: #292828" width="600" cellspacing="0" cellpadding="0" bgcolor="#292828" align="center">
                             <tr>
                              <td class="es-p30t es-p30b es-p40r es-p40l" align="left">
                               <table width="100%" cellspacing="0" cellpadding="0">
                                 <tr>
                                  <td width="520" valign="top" align="center">
                                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation">
                                     <tr>
                                      <td align="center" style="font-size:0">
                                       <table class="es-table-not-adapt es-social" cellspacing="0" cellpadding="0" role="presentation">
                                         <tr>
                                          <td class="es-p10r" valign="top" align="center"><a target="_blank" href="https://www.facebook.com/"><amp-img title="Facebook" src="https://i.ibb.co/cyrK4mP/facebook-circle-white.png" alt="Fb" width="24" height="24"></amp-img></a></td>
                                          <td class="es-p10r" valign="top" align="center"><a target="_blank" href="https://www.twitter.com/"><amp-img title="Twitter" src="https://i.ibb.co/PF8kNp0/twitter-circle-white.png" alt="Tw" width="24" height="24"></amp-img></a></td>
                                          <td class="es-p10r" valign="top" align="center"><a target="_blank" href="https://www.instagram.com/"><amp-img title="Instagram" src="https://i.ibb.co/X82tfVg/instagram-circle-white.png" alt="Inst" width="24" height="24"></amp-img></a></td>
                                          <td valign="top" align="center"><a target="_blank" href="https://www.youtube.com/"><amp-img title="Youtube" src="https://i.ibb.co/LdDDMQK/youtube-circle-white.png" alt="Yt" width="24" height="24"></amp-img></a></td>
                                         </tr>
                                       </table></td>
                                     </tr>
                                   </table></td>
                                 </tr>
                               </table></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table>
                       <table cellpadding="0" cellspacing="0" class="es-footer" align="center">
                         <tr>
                          <td align="center">
                           <table class="es-footer-body" style="background-color: #ffffff" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                             <tr>
                              <td class="es-p40t es-p40b es-p40r es-p40l" align="left">
                               <table width="100%" cellspacing="0" cellpadding="0">
                                 <tr>
                                  <td width="520" valign="top" align="center">
                                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation">
                                     <tr>
                                      <td class="es-p10b" align="center"><p>This email was sent to you from winesupplyback@gmail.com</p></td>
                                     </tr>
                                     <tr>
                                      <td align="center" class="es-p10b"><p><a target="_blank" href="https://exquisite-brigadeiros-cc493c.netlify.app/">Preferences</a> | <a target="_blank" href="https://exquisite-brigadeiros-cc493c.netlify.app/">Browser</a> | <a target="_blank" href="https://exquisite-brigadeiros-cc493c.netlify.app/">Forward</a> | <a target="_blank" class="unsubscribe" href="https://exquisite-brigadeiros-cc493c.netlify.app/">Unsubscribe</a></p></td>
                                     </tr>
                                     <tr>
                                      <td align="center"><p>Copyright © 2022 <strong>Wine Supply, Inc</strong>, All Rights Reserved.</p></td>
                                     </tr>
                                   </table></td>
                                 </tr>
                               </table></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table>
                      </td>
                     </tr>
                   </table>
                  </div>
                 </body>
                </html>`, // html body
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

export default welcomeMail;