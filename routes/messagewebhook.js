const fbmessagehandler=require('../handlers/fbmessagehandlers')

module.exports=(request,response)=>{
    var body=request.body
    if(body.object=="page"){
        body.entry.forEach(function(entry){
            if(entry.messaging!=null){
                fbmessagehandler(entry.messaging[0])
            }
        })
        response.status(200).end()
    }
}