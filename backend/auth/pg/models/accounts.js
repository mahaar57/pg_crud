const { Model } = require("objection");
const Users = require("./users");

class Accounts extends Model {
  static get tableName() {
    return "accounts";
  }
  static get relationMappings() {
    return {
      users: {
        relation: Model.HasOneRelation,
        modelClass: Users,
        join: {
          from: "accounts.id",
          to: "users.account_id",
        },
      },
    };
  }
}

module.exports = Accounts;
