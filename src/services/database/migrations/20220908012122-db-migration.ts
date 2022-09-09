"use strict";

import { QueryInterface, Sequelize } from "sequelize/types";
import { adminSchema } from "../../../models/Admin";
import { userSchema } from "../../../models/User";

const migrationObject = {
  up(queryInterface:QueryInterface, Sequelize:Sequelize) {
    return Promise.allSettled([
      queryInterface.createTable("admins", adminSchema),
      queryInterface.createTable("users", userSchema),
    ])
  },

  down(queryInterface:QueryInterface, Sequelize:Sequelize) {
    return Promise.allSettled([
      queryInterface.dropTable("admins"),
      queryInterface.dropTable("users"),
    ])
  },
};

export default migrationObject;
