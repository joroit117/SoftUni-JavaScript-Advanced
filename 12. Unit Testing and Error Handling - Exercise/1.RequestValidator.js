function solve(requestObject){

    //Method Validation
    if(requestObject.method == undefined){
        throw Error('Invalid request header: Invalid Method');
    }
    switch(requestObject.method){
        case 'GET':
        case 'POST':
        case 'DELETE':
        case 'CONNECT':
            break;
        default:
            throw Error('Invalid request header: Invalid Method');
    }

    //URI Validation
    if(requestObject.uri == undefined){
        throw Error('Invalid request header: Invalid URI');
    }
    let isURIvalid = false;
    let patternURI = RegExp(/([a-z.]*)/);
    let uri = requestObject.uri;
    if(uri.length > 0){
        let matchedURI = uri.match(patternURI)[0];
        if(matchedURI.length === uri.length){
            isURIvalid = true;
        }
    }
    if(!isURIvalid){
        throw Error('Invalid request header: Invalid URI');
    }

    //Version Validation
    if(requestObject.version == undefined){
        throw Error('Invalid request header: Invalid Version');
    }
    switch(requestObject.version){
        case 'HTTP/0.9':
        case 'HTTP/1.0':
        case 'HTTP/1.1':
        case 'HTTP/2.0':
            break;
        default:
            throw Error('Invalid request header: Invalid Version');
    }

    //Message Validation
    if(requestObject.message == undefined){
        throw Error('Invalid request header: Invalid Message');
    }
    let patternMsg = RegExp(/[\<\>\"\'\\\&\;]/);
    let message = requestObject.message;
    if(message.match(patternMsg)){
       throw Error('Invalid request header: Invalid Message');
    }

    return requestObject;
}
solve({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
});