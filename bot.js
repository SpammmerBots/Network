const Discord = require('discord.js');
const tpoints = {};
const vpoints = {};
const jimp = require("jimp");
const moment = require('moment');
const Canvas = require("canvas");
const fs = require('fs');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
 client.user.setActivity("",{type: 'watching'})
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});


client.on("guildMemberAdd", member => {
      //const welcomer = client.channels.get("512674548382957573");
      let welcomer = member.guild.channels.find("name","☆-「chat")
      if(!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var h = member.user;
        let heroo = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(h.avatarURL)
        .setAuthor(h.username,h.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
         .addField(': تاريخ دخولك السيرفر',`${moment(member.joinedAt).format('D/M/YYYY h:mm a ')} \n\`\`${moment(member.joinedAt).startOf(' ').fromNow()}\`\``, true)      
         .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:heroo});          
      
      const w = ['./img/w1.png',
      './img/w2.png',
      './img/w3.png',
      './img/w4.png',
      './img/w5.png',
      './img/w6.png',
      './img/w7.png',
      './img/w8.png',
      './img/w9.png',
      './img/w10.png',
      './img/w11.png',
      './img/w12.png',
      './img/w13.png',
      './img/w14.png',
      './img/w15.png',
      './img/w16.png',
      './img/w17.png',
      './img/w18.png',];
      
              let Image = Canvas.Image,
                  canvas = new Canvas(401, 202),
                  ctx = canvas.getContext('2d');
              ctx.patternQuality = 'bilinear';
              ctx.filter = 'bilinear';
              ctx.antialias = 'subpixel';
              ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
              ctx.shadowOffsetY = 2;
              ctx.shadowBlur = 2;
              fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                  if (err) return console.log(err)
                  let BG = Canvas.Image;
                  let ground = new Image;
                  ground.src = Background;
                  ctx.drawImage(ground, 0, 0, 401, 202);
      
      })
      
                      let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".gif" : member.user.displayAvatarURL;
                      jimp.read(url, (err, ava) => {
                          if (err) return console.log(err);
                          ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                              if (err) return console.log(err);
      
                              //AVATARً
                              let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.drawImage(ava, 152, 27, 95, 95);
                              
                                                      //wl
                              ctx.font = '20px Arial Bold';
                              ctx.fontSize = '20px';
                              ctx.fillStyle = "#4c1130";
                              ctx.textAlign = "center";
                                                         ctx.fillText(member.user.username, 200, 190);
                              
                              //NAMEً
                              ctx.font = '19px Arial';
                              ctx.fontSize = '18px';
                              ctx.fillStyle = "#151f72";
                              ctx.textAlign = "center";
      ctx.fillText(`..Wèlcomè » to » Mâl Shop..`
                              , 200, 155);
    welcomer.sendFile(canvas.toBuffer())
      
      
      
      })
      })
      
      }
      });/////Mal Team By:Mahmoud-QuaStyle#5661


client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const stewart = member.guild.channels.find("name", "☆-「chat");
     stewart.send(`<@${member.user.id}>**Invite By**:<@${inviter.id}>:champagne_glass:`);
   //  stewart.send(`<@${member.user.id}> joined using invite code ${invite.code} from <@${inviter.id}>. Invite was used ${invite.uses} times since its creation.`);
  }); 
});


const invites = {};

const wait = require('util').promisify(setTimeout);

client.on('ready', () => {
  wait(1000);

  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const logChannel = member.guild.channels.find(channel => channel.name === "ch.at");  
    logChannel.send(`**__Invited By:__** <@${inviter.tag}>`);
  });
});














client.on('message', ( message ) => {
  if(message.author.bot) return;

  if(message.channel.id !== '513396752141910036') return;


  let types = [
    'jpg',
    'jpeg',
    'png'
  ]

  if (message.attachments.size <= 0) {
    message.delete();
    message.channel.send(`${message.author}, This channel for Pic 🖼️ Only`) // 
    .then(msg => {
      setTimeout(() => {
        msg.delete();
      }, 6000)
  })
  return;
}

  if(message.attachments.size >= 1) {
    let filename = message.attachments.first().filename
    console.log(filename);
    if(!types.some( type => filename.endsWith(type) )) {
      message.delete();
      message.channel.send(`${message.author}, This channel for Pic 🖼️ Only`)
      .then(msg => {
        setTimeout(() => {
          msg.delete();
        }, 6000)
      })
    }
  }

});//////////////Mal Team By:Mahmoud-QuaStyle#5661

