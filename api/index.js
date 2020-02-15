export default async (req, res) => {
    const { body } = req

    // TODO: validate pareters
    const lang = body.lang || 'auto'; // optional, default = auto
    const code = body.code;

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
}