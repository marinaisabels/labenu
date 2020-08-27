import { BaseDataBase } from "./BaseDataBase"

export class RefreshTokenDataBase extends BaseDataBase {
    private static TABLE_NAME: string = "RefreshToken";
    
    public async createRefreshToken(
        token: string, 
        device: string, 
        isActive: boolean,
        userId: string): Promise<void> { 
            this.connection().raw(`
            INSERT INTO  ${RefreshTokenDataBase.TABLE_NAME}(
                token, device, is_ative, user_id)
                VALUES(
                    "${token}", 
                    "${device}",
                    0,
                    "${userId}"
                )
            )
            `)
        }
    )
}