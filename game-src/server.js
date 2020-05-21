//Express
const express = require('express');
const app = express();

//Necessary includes
const routeConf = require('./src/config/RouteConf');
const dbConf = require('./src/config/DBConf');
const errorHandler = require('./src/middleware/errorHandler');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const socket = require('socket.io');

// Set env variables
require('dotenv').config();

// Middleware to parse json body and url
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Set cookie parser
app.use(cookieParser());



// Enable CORS Policy
app.use(cors());

// Start the express server and set the port
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Express: Listening on port ${port}`);
});

//START SOCKET BACKEND
const server = app.listen(5000, () => {
    console.log(`Socket.io: Listening on port 5000`);
});
const io = socket(server);

io.on('connection', (socket) => {
console.log('SOCKET IS CONNECTED');
// here you can start emitting events to the client

socket.on('CREATE_GAME', (game) => {
    console.log('GAME RECEIVED', game);
game.id = 1 //Math.floor(Math.random() * 100000000);
console.log("server",game);
io.emit('RECEIVE_GAME', game);
});
socket.on('JOIN_GAME', (game) => {

// game.id = Math.floor(Math.random() * 100000000);
io.emit('START_GAME', game);
})  

socket.on('TURN_STARTED', (game) => {
    socket.broadcast.emit('NEW_TURN', game);

})

//END SOCKET BACKEND
/* 


███████ ████████  █████  ██████  ████████      ██████   █████  ███    ███ ███████     ███████  ██████   ██████ ██   ██  ██████ ███████ ████████ ███████ 
██         ██    ██   ██ ██   ██    ██        ██       ██   ██ ████  ████ ██          ██      ██    ██ ██      ██  ██  ██      ██         ██    ██      
███████    ██    ███████ ██████     ██        ██   ███ ███████ ██ ████ ██ █████       ███████ ██    ██ ██      █████   ██      █████      ██    ███████ 
     ██    ██    ██   ██ ██   ██    ██        ██    ██ ██   ██ ██  ██  ██ ██               ██ ██    ██ ██      ██  ██  ██      ██         ██         ██ 
███████    ██    ██   ██ ██   ██    ██         ██████  ██   ██ ██      ██ ███████     ███████  ██████   ██████ ██   ██  ██████ ███████    ██    ███████ 
                                                                                                                                                        
                                                                                                                                                        

*/
var deck = [1,2,3,5,6,7,8,9,10,11,12,13,14,15,16];
var player = [
    [null],
    [null],
    [null],
    [null]
]
console.log('reset')
var turnNumber = -1;
player[0][0]='/static/media/baron.ce4d41dc.jpg';
player[0][1]=2;
player[1][0]='/static/media/baron.ce4d41dc.jpg';
player[1][1]=4;
player[2][0]='/static/media/baron.ce4d41dc.jpg';
player[2][1]=6;
player[3][0]='/static/media/baron.ce4d41dc.jpg';
player[3][1]=8;


socket.on('INITIALIZE_GAME', (game) => {

turnNumber++;
console.log(turnNumber);
console.log("game initialized",game)
io.emit('GAME_INITIALIZED',player,turnNumber)

});

socket.on('START_TURN', (game) => {
    turnNumber++;
    console.log(turnNumber);

io.emit('NEW_TURN',player,turnNumber);
});

socket.on('BARON_USED',(userId,targetId)=>{
console.log('baronused on',targetId,'from',userId);
socket.broadcast.emit('USED_BARON',userId,targetId);

turnNumber++;
console.log(turnNumber);

io.emit('NEW_TURN',player,turnNumber);

})




});
/*


███████ ███    ██ ██████       ██████   █████  ███    ███ ███████     ███████  ██████   ██████ ██   ██  ██████ ███████ ████████ ███████ 
██      ████   ██ ██   ██     ██       ██   ██ ████  ████ ██          ██      ██    ██ ██      ██  ██  ██      ██         ██    ██      
█████   ██ ██  ██ ██   ██     ██   ███ ███████ ██ ████ ██ █████       ███████ ██    ██ ██      █████   ██      █████      ██    ███████ 
██      ██  ██ ██ ██   ██     ██    ██ ██   ██ ██  ██  ██ ██               ██ ██    ██ ██      ██  ██  ██      ██         ██         ██ 
███████ ██   ████ ██████       ██████  ██   ██ ██      ██ ███████     ███████  ██████   ██████ ██   ██  ██████ ███████    ██    ███████ 
                                                                                                                                        
                                                                                                                                        




*/


// Set all routes
routeConf(express, app);

// Set custom error middleware
app.use(errorHandler);

//Handle unhandled promise errors
process.on('unhandledRejection', err => {
    console.log(`Unhandled Error: ${err}`);
    process.exit(1);
});

//Establish database Connection
dbConf();