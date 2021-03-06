//Install express server
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

mongoose.Promise = global.Promise;

var url = process.env.DATABASEURL || "mongodb://localhost/showoff";
  mongoose.connect(url, {useNewUrlParser: true});
const connection = mongoose.connection;
  connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
  });

// Serve only the static files form the dist directory
app.use(express.static('./dist/showoff'));


app.route('/players/add').post((req, res) => {
    let Player = new Player(req.body);
    player.save()
        .then(player => {
            res.status(200).json({'player': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});

app.route('/players').get((req, res) => {
    Player.find((err, players) => {
        if (err)
            console.log(err);
        else
            res.json(players);
    });
});

app.route('/players/:id').get((req, res) => {
    Player.findById(req.params.id, (err, player) => {
        if (err)
            console.log(err);
        else
            res.json(player);
    })
});

app.route('/players/update/:id').post((req, res) => {
    Player.findById(req.params.id, (err, player) => {
        if (!player)
            return next(new Error('Could not load Document'));
        else {
            player.id = req.body.id;
            player.firstName = req.body.firstName;
            player.lastName = req.body.lastName;
            player.aka = req.body.aka;
            player.score = req.body.score;

            player.save().then(player => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});

app.route('/players/delete/:id').get((req, res) => {
    Player.findByIdAndRemove({_id: req.params.id}, (err, player) => {
        if (err)
            res.json(err);
        else
            res.json('Removed successfully');
    });
});

app.get('/test', function(req,res) {
  res.json('It works!');
  console.log("It Works!");
});

app.get('/control', function(req,res) {
  res.sendFile(path.join(__dirname,'/dist/showoff/index.html'));
});

app.get('/display', function(req,res) {
  res.sendFile(path.join(__dirname,'/dist/showoff/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
