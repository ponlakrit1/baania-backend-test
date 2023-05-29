import "reflect-metadata"
import { DataSource } from "typeorm"
import { House } from "./entity/house"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "fortest",
    database: "baania",
    synchronize: true,
    logging: false,
    entities: [House],
    migrations: [],
    subscribers: [],
})
