let db = require('./data-adapter').Sighting;

function Sighting(sighting){
  this.clownId = sighting.clownId
  this.location = sighting.location
  this.time = Date.now()
}

function findClownSightings(clownId, cb){
  db.find({clownId: clownId}, cb)
}

module.exports = {
  findClownSightings,
  createSighting: Sighting
}