client.on('message', ( message ) => {
  if(message.author.bot) return;

  if(message.channel.id !== '517859600674848778') return;


  let types = [
    'jpg',
    'jpeg',
    'png'
  ]

  if (message.attachments.size <= 0) {
    message.delete();
    message.channel.send(`${message.author}, This channel for Pic 🖼️ Only`) // 
    .then(msg => {
      setTimeout(() => {
        msg.delete();
      }, 5000)
  })
  return;
}

  if(message.attachments.size >= 1) {
    let filename = message.attachments.first().filename
    console.log(filename);
    if(!types.some( type => filename.endsWith(type) )) {
      message.delete();
      message.channel.send(`${message.author}, This channel for Pic 🖼️ Only`)
      .then(msg => {
        setTimeout(() => {
          msg.delete();
        }, 5000)
      })
    }
  }

});//////////////Mal Team By:Mahmoud-QuaStyle#5661

client.on("message", message => {
  var prefix = "g!";// البرفكس
if(message.content.startsWith(prefix + "asetwlc")) {
  let args = message.mentions.channels.first();
      if(!args) message.channel.send("** منشن روم . :x:**").then(m => {    
m.delete(1500);
})
          if(!message.guild.member(message.author.id).hasPermission("MANAGE_CHANNELS")) return message.channel.send("**ليس لديك صلاحيات . :x:**");
                  message.channel.send(`**${args}. لقد تم شغل الروم هذا للترحيب.**`);
              client.on("guildMemberAdd", (member) => {
                      if(member.user.bot) return;
                   var embed = new Discord.RichEmbed()
.setAuthor(member.user.username, member.user.avatarURL)
.setThumbnail(member.user.avatarURL)
.setTitle('New Member')
.setDescription('Welcome To Server')
.addField('**ID Member:',"" +  member.user.id, true)
.addField('**Tage Member:', member.user.discriminator, true)
.addField('Created At Member', member.user.createdAt, true)
.addField(' :bust_in_silhouette:  Your Number',`**[ ${member.guild.memberCount} ]**`,true)
.setColor('GREEN')
.setFooter(member.guild.name, member.guild.iconURL, true)
                   
args.send({embed : embed});
              });
}
});

