// import type { NextApiRequest, NextApiResponse } from "next";
// import sgMail from "@sendgrid/mail";

// sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

// type Data = {
//     message: string;
// };

// export default async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse<Data>
// ) {
//     if (req.method === "POST") {
//         const {
//             name,
//             email,
//             message,
//         }: { name: string; email: string; message: string } = req.body;
//         const msg = `Name: ${name}\r\n Email: ${email}\r\n Message: ${message}`;
//         const data = {
//             to: process.env.MAIL_TO as string,
//             from: process.env.MAIL_FROM as string,
//             subject: `${name.toUpperCase()} sent you a message from Portfolio`,
//             text: `Email => ${email}`,
//             html: msg.replace(/\r\n/g, "<br>"),
//         };
//         try {
//             await sgMail.send(data);
//             res.status(200).json({ message: "Your message was sent successfully." });
//         } catch (err) {
//             res.status(500).json({ message: `There was an error sending your message. ${err}` });
//         }
//     }
// }

import type { NextApiRequest, NextApiResponse } from "next";
import fetch from 'node-fetch';

type Data = {
    message: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === "POST") {
        const {
            name,
            email,
            message,
        }: { name: string; email: string; message: string } = req.body;

        const formData = new URLSearchParams();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("message", message);

        try {
            const formSpreeResponse = await fetch("https://formspree.io/f/xnqeagkv", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: formData,
            });

            if (formSpreeResponse.ok) {
                res.status(200).json({ message: "Your message was sent successfully." });
            } else {
                const errorMessage = await formSpreeResponse.text();
                res.status(500).json({ message: `There was an error sending your message. ${errorMessage}` });
            }
        } catch (err) {
            res.status(500).json({ message: `There was an error sending your message. ${err}` });
        }
    }
}
