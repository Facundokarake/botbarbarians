//DISCORD BOT

const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();

var prefix = config.prefix;

client.on('ready', () => {
  var canal = client.channels.cache.get("795434038881026068");
//  canal.messages.fetch('827268146753699840');
  //var mensaje = cana.messages.get("827304795702034475");
  //canal.send("activo");

});


/*

client.on('messageReactionAdd', (reaction, user) => {
  let message = reaction.message, emoji = reaction.emoji;
 

  if (emoji.name == 'Logo2') {
          // We don't have the member, but only the user...
          // Thanks to the previous part, we know how to fetch it
          var values = [
            [
              user.username
            ],
            // Additional rows ...
          ];
          var body = {
            values: values
          };
          gapi.client.sheets.spreadsheets.values.update({
             spreadsheetId: spreadsheetId,
             range: range,
             valueInputOption: valueInputOption,
             resource: body
          }).then((response) => {
            var result = response.result;
            console.log(`${result.updatedCells} cells updated.`);
          });
          
     
  }

  else if (emoji.name == 'CryingCool') {
        
  }

  // Remove the user's reaction
 // reaction.remove(user);
});
*/

client.on('message', message => {
  if (message.content.startsWith(prefix + 'hola')) {
    message.channel.send('jocker manco');

  };
  if (message.content.startsWith(prefix + 'a la pelota')) {
    message.channel.send('pelota buena'),
      message.react('😄');

  }

});







//EXCEL DRIVE

const fs = require('fs');
const readline = require('readline');
const { google } = require('googleapis');

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = 'token.json';








/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  const { client_secret, client_id, redirect_uris } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
    client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });

}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error while trying to retrieve access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });


}

/**
 * Prints the names and majors of students in a sample spreadsheet:
 * @see https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */


// Load client secrets from a local file.
var list = null;
var dia = "";

var idMesg ;
client.on('message', message => {
    if(message.content.startsWith(prefix + 'guerra')){
    
        const args = message.content.slice(prefix.length).trim().split(" ");
const dia = args[1];

      // dia =  message.content.substr(6,12);
var mensajeEmbebido = new Discord.MessageEmbed()
.setDescription("El día sabado " + dia + " tenemos guerra terriotorial. \n\r  Recuerden asistir 30 minutos antes para poder organizarse " +
 " el dia de la guerra se comunicara la información sobre las unidades, artilleria y deber a cumplir. " )
 .addField("Reaccionar con:",     " <:Logo2:825929540642668585> Si estoy en la guerra  \n\r  <:CryingCool:750458085708923020>  No estoy en la guerra", true)
.setColor("#3498DB")
.setThumbnail("https://i.ibb.co/VNwwxpt/LogoHD.png%10")          
.setTitle("Confirmación de guerra del dia " + dia )
.setImage("https://i.ibb.co/R2NHm2f/horario-Nuevo.png%20")
//message.channel.send(mensajeEmbebido) // without mention

message.channel.send(mensajeEmbebido).then(message => {
 
  /* OPCIONAL
   embed = discord.Embed(title="Bug report")
  embed.add_field(name="Name", value="value")
  msg = await adminBug.send(embed=embed) 
  
  await msg.add_reaction("💖")*/

idMesg = message.id;
message.react('<:Logo2:825929540642668585>')   
message.react('<:CryingCool:750458085708923020>')
    });
 
};

if(message.content.startsWith(prefix + 'usu')){
  


  message.channel.messages.fetch({around: idMesg, limit: 1})
  .then(messages => {
    messages.first().edit("This fetched message was edited");
  });
 // let message = reaction.message, emoji = reaction.emoji;
 
if (message.id === '827289827295237008261131054668128338')
  if (emoji.name == 'Logo2') {
          // We don't have the member, but only the user...
          // Thanks to the previous part, we know how to fetch it
          message.guild.fetchMember(user.id).then(member => {
                  //member.addRole('role_id');
          });
  }

  else if (emoji.name == '❎') {
          message.guild.fetchMember(user.id).then(member => {
                 // member.removeRole('role_id');
          });
  }

  // Remove the user's reaction
 // reaction.remove(user);
  
  };
});




