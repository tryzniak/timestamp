// server.js
// where your node app starts

// init project
const express = require('express')
const app = express()
const { format, getTime, parse, isDate, isValid } = require('date-fns')


// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))


app.get("/:date", (request, response) => {
  response.json(parseTime(request.params.date))
})


// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})

function parseTime(date) {
  const maybeDate = parse(+date * 1000 || date)
  let unix = null
  let natural = null
  
  if (isDate(maybeDate) && isValid(maybeDate)) {
    unix = getTime(maybeDate)
    natural = format(maybeDate, "MMMM DD, YYYY")
  }
  
  return {
    unix,
    natural
  }
}