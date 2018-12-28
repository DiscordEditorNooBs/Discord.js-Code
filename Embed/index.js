const config = require("./cmd.json");

const Discord = require('discord.js');
const { RichEmbed } = require('discord.js');
const client = new Discord.Client();
const prefix = config.prefix;

client.on('ready', () => {
  console.log('봇이 준비되었습니다!');
  console.log('--------------------------------');
});

client.on('message', message => {
  if (message.content === `${prefix}help`) {
    const embed = new RichEmbed()
      .setTitle('텍스트 타이틀') //텍스트의 타이틀을 정합니다.
      .setColor("RANDOM") //Embed의 색을 랜덤컬러로 정합니다. 색을 정하고 싶다면 ""를 없애고 디스코드 색깔코드를 삽입하세요.
      .setDescription('타이틀의 보조 텍스트') //타이틀의 보조 텍스트입니다.
      .setThumbnail('Embed에 들어갈 사진의 링크') //Embed에 삽입하고 싶은 사진의 링크를 삽입하세요.
      .addField('텍스트의 제목', '텍스트 아래 보조 텍스트') //타이틀 밑에 텍스트를 넣고 보조 텍스트를 넣습니다.
      .addBlankField() //Embed에 빈공간을 추가시킵니다.
      .addField('텍스트의 제목', '보조 텍스트', true) //텍스트의 제목 아래에 보조 텍스트를 삽입, 왼쪽
      .addField('텍스트의 제목', '보조 텍스트', true) //텍스트의 제목 아래에 보조 텍스트를 삽입, 오른쪽
      .setTimestamp() //맨 마지막에 이 글이 올라온 시간을 추가시킵니다.
      .setFooter('맨 마지막에 넣고싶은 텍스트', '맨 마지막에 넣고싶은 사진의 링크'); //맨 마지막에 넣고싶은 텍스트에는 걍 넣고싶은 텍스트를 넣고 사진의 링크에는 사진의 링크를 넣으세요.
    message.channel.send(embed);
  }
});

client.login(config.Token);
