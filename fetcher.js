const fs = require('fs');
const request = require('request');
const param = process.argv.slice(2);

const url = param[0];
const localPath = param[1];

request(url, (error, response, body) => {
  let siteInfo = body
  fs.writeFile(localPath, siteInfo, (err) => {
    if(err) {
      console.log(err);
      return;
    }
    fs.stat(localPath, (err, stats) => {
      if(err) {
        console.log(err);
        return;
      }
      console.log(`Downloaded and saved ${stats.size} bytes to ${localPath}`);
    })     
  })  
});