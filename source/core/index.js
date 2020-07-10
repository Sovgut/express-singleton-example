module.exports.createApplication = function createApplication(server) {
  return {
    useMiddleware(middleware) {
      server.use(middleware)
      return this
    },
    useRouter(path, route) {
      server.use(path, route)
      return this
    },
    start(port, text) {
      server.listen(port, () => console.log(text))
    },
  }
}
