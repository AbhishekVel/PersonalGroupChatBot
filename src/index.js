import login from "facebook-chat-api";
import config from './config';
import message_handler from "./message_handler";


login({email: config.EMAIL, password: config.PASSWORD}, (err, api) => {
    if(err) return console.error(err);
    api.listen((err, message) => {
        message_handler(message.body, message.threadID, api);
        // api.sendMessage(message.body, message.threadID);
    });
});
