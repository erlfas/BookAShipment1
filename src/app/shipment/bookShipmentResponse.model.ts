
export class BookShipmentResponse {
    
    constructor(
        public status: string,
        public statusCode: number,
        public transactionId: string,
        public goToUrl: string
    ) { }
    
}