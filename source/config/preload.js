const { config } = require("dotenv")
const { join, normalize } = require("path")

config({ path: normalize(join(__dirname, "..", "..", ".env")) })
