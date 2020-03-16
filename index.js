const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')

const headlessVisit = require('./helpers/headless-visit');
const {CARBON_URL, IMAGES_URL, PUBLIC_PATH} = require('./helpers/globals');

const app = express();
const port = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(cors());
// Static assets
app.use('/public', express.static(PUBLIC_PATH));

app.post('/api', async (req, res) => {
    // TODO: validate pareters
    const lang = req.body.lang || 'auto'; // optional, default = auto
    const code = req.body.code;

    // Fetch image
    const url = CARBON_URL + '?code=' + code + '&l=' + lang;
    console.log("URL", url);
    
    const filename = await headlessVisit({
        url: url,
        location: PUBLIC_PATH
    });

    res.status(201).json({
        image_url: IMAGES_URL + filename
    });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));