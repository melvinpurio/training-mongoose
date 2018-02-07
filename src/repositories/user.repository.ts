import { model, Model, Types } from 'mongoose';

import { User, UserDocument, UserSchema } from '../schemas/user.schema';

export class UserRepository {

  public userModel =  model<UserDocument>('User', UserSchema);

  public async getUsers(options: object): Promise<User[]> {
    try {
      const users = await this.userModel.find(options).exec();
      return users;
    } catch (error) {
      throw new Error(`Can't get users with options of ${options}`);
    }
  }

  public async getUserById(id: string): Promise<User | null> {
    if (!Types.ObjectId.isValid(id)) {
      return null;
    }
    try {
      const user = await this.userModel.findById(id).exec();
      return user;
    } catch (error) {
      throw new Error(`Can't get user with id of ${id}`);
    }
  }

  public async createUser(data: User): Promise<User> {
    try {
      const user = await this.userModel.create(data);
      return user;
    } catch (error) {
      throw new Error(`Can't create user`);
    }
  }
}
