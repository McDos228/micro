module.exports = {
    port: process.env.PORT || 3000,
    secret : 'cool-delivery-secret-key',
    env: process.env.NODE_ENV || 'development',
    database: {
        username: process.env.DB_USERNAME || "postgres",
        password: process.env.DB_PASSWORD || "postgres",
        database: process.env.DB_NAME || "delivery",
        host: process.env.DB_HOST || "localhost",
        port: process.env.DB_PORT || 5432,
        dialect: process.env.DB_DIALECT || "postgres"
    }
}