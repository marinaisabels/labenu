import { BaseDatabase } from "./BaseDatabase";
import { Band } from "../model/Band";

export class BandDatabase extends BaseDatabase {
  protected static TABLE_NAME = "SpotBand";

  private toModel(dbModel?: any): Band | undefined {
    return (
      dbModel &&
      new Band(
        dbModel.id,
        dbModel.name,
        dbModel.nickname,
        dbModel.description,
        dbModel.email,
        dbModel.password,
        dbModel.isApproved,
        dbModel.role
      )
    );
  }
  public async createBand(band: Band): Promise<void> {
    const bandData = this.toModel(band)
    await this.connection()
      .insert({
        id: bandData?.getId(),
        name: bandData?.getName(),
        nickname: bandData?.getNickname(),
        description: bandData?.getdescription(),
        email: bandData?.getEmail(),
        password: bandData?.getPassword(),
        isApproved: bandData?.getApproved(),
        role: bandData?.getRole()
      })
      .into(BandDatabase.TABLE_NAME)
  }
  public async getApprovedBands(role: string): Promise<Band[]> {
    const result = await this.connection().raw(`
      SELECT *
      FROM ${BandDatabase.TABLE_NAME}
      WHERE role = "${role}"`);
    return result[0]
  }
  public async getApproves(id: string): Promise<void> {
    const result = await this.connection().raw(`
    UPDATE S${BandDatabase.TABLE_NAME}
    SET isApproved = 1
    Where id = "${id}"
    `)
    return result
  }
}