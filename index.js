const express = require('express');
const bodyParser = require('body-parser');

const headlessVisit = require('./helpers/headless-visit');
const {CARBON_URL, IMAGES_URL} = require('./helpers/globals');

const app = express();
var port = process.env.PORT || 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json())

// Static assets
app.use(express.static('public'));
app.use('/public', express.static(__dirname + '/public'));

app.post('/api', function (req, res) {
    // TODO: validate pareters
    const lang = req.body.lang || 'auto'; // optional, default = auto
    const code = req.body.code;

    // Fetch image
    const url = CARBON_URL + '?code=' + code + '&l=' + lang;
    console.log("URL", url);
    headlessVisit({
        url,
        IMAGES_URL
    });

    res.status(201).send({
        image_url: IMAGES_URL + 'carbon.png'
    });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));