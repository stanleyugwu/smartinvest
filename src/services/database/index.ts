import dotenv from 'dotenv'
import {Sequelize} from 'sequelize'

dotenv.config({
  path: process.env.NODE_ENV === 'test'
    ? '.env.test'
    : (process.env.NODE_ENV === 'development' ? '.env.dev' : '.env')
})

let connection:Sequelize;
const {
  DB_SERVER, DB_NAME, DB_USER, DB_PASSWORD
} = process.env

const dialectOptions = {
  typeCast: function (field:any, next:any) {
    if (field.type === 'DATETIME' || field.type === 'TIMESTAMP') {
      return new Date(field.string() + 'Z')
    }

    return next()
  }
}

try {
  connection = new Sequelize(DB_NAME!, DB_USER!, DB_PASSWORD!, {
    host: DB_SERVER,
    dialect: 'mysql',
    dialectOptions,
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    timezone: '-03:00'
  })
} catch (err:any) {
  console.log(`@Exception on DB connection: ${err.message}`)
  process.exit();
}

export default connection
