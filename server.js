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


router.route('/players/add').post((req, res) => {
    let issue = new Issue(req.body);
    issue.save()
        .then(issue => {
            res.status(200).json({'issue': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});

router.route('/players').get((req, res) => {
    Issue.find((err, issues) => {
        if (err)
            console.log(err);
        else
            res.json(issues);
    });
});

router.route('/players/:id').get((req, res) => {
    Issue.findById(req.params.id, (err, issue) => {
        if (err)
            console.log(err);
        else
            res.json(issue);
    })
});

router.route('/players/update/:id').post((req, res) => {
    Issue.findById(req.params.id, (err, issue) => {
        if (!issue)
            return next(new Error('Could not load Document'));
        else {
            issue.id = req.body.id;
            issue.firstName = req.body.firstName;
            issue.lastName = req.body.lastName;
            issue.aka = req.body.aka;
            issue.score = req.body.score;

            issue.save().then(issue => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});

router.route('/players/delete/:id').get((req, res) => {
    Issue.findByIdAndRemove({_id: req.params.id}, (err, issue) => {
        if (err)
            res.json(err);
        else
            res.json('Removed successfully');
    });
});


app.get('/', function(req,res) {
  res.sendFile(path.join(__dirname,'/dist/showoff/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
