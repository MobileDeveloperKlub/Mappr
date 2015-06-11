var http = require('http')
var dispatcher = require('httpdispatcher')
var request = require('request')
var movesApi = require('moves-api').MovesApi
var moves = new movesApi()

var server = http.createServer(handleRequest)
var port = 1243

moves.options.accessToken = 'TOKEN'
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
    console.log('test')
        moves.getProfile(function(err, profile) {
        console.log(profile)
    })
}


