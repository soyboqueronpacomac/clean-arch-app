export class CustomReponse<T = any>{
    public readonly statusCode: number;
    public readonly message: string;
    public readonly data?: T;

    constructor(
        statusCode: number,
        message: string,
        data?: T
    ){
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
    }
    static ok<T>(data?: T, message:string = "Success") {
        return new CustomReponse<T>(200,message, data);
    }
    static created<T>(data?: T, message:string = "Resource created successfully") {
        return new CustomReponse<T>(201,message, data);
    }
    static noContent<T>(data?: T, message:string = "No Content") {
        return new CustomReponse<T>(204,message, data);
    }
}