var mongo = require('mongojs')

var dbUrl = 'mongodb://localhost/mobiledev'
var collections = ['users']
var db = require('mongojs')(dbUrl, collections)

module.exports = db
