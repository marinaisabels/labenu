import { IdGenerator } from '../services/IdGenerator'
import { HashManager } from '../services/HashManager'
import { BandDatabase } from '../data/BandDatabase'
import { Band } from '../model/Band'
import { Authenticator } from '../services/Authenticator'

export class BandBusiness {

    public async bandSignup(name: string, nickname: string, description: string, email: string, password: string, isApproved: boolean, role: string) {
        const idGenerator = new IdGenerator()
        const id = idGenerator.generatorId()

        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(password)

        const band = new Band(id, name, nickname, description, email, hashPassword, isApproved, role)

        const bandDatabase = new BandDatabase()
        await bandDatabase.createBand(band)

        return { id: id }
    }
    public async getApprovedBands(token: string){

        const authenticator = new Authenticator()
        const bandData = authenticator.verify(token)

        if(bandData.role !== "ADMIN" || "admin"){
            throw new Error("Acesso negado!")
        }  

        const bandDatabase = new BandDatabase()
        const band = await bandDatabase.getApprovedBands(token)

        return band.map(band => {
            const isApproved = band.getApproved() === true ? true:  false 
            return {
                name: band.getName(),
                email: band.getEmail(),
                nickname: band.getNickname(),
                isApproved: isApproved
            }
        })
    }
    async approvesBand(id: string, token:string ) {
        const authenticator = new Authenticator()
        const bandData = authenticator.verify(token)

        const bandDatabase = new BandDatabase()
        const band = await bandDatabase.getApprovedBands(token)
    }
}