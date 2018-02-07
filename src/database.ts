
import { connect, connection } from 'mongoose';

import { UserRepository } from './repositories/user.repository';

export class Database {

  public async connect() {
    if (connection.readyState === 0) {
      await connect('mongodb://localhost:27017/mongoose-boilerplate');
    }
  }

  public async disconnect() {
    if (connection.readyState === 1) {
      await connection.close();
    }
  }

  public async reset() {
    if (connection.readyState === 1) {
      await connection.dropDatabase();
    }
  }
}
