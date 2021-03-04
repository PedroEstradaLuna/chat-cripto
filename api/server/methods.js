import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';

import { Messages } from '../collections.js';

Meteor.methods({

	'sendMessage'(data,encrypted_message) {

		check(data, {
			message: String, //the message to send
      name: Match.Optional(String) //if the user already has a name
		});
    
    if (data.message==""||encrypted_message=="") {
      throw new Meteor.Error("message-empty", "Your message is empty");
    }

    let userName = (data.name && data.name!="") ? data.name : "Anonymous";

    const matchName = data.message.match(/^set name (.*)/i);

    if (matchName && matchName[1]!="") {
      userName = matchName[1];
      Messages.insert({
        name: "Hey everyone, " + userName + " is here!",
        message: "",
        createdAt: new Date(),
        announcement: true
      });
    } else {
      Messages.insert({
        name: userName,
        message: encrypted_message,
        createdAt: new Date()
      });
    }

    return {
      name: userName
    };
		
	}
  
});