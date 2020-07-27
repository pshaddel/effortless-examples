const get = (req, res, next, id) => {
    res.json({ YourUserID: id }) }

const post = (req, res, next, id) => {
    res.json({ YourUserID: id }) }

module.exports = { get, post }