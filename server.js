var http = require('http')
var dispatcher = require('httpdispatcher')
var request = require('request')
var movesApi = require('moves-api').MovesApi
var moves = new movesApi()

var server = http.createServer(handleRequest)
var port = 1243

var config = require('./config')

moves.options.accessToken = config.accessToken
crawlUserdata()

server.listen(port, function(){
  console.log("Server listening on: http://localhost:%s", port)
})

function handleRequest(request, response){
  try {
    console.log(request.url)
    dispatcher.dispatch(request, response)
  } catch(err) {
    console.log(err)
  }
}

dispatcher.onPost('/api/rest', function(req,res){
  res.writeHead(200, {'Content-Type': 'application/json'})
  res.write(JSON.stringify(req.params))
  res.end()
})

function crawlUserdata(){
    var dateObj = new Date()
    var month = (dateObj.getUTCMonth() + 1).toString() //months from 1-12
    month=("0"+month).slice(-2)
    var day = (dateObj.getUTCDate()).toString()
    day = ("0"+day).slice(-2)
    var year = (dateObj.getUTCFullYear()).toString()
    var time = ''
    console.log(month,day,year)
    time = year+month+day

   moves.getStoryline(time, function(err,data){
    console.log(JSON.stringify(data))
   })
}


