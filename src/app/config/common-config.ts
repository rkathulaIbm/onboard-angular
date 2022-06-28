

export class CommonConfig{

    apiUrl: Record<any, string>={
        authenticate: "authenticate"
    }
    
    getApiUrl=(transactionCode: string)=>{
        return this.apiUrl[transactionCode];
    }

}