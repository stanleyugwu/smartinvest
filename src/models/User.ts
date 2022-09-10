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

export type Currency = "$" | "€" | "£";

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id: CreationOptional<number>;
  declare fullname: string;
  declare email: string;
  declare phone: CreationOptional<string>;
  declare currency: Currency;
  declare country: string;
  declare password: string;
  declare approved: CreationOptional<boolean>;
  // Account info
  declare deposit: CreationOptional<number>;
  declare balance: CreationOptional<number>;
  declare profit: CreationOptional<number>;
  declare credit: CreationOptional<number>;
  declare withdrawal: CreationOptional<number>;
  declare accountManager: CreationOptional<string>;
  declare tradingPercentage: CreationOptional<number>;

  // // createdAt can be undefined during creation
  // declare createdAt: Date;
  // // updatedAt can be undefined during creation
  // declare updatedAt: Date;

  generateToken() {
    return jwt.sign({ id: this.id }, process.env.JWT_SECRET!);
  }

  verifyPassword(password: string) {
    return bcrypt.compareSync(password, this.password);
  }

  getProfileInfo() {
    return {
      id: this.id,
      fullname: this.fullname,
      email: this.email,
      phone: this.phone,
      currency: this.currency,
      country: this.country,
    };
  }

  getAccountInfo() {
    return {
      balance: this.balance,
      credit: this.credit,
      deposit: this.deposit,
      withdrawal: this.withdrawal,
      accountManager: this.accountManager,
      profit: this.profit,
      tradinPercentage: this.tradingPercentage,
    };
  }
}

export const userSchema = {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
  fullname: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: {
        msg: "Provide a valid email address"
      },
    },
  },
  phone: {
    type: DataTypes.STRING(11),
    validate: {
      isNumeric: {
        msg: "Provide a valid phone number"
      },
    },
  },
  currency: {
    type: DataTypes.STRING(1),
    validate: {
      isIn: {
        args: [["$", "€", "£"]],
        msg: "Invalid currency symbol",
      },
    },
  },
  country: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: {
      isAlpha: {
        msg: "Provide valid country name"
      },
    },
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false,
    set(value: string) {
      // @ts-ignore
      (this as User).setDataValue("password", bcrypt.hashSync(value, 8));
    },
  },
  approved: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  balance: {
    type: DataTypes.INTEGER.UNSIGNED,
    defaultValue: 0,
    allowNull: false,
  },
  credit: {
    type: DataTypes.INTEGER.UNSIGNED,
    defaultValue: 0,
    allowNull: false,
  },
  deposit: {
    type: DataTypes.INTEGER.UNSIGNED,
    defaultValue: 0,
    allowNull: false,
  },
  profit: {
    type: DataTypes.INTEGER.UNSIGNED,
    defaultValue: 0,
    allowNull: false,
  },
  withdrawal: {
    type: DataTypes.INTEGER.UNSIGNED,
    defaultValue: 0,
    allowNull: false,
  },
  tradingPercentage: {
    type: DataTypes.INTEGER.UNSIGNED,
    defaultValue: 10,
    allowNull: false,
  },
  accountManager: {
    type: DataTypes.STRING(50),
    defaultValue: "",
    allowNull: false,
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
};

User.init(userSchema, {
  sequelize: db,
  tableName: "users",
  timestamps: true,
  defaultScope: {
    attributes: { exclude: ["password"] },
  },
  scopes:{
    withPasswordScope:{
      
    }
  }
});

// User
//   .sync({ force: true })
//   .then((v) => console.log("users created"))
//   .catch(err => console.log(err.message))

export default User;
