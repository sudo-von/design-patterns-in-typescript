/* Add a logger
* Inject an HttpClient.
* Log error to our server.
*/
export class ErrorHandler {

    private messageBox:any;
    //private httpClient; BAD

    constructor(messageBox, httpClient){
        this.messageBox = messageBox;
        //this.httpClient = httpClient; BAD
    }

    wrapError(err, publicResponse, severity){
        let error = {
            originalError: err,
            publicResponse,
            severity
        }
        // this.httpClient.post("api/log", error); BAD
        if(severity < 5){
            this.handleWarning("Warning", publicResponse);
        }else{
            this.handleError("Critical error", publicResponse);
        }
    }

    public handleWarning(header, content){
        this.messageBox.show(header, content);
    }
    public handleError(header, content){
        this.messageBox.show(header, content);
    }
}

export class ErrorLoger{
    
    private _endpoint:string = "api/log";

    constructor(private _httpClient){

    }

    logError(errorObject):Promise<any>{
        return this._httpClient.post(this._endpoint, errorObject);
    }

}

export class ErrorHandlerWithLogging extends ErrorHandler{

    private _logger:ErrorLoger;

    constructor(messageBox, httpClient, logger:ErrorLoger){
        super(messageBox, httpClient);
        this._logger = logger;
    }

    wrapError(err, publicResponse, severity){
        return this._logger.logError(err).then(() => {
            super.wrapError(err, publicResponse, severity);
        });
    }
}