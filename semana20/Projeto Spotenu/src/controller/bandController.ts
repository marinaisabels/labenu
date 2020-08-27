import { Request, Response } from "express";
import { BandBusiness } from '../business/BandBusiness'



export class BandController {

    async signup(req: Request, res: Response) {
        try {
            const bandBusiness = new BandBusiness()
            const {
                name,
                nickname,
                email,
                description,
                password,
                isApproved,
                role
            } = req.body

            if (
                !email || email === "" ||
                !name || name === "" ||
                !nickname || nickname === "" ||
                !password || password === ""
            ) {
                throw new Error("Parâmetros Inválidos")
            }
            if (password.length < 6) {
                throw new Error("A senha deverá ter no mínimo 6 caracteres")
            }

            if (email.indexOf("@") === -1) {
                throw new Error("Email inválido")
            }
            res.status(200).send({
                message: "Aguarde para ser aprovado"
            })

        } catch (err) {
            res.status(400).send({
                error: err.message
            })
        }
    }
    async getApprovedBand(req: Request, res: Response) {
        const token = req.headers.authorization as string;
        try {
            const bandBusiness = new BandBusiness()
            const band = await bandBusiness.getApprovedBands(token)

            res.status(200).send({
                band
            })
        } catch (err) {
            res.status(400).send({
                error: err.message
            })
        }
    }
    async approvesBand(req: Request, res: Response) {
        const token = req.headers.authorization as string;
        const { id } = req.body
        try {
            const bandBusiness = new BandBusiness()
            const band = await bandBusiness.approvesBand(id, token)

            res.status(200).send({
                band
            })
        } catch (err) {
            res.status(400).send({
                error: err.message
            })
        }
    }
} 
