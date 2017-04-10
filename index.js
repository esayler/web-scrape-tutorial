const Nightmare = require('nightmare');
const $ = require('jquery');
const nightmare = Nightmare({  show: true });

const today = new Date().toISOString().slice(0, 10);

nightmare
  .goto(`https://www.nhl.com/schedule/${today}/`)
  .wait(5000)
  .evaluate(() => {
    const parent = document.querySelector('.day-table tbody')
    const rows = parent.children
    var list = [].slice.call(rows)
    return list.map(row => {
      return row
    })
  })
  .end()
  .then(games => console.log(games))
  .catch(err => console.error(err))
