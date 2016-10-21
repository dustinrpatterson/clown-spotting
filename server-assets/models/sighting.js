let Clown = require('./clown')

function Sighting(sighting){
  this.clownId = sighting.clownId
  this.location = sighting.location
  this.time = Date.now()
}


function addSighting(sighting, cb){ 
  Clown.getClown(sighting.clownId, function(err, clown){
    if(!clown || err){
      return cb({error: err, message: 'Sorry that didn\'t work'})
    }

    let newSighting = new Sighting(sighting)

    db.insert(newSighting, function(err, savedSighting){
      if(err){return cb(err)}
      clown.sightings.push(savedSighting._id)
      Clown.editClown(clown._id, clown, function(err){
        if(err){ cb(err) }
        cb(null, {message:'You\'re lucky to be alive with having seen ' + clown.name+ ' the clown!'})
      })
    })
  })
}







