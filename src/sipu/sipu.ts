import moment = require('moment');
import momenttz = require('moment-timezone');

export function getTime() {
	return new Promise((resolve, reject) => {
    const date = moment(); //returns UTC date moment-timezone
    resolve(date);
  });
};

export function timeInIST() {
  return new Promise((resolve, reject) => {
    const dateTime = moment();
    const istTime = moment.tz(dateTime, 'Asia/Kolkata');
    resolve(istTime);
  });
};
