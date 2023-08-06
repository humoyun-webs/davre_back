const {fetch,fetchOne} = require("../utils/pg")

const addcompanies = 'insert into companies(company_tin,company_mfo, company_account, company_bank, company_type, company_director, company_adress,  company_phone)values($1,$2,$3,$4,$5,$6,$7,$8)';
const getcompanies = 'select * from companies'
const getcompaniesbyid = 'select * from companies where company_id = $1'
const updatecompanies = 'update companies set notef = true where company_id = $1'
const getnotef = 'select * from companies where notef = false'
const getnotecountcompanies = 'SELECT count(*) FROM companies WHERE notef = false'


const companiesadd = (tin, mfo, accaunt, bank, type, director, adress, phone) =>fetchOne(addcompanies, tin, mfo, accaunt, bank, type, director, adress, phone)
const companiesget = () =>fetch(getcompanies)
const companiesbyid = (id) =>fetch(getcompaniesbyid, id)
const companiesupdate = (id) => fetchOne(updatecompanies, id)
const companiesgetnotef = () => fetch(getnotef)
const companiesgetnotefcount = () => fetch(getnotef)

module.exports = {companiesadd, companiesget, companiesbyid , companiesupdate, companiesgetnotef}