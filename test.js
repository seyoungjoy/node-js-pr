const nodemailer = require('nodemailer');
const email = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "a5f9332e7bc36e",
        pass: "713d39aac34e61"
    }
}

const send = async (option) => {
    nodemailer.createTransport(email).sendMail(option, (error, info) => {
        if(error){
            console.log(error);
        } else{
            console.log(info);
            return info.response;
        }
    })
};

let email_data = {
    from : 'diddpwl80@gmail.com',
    to:'diddpwl80@gmail.com',
    subject:'테스트 메일2!!',
    text:'nodejs 한시간만에 끝내기 회사에서 공부중.'
};

send(email_data)
