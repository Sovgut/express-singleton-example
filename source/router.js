const { Router } = require("express")
const { config } = require("./config")
const errorHandler = require("./middlewares/error-handler")
const router = Router()

const { existsSync, readdirSync } = require("fs")
const { normalize, join } = require("path")
const controllersDir = normalize(join(__dirname, "controllers"))

if (existsSync(controllersDir)) {
  if (!config.production) {
    console.log("Founded controller directory")
  }

  const controllers = readdirSync(controllersDir)

  for (const controller of controllers) {
    if (controller.includes("Controller")) {
      const [controllerName] = controller.split(".")
      const controllerEntries = require(normalize(
        join(controllersDir, controllerName)
      ))

      router.use(controllerEntries.path, controllerEntries.instance)

      if (!config.production) {
        console.log(
          `Mapped ${controllerName.replace("Controller", "")} controller`
        )
      }
    }
  }
}

router.use("*", errorHandler)

module.exports = router
