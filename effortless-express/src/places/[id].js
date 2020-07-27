const get = (req, res, next, id) => {
    res.json({ YourPlaceID: id }) }
const post = (req, res, next, id) => {
    res.json({  YourPlaceID: id }) }

module.exports = { get, post }