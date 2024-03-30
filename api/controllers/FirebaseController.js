'use strict'
var admin = require("firebase-admin");
const { initializeApp, applicationDefault  } = require('firebase-admin/app');
const { getMessaging  } = require('firebase-admin/messaging');
var serviceAccount = require("../../sdk-firebase-new.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
// const app = initializeApp({
//     credential: applicationDefault(),
//     projectId: 'signapp-98138',
// });
// $env:GOOGLE_APPLICATION_CREDENTIALS="D:\firebasenodejs\sdk-firebase-new.json"
module.exports = {
    get: (req, res) => {
        const message = {
            notification: {
              title: "Notif",
              body: 'This is a Test Notification'
            },
            token: "foPUqVUWRuiaJZUyBHqV14:APA91bGaq-GsG1vD-0I40Tmka5lyVpFoaUy1JVfaRX5vKdbV31x0KJoEis6oVW863vXO32x6-cBUcOhMUXpkNxo6wXUYy5O2Hf9je952C2vIpXjF6mTBhJgmdInLOoImJ2G39p9m_hGy",
          };

        getMessaging()
          .send(message)
          .then((response) => {
            res.status(200).json({
              message: "Successfully sent message",
              //token: receivedToken,
            });
            console.log("Successfully sent message:", response);
          })
          .catch((error) => {
            res.status(400);
            res.send(error);
            console.log("Error sending message:", error);
          });
    },
    post: (req, res) => {
        let data = req.body;
        // console.log(data);
        // if(data.data.length > 0){
        //     console.log(data.data)
        // }
        // console.log(data.data);
        let dulieu = data.data
        console.log("dữ liệu : ");
        console.log(dulieu);
        const message = {
            notification: {
              title: data.notification.title,
              body: data.notification.body
            },
            token: data.to,
            data: dulieu
          };

        getMessaging()
          .send(message)
          .then((response) => {
            res.status(200).json({
              message: "Gửi thông báo thành công!",
              succes: true,
            });
            console.log("Successfully sent message:", response);
          })
          .catch((error) => {
            res.status(400).json({
                message: "Có lỗi xảy ra!",
                succes: false,
              });
            res.send(error);
            console.log("Error sending message:", error);
          });
    },
}
