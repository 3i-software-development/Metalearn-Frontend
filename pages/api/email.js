const nodemailer = require('nodemailer');

export default function handler(req, res) {

    const message = {
        from: 'namrong207@gmail.com',
        to: req.body.email,
        subject: 'Login Metalearn',
        text: "Country" + req.body.text.country + "Region" + req.body.text.regionName + "City" + req.body.text.city + "Isp" + req.body.text.isp + "Query" + req.body.text.query,
        html: `<p>Country: ${req.body.text.country}, Region: ${req.body.text.regionName}, City: ${req.body.text.city}, Isp: ${req.body.text.isp}, Query: ${req.body.text.query}, Location: ${req.body.lat ? req.body.text.lat : req.body.lat}, ${req.body.lng ? req.body.text.lon : req.body.lng}</p>`,
    };
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'namrong207@gmail.com',
            pass: 'fwggzqukqhanygii',
        },
    });

    if (req.method === 'POST') {
        transporter.sendMail(message, (err, info) => {
            if (err) {
                res.status(404).json({
                    error: `Connection refused at ${err.address}`
                });
            } else {
                res.status(250).json({
                    success: `Message delivered to ${info.accepted}`
                });
            }
        });
    }
}