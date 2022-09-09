import Sequelize, { DataTypes } from "sequelize";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "../services/database";
import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";

class Admin extends Model<
  InferAttributes<Admin>,
  InferCreationAttributes<Admin>
> {
  declare id: CreationOptional<number>;
  declare email: string;
  declare password: string;

  generateToken() {
    return jwt.sign({ id: this.id }, process.env.JWT_SECRET!);
  }

  verifyPassword(password: string) {
    return bcrypt.compareSync(password, this.password);
  }
}

export const adminSchema = {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    unique:true
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false,
    set(value: string,) {
      // @ts-ignore
      (this as Admin).setDataValue("password", bcrypt.hashSync(value, 8));
    },
  },
  
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.fn("NOW")
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.fn("NOW")
  }
};

Admin.init(adminSchema, {
  sequelize: db,
  tableName: "admins",
  timestamps:true,
  defaultScope: {
    attributes: { exclude: ["password"] },
  },
  scopes:{
    withPasswordScope:{
      
    }
  }
});

// Admin
//   .sync({ force: true })
//   .then((v) => console.log("admins created"))
//   .catch(err => console.log(err.message))

export default Admin;
