module.exports = {
    "/api/**": {
      "target": process.env.API_URL ?? "http://localhost:8080/api",
      "secure": true,
      "pathRewrite": { "^/api": "" },
      "changeOrigin": true
    }
}
  