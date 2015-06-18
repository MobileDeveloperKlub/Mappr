var db = require('./mongo')


function savePlace(placeObject) {
  db.places.save(placeObject, function(err, saved) {
    if (err) {
      console.error(err)
    }
    return saved
  })
}

function savePlaces(segments) {
  segments.forEach(function(segment) {
    if (segment.type == 'place') {
      savePlace({
        location: segment.place.location
      })
    }
  })
}


module.exports = {
  savePlace: savePlace,
  savePlaces: savePlaces
}
