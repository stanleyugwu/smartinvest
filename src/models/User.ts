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

  // createdAt can be undefined during creation
  declare createdAt: CreationOptional<Date>;
  // updatedAt can be undefined during creation
  declare updatedAt: CreationOptional<Date>;

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
      tradingPercentage: this.tradingPercentage,
    };
  }
}

export const userSchema: Sequelize.ModelAttributes<
  User,
  Sequelize.Optional<
    Sequelize.InferAttributes<
      User,
      {
        omit: never;
      }
    >,
    never
  >
> = {
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
        msg: "Provide a valid email address",
      },
    },
  },
  phone: {
    type: DataTypes.STRING,
    validate: {
      is:{
        args:/^\d{11,14}$/im,
        msg:"Provide a valid phone number"
      }
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
        msg: "Provide valid country name",
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
    allowNull: false,
    validate: {
      isNumeric: {
        msg: "Balance value must be a number",
      },
    },
  },
  credit: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    validate: {
      isNumeric: {
        msg: "Credit value must be a number",
      },
    },
  },
  deposit: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    validate: {
      isNumeric: {
        msg: "Deposit value must be a number",
      },
    },
  },
  profit: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    validate: {
      isNumeric: {
        msg: "Profit value must be a number",
      },
    },
  },
  withdrawal: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    validate: {
      isNumeric: {
        msg: "Withdrawal value must be a number",
      },
    },
  },
  tradingPercentage: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    validate: {
      isNumeric: {
        msg: "Trading Percentage value must be a number",
      },
    },
  },
  accountManager: {
    type: DataTypes.STRING(50),
    allowNull: false,
    validate: {
      isAlpha: {
        msg: "Account Manager must be a text",
      },
    },
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
  scopes: {
    withPasswordScope: {},
  },
});

// User
//   .sync({ force: true })
//   .then((v) => console.log("users created"))
//   .catch(err => console.log(err.message))

export default User;
