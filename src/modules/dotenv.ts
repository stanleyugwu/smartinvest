import * as dotenv from 'dotenv'

export default function EnvironmentVariables () {

  function init () {
    dotenv.config({
      path: process.env.NODE_ENV === 'development'
        ? '.env.dev'
        : '.env'
    })
  }

  return {
    init
  }
}
