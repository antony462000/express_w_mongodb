class responder {
    constructor(res){
        this.res = res
    }

    success({message,payload}){
        this.res.status(200)
        this.res.json({message,payload})
    }

    fail(message){
        this.res.send(message)
    }
}

module.exports =responder