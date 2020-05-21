const nodemailer = require('nodemailer');

exports.sendMail = ({ mailTo, mailType, options }) => {
    try {
        const mailOptions = setOptions(mailTo, mailType, options);

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
        });
        transporter.sendMail(mailOptions);
    } catch (err) {
        console.log(err);
        throw new ErrorResponse('Error occured while sending email :(', 500);
    }
};

const setOptions = (mailTo, mailType, options) => {
    const result = {
        from: `"LoveLetter" ${process.env.EMAIL}`,
        to: mailTo,
    };

    switch (mailType) {
        case 'REGISTRATION':
            result.subject = `LoveLetter New Account`;
            result.html = `
                <h2>You have succesfully created your account.</h2></br>
                <p>Dear ${options.username},</p>
                <p>Please click <a href='${process.env.WEBSITE_URL}/auth/verify/${options.token}'>here</a> to finish activation process of your account.:</p>
            `;
            break;
    }

    return result;
};
