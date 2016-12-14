let stats1 = {
  id: 5,
  website: 'am.ru',
  visitors: {
    total: 545,
    new: 113,
  },
  from: 'Russia',
  bounceRate: 2,
  createdAt: 'Sun Dec 11 2016 22:28:12 GMT-0800 (PST)'
}

let stats2 = {
  id: 6,
  website: 'bm.ru',
  visitors: {
    total: 1134,
    new: 234,
  },
  from: 'Cananda',
  bounceRate: 3,
  createdAt: 'Sun Dec 11 2016 22:28:12 GMT-0800 (PST)'
}


// Website: <name>
// Out of <total visitors> visitors <visitors new> are new

function report(stats) {
  console.log(`Website: <${stats.website}>`);
  console.log(`Out of <${stats.visitors.total}> visitor <${stats.visitors.new}> are new`);
}

report(stats2)


function reportJson(stats) {
  const newStats = {
    app: stats.website,
    totalVisitors: stats.visitors.total,
    uniqueVisitors: stats.visitors.new
  }
  return newStats
}

const json = reportJson(stats2)
console.log(json);
console.log(json.app);
