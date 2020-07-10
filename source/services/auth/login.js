const { config } = require("../../config")
const ErrorCodes = require("../../core/error-codes")

module.exports = async function (payload) {
  try {
    // ... здесь логика поиска пользователя по имейлу, валидация пароля и генерация токена ...
    return { status: 200, success: true, content: "token" }
  } catch (error) {
    if (!config.production) {
      console.log("[AuthService](login):", error.message)
    }

    return { status: 400, success: false, error: ErrorCodes.UnexpectedError }
  }
}
