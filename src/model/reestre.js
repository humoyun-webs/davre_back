const {fetch, fetchOne} = require("../utils/pg")

const addreestre = 'insert into reestre(gover_name,full_name, r_location, stir, oked, mfo,accaunt)values($1,$2,$3,$4,$5,$6,$7)';
const getreestre = 'select * from reestre'
const getreestrebyid = 'select * from reestre where reestre_id = $1'
const updatereesters = 'UPDATE reestre SET r_type = $1 WHERE reestre_id = $2';
const updatereestre = 'update reestre set notef = true where reestre_id = $1'



const reestreadd = (gover_name,full_name, location, stir, oked, mfo, accaunt) => fetchOne(addreestre,gover_name,full_name,location,stir,oked,mfo,accaunt)
const reestreget = () =>fetch(getreestre)
const reestregetbyid = (id) =>fetch(getreestrebyid, id)
const reestreupdate = (type,id) =>fetchOne(updatereesters,type,id);
const reestreupdatenotef = (id) =>fetchOne(updatereestre, id)


module.exports = {
    reestreadd,
    reestreget,
    reestregetbyid,
    reestreupdate,
    reestreupdatenotef
}

// reestre_id
// full_name
// r_location
// stir
// oked
// mfo
// accaunt
// r_type
// created_at
// updated_at