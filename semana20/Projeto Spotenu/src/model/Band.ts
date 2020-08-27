export class Band {
    constructor(
        private id: string, 
        private name: string,
        private nickname: string, 
        private email: string,
        private description: string,
        private password: string,
        private isApproved: boolean,
        private role: string 
    ){}

    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
      }
    public getNickname(): string {
      return this.nickname
    }
      public getEmail(): string {
        return this.email;
      }
      public getdescription(): string {
        return this.description;
      }
    
      public getPassword(): string {
        return this.password;
      }    

      public getApproved(){
        return this.isApproved; 
    }
    public getRole(){
      return this.role; 
  }
}

