export class Client {

    constructor (
        public email: string,
        public lastName: string,
        public firstName: string
    ) { }
};

export interface iClient {
    email: string;
    lastName: string;
    firstName: string;
  }

