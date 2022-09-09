"use strict";
import bcrypt from "bcrypt";
import { QueryInterface, Sequelize } from "sequelize/types";

const seederObject = {
  up(queryInterface: QueryInterface, Sequelize: Sequelize) {
    return queryInterface.bulkInsert("admins", [
      {
        email: process.env.ADMIN_SEED_EMAIL!,
        password: bcrypt.hashSync(process.env.ADMIN_SEED_PASSWORD!, 8),
      },
    ]);
  },

  down(queryInterface: QueryInterface, Sequelize: Sequelize) {
    return queryInterface.bulkDelete("admins", {
      attribute: { email: process.env.ADMIN_SEED_EMAIL! },
    });
  },
};

export default seederObject;