client.on('message', message => {
 

  

    fs.readFile('credentials.json', (err, content) => {

      if (err) return console.log('Error loading client secret file:', err);
      // Authorize a client with credentials, then call the Google Sheets API.
      authorize(JSON.parse(content), listMajors);

    });

    //mandarMensaje();
    //message.channel.send(list);

  


  function listMajors(auth) {
    const sheets = google.sheets({ version: 'v4', auth });
    sheets.spreadsheets.values.get({
      spreadsheetId: '1IOPhe37qBTK8YQiZAg9u08j-nx_zwOgNR4g3JHExZRg',
      range: 'Comandos!A2:L25',
    }, (err, res) => {
      if (err) return console.log('The API returned an error: ' + err);
      const rows = res.data.values;

      if (rows.length) {
        rows.map((row) => {
        
          if (message.content.startsWith(prefix + row[0])) {

                const args = message.content.slice(prefix.length).trim().split(" ");              
            const dia = args[1];
            
            
            // dia =  message.content.substr(6,12);
            var mensajeEmbebido = new Discord.MessageEmbed()
            .setTitle(row[1])
              .setDescription(row[2])
            
              .setThumbnail(row[10])                     
              .setColor("#3498DB")       
           /* Se usa para dividir en columnas el mensaje   
           .addFields(
                { name: 'Regular field title', value: 'Some value here' },
                { name: '\u200B', value: '\u200B' },
                { name: 'Inline field title', value: 'Some value here', inline: true },
                { name: 'Inline field title', value: 'Some value here', inline: true },
              )
              .addField('Inline field title', 'Some value here', true)*/
              if (row[3] != "" && row[3] != undefined ){
                mensajeEmbebido.addField(row[3],row[4] )             

              }
              if(row[5] != "" && row[3] != undefined ){
                mensajeEmbebido.addField(row[5], row[6])
                
              }
              if(row[7] != "" && row[3] != undefined ){
                mensajeEmbebido.addField(row[7], row[8])
              }
              if(row[9] != ""){
                mensajeEmbebido.setImage(row[9])

              }
          
            message.channel.send(mensajeEmbebido) // without mention
      //    message.react('😄')
       //     message.react('🤥')
          }    

          

         // message.channel.send(`${row[0]}, ${row[4]}`);


        });





      } else {
        console.log('No data found.');
      }
    });
  }

});

/*
client.on('messageReactionAdd', (reaction, user) => {
  // Verificamos que la reaccion sea en un servidor
  if (!reaction.message.channel.guild) return;
  // Verificamos que la reaccion solo sea de miembros y no por bots
  if (user.bot) return;
  // Obtenemos los datos del mensaje donde se agrego la reacción
  let message = reaction.message;
  // Obtener los datos del servidor donde se hiso la reacción
  let guild = message.guild;
  // Obtenemos los datos del canal donde se hiso la reacción
  let channel = message.channel;
  // Obtenemos el nombre del emoji de la reacción
  let emoji = reaction.emoji.name
 
  // Enviamos un mensaje de información de la reacción agregada en un canal X 
  //client.channels.cache.get('ID-CANAL').send(`El usuario **${user.username}** reacciono con el emoji ${emoji} al mensaje **${message.content}** enviado en el canal <#${channel.id}> del servidor **${guild.name}**.`)


 
 });

*/
 //

 client.on("guildMemberAdd", (member) => {
/*  let canal = client.channels.cache.get('ID-CANAL'); 
  canal.send(`Hola ${member.user}, bienvenido al servidor ${member.guild.name} pasala bien!.`);
 */
});

client.on("guildMemberRemove", (member) => {
  /*let canal = client.channels.cache.get('ID-CANAL'); 
  canal.send(`${member.user}, a dejado el servidor.`);
 */
});


 
client.login(config.BOT_TOKEN);
