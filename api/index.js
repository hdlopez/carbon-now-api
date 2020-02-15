export default async (req, res) => {
    const { body } = req
    res.end(`Hello ${body.name}, you just parsed the request body!`)
}