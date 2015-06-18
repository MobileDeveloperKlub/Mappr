var mongo = require('mongojs')

var dbUrl = 'mongodb://localhost/mobiledev'
var collections = ['places']
var db = require('mongojs')(dbUrl, collections)

module.exports = db
