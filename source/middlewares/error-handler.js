module.exports = function (request, response, next) {
  return response.status(404).json({ success: false, error: "NotFound" })
}
