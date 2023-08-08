const {Router} = require("express")
const routes = Router()
const {Loginc} = require("../controller/login")

const {isAuth} = require("../middlewares/isAuth/isAuth-middleware")
const {addcompany, getCompanies, getCompaniesById, getNotef, getNotefcount} = require("../controller/companies")
const {addreestre,getReesters,getReestersById,editreestre} = require("../controller/reestre")


routes
.post("/auth/login", Loginc)
.post("/add/company", addcompany)
.get("/get/companies",isAuth, getCompanies)
.get("/get/by/:id",isAuth, getCompaniesById)
.get("/get/notefs", isAuth, getNotef)
.get("/get/notef/count",isAuth, getNotefcount)
.post("/add/reestre",addreestre)
.get("/get/reesters",isAuth,getReesters)
.get("/get/reesters/:id",isAuth,getReestersById)
.put("/update/reestre/:id",isAuth, editreestre)

module.exports = {routes}