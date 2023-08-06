const {Router} = require("express")
const routes = Router()
const {Loginc} = require("../controller/login")

const {isAuth} = require("../middlewares/isAuth/isAuth-middleware")
const {addcompany, getCompanies, getCompaniesById, getNotef, getNotefcount} = require("../controller/companies")


routes
.post("/auth/login", Loginc)
.post("/add/company", addcompany)
.get("/get/companies",isAuth, getCompanies)
.get("/get/by/:id",isAuth, getCompaniesById)
.get("/get/notefs", isAuth, getNotef)
.get("/get/notef/count",isAuth, getNotefcount)

module.exports = {routes}