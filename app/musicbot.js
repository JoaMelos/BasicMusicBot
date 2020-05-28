const MusicBot = require('./server.js');

const musicBot = new MusicBot({
  discordToken: 'Add your token here',
  googleKey: 'yt api token here'
});

musicBot.start();

//Do not update this to Discord.JS v0.12.1 or your bot will crash