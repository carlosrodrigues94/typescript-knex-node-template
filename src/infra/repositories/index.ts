import { knex } from "knex";
import { config } from "../../config/knex.config";

const Knex = knex(config);

export { Knex };
