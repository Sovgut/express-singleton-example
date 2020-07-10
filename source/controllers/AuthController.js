const { Router } = require("express")
const AuthService = require("../services/auth")
const instance = Router()

async function login(request, response) {
  const payload = request.body
  const { status, ...data } = await AuthService.login(payload)
  return response.status(status).json(data)
}

instance.post("/login", login)

module.exports = {
  path: "/auth",
  instance: instance,
}