//
client.on('message',async Qua => {
  if(Qua.content.startsWith(prefix + "vo")) {
  if(!Qua.guild.member(Qua.author).hasPermissions('MANAGE_CHANNELS')) return Qua.reply(':x: **ليس لديك الصلاحيات الكافية**');
  if(!Qua.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return Epic.reply(':x: **ليس معي الصلاحيات الكافية**');
  Qua.guild.createChannel(`Voice Online : [ ${Qua.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
    console.log(`Voice Online Is Activation In ${Qua.guild.name}`);
    c.overwritePermissions(Qua.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(` Online :  ${Qua.guild.members.filter(m => m.voiceChannel).size} .`)
    },1000);
  });
  }
});/////Mal-Mahmoud-QuaStyle


client.on('message', async message => {
            if(!message.channel.guild) return;
             if (message.content.startsWith("maset")) {
let args = message.content.split(' ').slice(1).join(' ');
            let sigMessage = await args;
            
            if (sigMessage === "online") {
                client.user.setStatus("online");
                message.author.send("Your status was set to online.");
            }
            if (sigMessage === "idle") {
                client.user.setStatus("idle");
                message.author.send("Your status was set to idle.");
            }
            if (sigMessage === "invisible") {
                client.user.setStatus("invisible");
                message.author.send("Your status was set to invisible.");
            }
            if (sigMessage === "dnd") {
                client.user.setStatus("dnd");
                message.author.send("Your status was set to dnd.");
            }
            // message.author.send("." + message.content);
        
}
});/////////3MK

client.on('message',async message => {
  let args = message.content.split(" ").slice(1).join(" ");
  let role = message.guild.roles.find('name',args) || message.guild.roles.get(args);


  if(message.content.startsWith(prefix + "role-info")) {
    if(!args) return message.reply('اكتب اسم الرتبة');
    if(!role) return message.reply('هذه الرتبة غير موجودة');
    let iQp = new Discord.RichEmbed()
    .setAuthor(message.author.tag,message.author.avatarURL)
    .setTitle(message.guild.name)
    .setThumbnail(message.guild.iconURL)
    .addField('- اسم الرتبة',role.name,true)
    .addField('- اي دي الرتبة',role.id,true)
    .addField('- تم انشاء الرتبة',role.createdAt.toLocaleString(),true)
    .addField('- لون الرتبة',role.hexColor,true)
    .addField('- عدد الاعضاء الذي لديهم نفس الرتبة',role.members.size,true)
    .addField('- مركز الرتبة بين كل الرتب',role.position,true)
    .addField('- خصائص الرتبة',role.permissions,true)
    .setFooter(message.author.tag,message.author.avatarURL);

    message.channel.send(iQp);
  }
});
///////////////////////////////////////////////////////////////////////////
const yourID = "411137717884289024";
const setupCMD = "tteroles"
let initialMessage = `**@everyone  rolereact**
**React to the messages below to get role. If you would like to remove the role remove your reaction!** `;
const roles = ["GAY", "KID", "+18", "16-17", "funny", "zamel", "3nab", "bitch", "m3wa9", "singel"];//رتب
const reactions = ["👬", "👶", "😊", "🔞", "😂", "😘", "🍇", "💋", "🙅", "💔"];//رياكشن

if (roles.length !== reactions.length) throw "Roles list and reactions list are not the same length!";


function generateMessages(){
    var messages = [];
    messages.push(initialMessage);
    for (let role of roles) messages.push(`React below to get the **"${role}"** role!`); 
    return messages;
}


client.on("message", message => {
    if (message.author.id == yourID && message.content.toLowerCase() == setupCMD){
        var toSend = generateMessages();
        let mappedArray = [[toSend[0], false], ...toSend.slice(1).map( (message, idx) => [message, reactions[idx]])];
        for (let mapObj of mappedArray){
            message.channel.send(mapObj[0]).then( sent => {
                if (mapObj[1]){
                  sent.react(mapObj[1]);  
                } 
            });
        }
    }
})
////////////
client.on('message', function (message){
  var now = new Date();
  var temps = Date.now();
  var present=false;
  var i = 0;
  var xp=0;
  if(message.member!=null){
    var membre=message.member.user.id;
    
    if (message.content.startsWith("O'help")){
      var help_embed=new Discord.RichEmbed();
      help_embed.setColor("#40A497")
      help_embed.setTitle("Voici les commandes du bot O'shishin :");
      help_embed.addField("-O'role [un emoji] [une mention de role]","permet de lier un emoji à un role");
      help_embed.addField("-O'nonActif [nb] :"," Montre la liste des inactifs depuis nb jours.");
      help_embed.addField("-O'warning [nb] :"," Envois un msg d'avertissement aux inactifs depuis nb jours.");
      help_embed.addField("-O'avertissement [mention du membre] :"," Le membre à un avertissement pour son comportement.")
      help_embed.addField("-O'delAvert [mention du membre] :"," Supprime un membre avertis de la base de donnée.");
      help_embed.addField("-O'showAvert :"," Montre la liste des membres avertis.");
      help_embed.addField("-O'xp :"," Permet de connaitre notre total d'xp.")
      message.author.createDM().then(function(channel2){
        channel2.send(help_embed);
      })  
    }

    if (message.content.startsWith("O'role")){
      var present=false;
      var déjàPassé=0;
      var err=0;
      let args=message.content.split(' ');
      var argsinut=args.shift();
      var Emoji = args.shift();
      var role=message.mentions.roles;
      role=Array.from(role);
      if (role[0]===undefined){
        if(message.member.hasPermission("MANAGE_ROLES")){
        message.author.createDM().then(function(channelErr){
          channelErr.send("Il y a une erreur dans cette commande, veuillez vous referer au O'help .");
        })
        err=1;
      }
    }
  
      if(message.member.hasPermission("MANAGE_ROLES") && err===0){
        role=role[0][1];
        if(emojis.length>0){
            for (var i=0; i<emojis.length;i++ && present!=true){
              if ((role===emojis[i][1] || Emoji===emojis[i][0]) && déjàPassé===0 ){
                present=true;
                message.author.createDM().then(function(channel){
                  channel.send("Le rôle ou l'émoji sont déjà utilisé :(");
                })  
              }
              if(i===emojis.length-1 && present===false){
                present=true;
                déjàPassé=1;

                emojis.push([Emoji,role]);
                message.author.createDM().then(function(channel3){
                  channel3.send("Vous avez accordé le rôle "+role.id+" à l'emoji "+Emoji);
                })  
              }
            }
          }
        else{
          emojis.push([Emoji,role]);
          message.author.createDM().then(function(channel2){
            channel2.send("Vous avez accordé le rôle "+role.id+" à l'emoji "+Emoji);
          })  
        }
      }
      else{
        if(!message.member.hasPermission("MANAGE_ROLES")){
        message.author.createDM().then(function(channel3){
          channel3.send("Vous n'avez pas les permissions pour utiliser cette commande");
        })  
      }
    }
  }

    /*if((message.content.startsWith("O'addRole"))){
      let args=message.content.split(' ');
      console.log(args);
      for(var i=1;i<args.length;i++){
        for(var a=0;a<emojis.length;a++){
          if (emojis[a][0]===args[i]){
            message.member.addRole(emojis[a][1]);
          }
        }
      }
      message.delete();
    }*/

    if (message.content.startsWith("O'nonActif")){
      if(message.member.hasPermission("ADMINISTRATOR")){
        let args=message.content.split(' ');
        var argsinut=args.shift();
        var nbJour = args.shift();
        var help_embed=new Discord.RichEmbed();
        var date=new Date();
        help_embed.setColor("#40A497")
        help_embed.setTitle("Voici les personnes inactif selon tes critères :")
          for (var c=0;c<tableau.length;c++){
            if ((date-tableau[c][2])>nbJour*86400000){
              help_embed.addField("-"+bot.users.get(tableau[c][0]).tag);
            }
          }
        message.author.createDM().then(function(channel){
          channel.send(help_embed);
        })
      }
      else{
        message.author.createDM().then(function(channelErr){
          channelErr.send("Vous n'avez pas les permissions pour utiliser cette commande.");
        })
      }
      
    }

    if (message.content.startsWith("O'avertissement")){
      var err=0;
      var membre=message.mentions.users;
      var membre=Array.from(membre);
      if(membre[0]===undefined && message.member.hasPermission("ADMINISTRATOR")){
        message.author.createDM().then(function(channelErr){
          channelErr.send("Il y a une erreur dans cette commande, veuillez vous referer au O'help .");
        })
        err=1;
      }
      if(message.member.hasPermission("ADMINISTRATOR") && err===0){
        membre=membre[0][1];
        membre=membre.id;
        var pres=false;
        if(avert.length>0){
          for (var i=0;i<avert.length;i++){
            if (avert[i][0]===membre && pres!=true){
              pres=true;
              avert[i][1]+=1;
              nb=avert[i][1];
              message.author.createDM().then(function(channel2){
                channel2.send("Ce membre a maintenant "+nb+" avertissement.");
              })  
            }
            if (i===avert.length-1 && pres===false){
              pres=true;
              avert.push([membre,1]);
              message.author.createDM().then(function(channel2){
                channel2.send("Vous avez avertis "+bot.users.get(membre).tag);
              })  
            }
          }

        }
        else{
          avert.push([membre,1]);
          message.author.createDM().then(function(channel2){
            channel2.send("Vous avez avertis "+bot.users.get(membre).tag);
          })  
        }
      }
      else{
        if(!message.member.hasPermission("ADMINISTRATOR")){
        message.author.createDM().then(function(channelErr){
          channelErr.send("Vous n'avez pas les permissions pour utiliser cette commande");
        })  
      }
    }
    }

    if (message.content.startsWith("O'delAvert")){
      var membre=message.mentions.users;
      var err=0;
      var membre=Array.from(membre);
      if(membre[0]===undefined && message.member.hasPermission("ADMINISTRATOR")){
        err=1;
        message.author.createDM().then(function(channelErr){
          channelErr.send("Il y a une erreur dans cette commande, veuillez vous referer au O'help .");
        })  
      }
      if(message.member.hasPermission("ADMINISTRATOR") && err===0){
        membre=membre[0][1];
        membre=membre.id;
        if(avert.length>0){
          for (var i=0;i<avert.length;i++){
            if (avert[i][0]===membre){
              avert.splice(i,1);
            }
          }
        }
        else{
          message.author.createDM().then(function(channel2){
            channel2.send("Ce membre n'est pas dans la liste des membres avertis.");
          })  
        }
      }
      else{
        if(!message.member.hasPermission("ADMINISTRATOR")){
        message.author.createDM().then(function(channelErr){
          channelErr.send("Vous n'avez pas les permissions pour utiliser cette commande.");
        })  
      }
    }
    }

    if (message.content.startsWith("O'showAvert")){
      if(message.member.hasPermission("ADMINISTRATOR")){
        var help_embed=new Discord.RichEmbed();
        help_embed.setColor("#40A497")
        help_embed.setTitle("Voici les personnes qui sont la cible d'avertissement :")
          for (var c=0;c<avert.length;c++){
              nb=avert[c][1];
              help_embed.addField("-"+bot.users.get(avert[c][0]).tag+" a "+nb+" avertissements.");
            }
        message.author.createDM().then(function(channel){
          channel.send(help_embed);
        })
      }
      else{
        message.author.createDM().then(function(channelErr){
          channelErr.send("Vous n'avez pas les permissions pour utiliser cette commande.");
      })
      }
    } 

    if (message.content.startsWith("O'warning")){
      if(message.member.hasPermission("ADMINISTRATOR")){
        let args=message.content.split(' ');
        var argsinut=args.shift();
        var nbJour = args.shift();
        var date=new Date();
          for (var c=0;c<tableau.length;c++){
            if ((date-tableau[c][2])>nbJour*86400000){
              bot.users.get(tableau[c][0]).createDM().then(function(channel1){
                channel1.send("Nous avons remarqué que tu étais plutôt inactif ces derniers temps. Notre but n'étant pas d'engranger le plus de membred possible nous te demanderons de bien vouloir être un minimum actif pour rester au sein de notre communauté ;)")
              })
            }
          }
      }
      else{
        message.author.createDM().then(function(channelErr){
          channelErr.send("Vous n'avez pas les permissions pour utiliser cette commande.");
      })
    }
  }

    /*if (message.content.startsWith("O'purge")){
      if(message.member.hasPermission("ADMINISTRATOR")){
      }
      else{
        message.author.createDM().then(function(channelErr){
          channelErr.send("Vous n'avez pas les permissions pour utiliser cette commande.");
      })
      }
    }*/
      

    if(message.content.startsWith("O'xp")){
      for (var d=0;d<tableau.length;d++){
        if (tableau[d][0]===message.member.user.id){
          var x=tableau[d][3];
          bot.users.get(tableau[d][0]).createDM().then(function(channel){
            channel.send("Tu as actuellement "+x+" xp. Continue comme ça et tu atteindras rapidement le prochain niveau !")
          })
        }
    }
  }
    while(present!=true){
      var present=false;
      if(tableau.length>0){
        if(tableau[i][0]===membre){
          var present=true;
          tableau[i][1]+=1;
          tableau[i][2]=temps;
          dateXp=tableau[i][4];
          if (temps>=dateXp+30000){
            tableau[i][3]+=1;
            if(tableau[i][3]===1){
              //niveau 0
              var roleMembre=message.guild.roles.find("name","membre");
              message.member.addRole(roleMembre);
            }
            if(tableau[i][3]===100){
              //niveau 1
              message.guild.channels.get("498511797008203779").send(`Bravo, tu as atteint le niveau 1 ${message.member}`);
            }
            if(tableau[i][3]===300){
              //niveau 2
              message.guild.channels.get("498511797008203779").send(`Bravo, tu as atteint le niveau 2 ${message.member}`);
            }
            if(tableau[i][3]===700){
              //niveau 3
              message.guild.channels.get("498511797008203779").send(`Bravo, tu as atteint le niveau 3 ${message.member}`);
            }
            if(tableau[i][3]===1500){
              //niveau 4
              message.guild.channels.get("498511797008203779").send(`Bravo, tu as atteint le niveau 4 ${message.member}`);
            }
            if(tableau[i][3]===3000){
              //niveau 5
              message.guild.channels.get("498511797008203779").send(`Bravo, tu as atteint le niveau 5 ${message.member}`);
            }
            if(tableau[i][3]===5000){
              //niveau 6
              message.guild.channels.get("498511797008203779").send(`Bravo, tu as atteint le niveau 6 ${message.member}`);
            }
        tableau[i][4]=temps;
      }
  }
  i+=1;
  if (i===tableau.length && present!=true){
    tableau.push([membre,1,temps,0,0]);
    var present=true;
    i=0;
  }
} 
  else{
  tableau.push([membre,1,temps,xp]);
  present=true;
}
}  
  écritureDansFichier();
}
  })



client.login(process.env.BOT_TOKEN);

