import { registerAs } from "@nestjs/config"

export default registerAs('database', () => ({
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
    username: process.env.DATABASE_USERNAME,
    synchronize: Boolean(process.env.DATABASE_SYNCHRONIZE)
}))