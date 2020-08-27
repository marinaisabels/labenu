import { BaseDatabase } from "./BaseDatabase";
import { User } from "../model/User";

export class UserDatabase extends BaseDatabase {
  protected static TABLE_NAME = "SpotUser";

  private toModel(dbModel?: any): User | undefined {
    return (
      dbModel &&
      new User(
        dbModel.id,
        dbModel.name,
        dbModel.nickname,
        dbModel.email,
        dbModel.password,
        dbModel.role
      )
    );
  }

  public async createUser(user: User): Promise<void> {
    const userData = this.toModel(user)
    await this.connection()
      .insert({
        id: userData?.getId(),
        name: userData?.getName(),
        nickname: userData?.getNickname(),
        email: userData?.getEmail(),
        password: userData?.getPassword(),
        role: userData?.getRole()
      })
      .into(UserDatabase.TABLE_NAME)
  }

  public async getUserByEmailOrNickname(email: string, nickname: string): Promise<User | undefined> {
    const result = await this.connection()
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ email })
      .orWhere({ nickname })

    return this.toModel(result[0])
  }
}