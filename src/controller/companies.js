const Company = require("../model/companies")
const Joi = require("joi")

const addcompany = async(req, res) =>{
    try{
        const {tin, mfo, accaunt, bank, type, director, adress, phone } = req.body;
                
    const scheme = Joi.object({
     tin: Joi.number().max(9).required(),
     mfo: Joi.string().min(1).max(10).required(),
     accaunt: Joi.string().min(1).max(30).email().required(),
     bank:Joi.string().required(),
     type:Joi.string().valid("1","2").required(),
     director: Joi.string().required(),
     adress: Joi.string().required(),   
     phone:Joi.string().max(9).required(),
  });
  const { error } = scheme.validate({ tin, mfo, accaunt, bank, type, director, adress, phone});
  
  if(error){
    if (error.stack == `ValidationError: "tin" must be less than or equal to 9`) {
       return res.status(403).json({message:"Kompaniya tin bolimi 10 dan kichik son bolishi kerak !"})
    } 
    if(error.stack == `ValidationError: "tin" must be a number`){
      return res.status(403).json({message:"Kompaniya tin bolimi toldirilmagan !"})
    }
    if(error.stack == `ValidationError: "mfo" length must be less than or equal to 10 characters long`){
      return res.status(403).json({message:"Kompaniya mfo bolimida 10 ta harfdan kopayib ketgan !"})
    }
    if(error.stack == `ValidationError: "mfo" is not allowed to be empty`){
      return res.status(403).json({message:"Kompaniya mfo bolimi toldirilmagan !"})
    }
    if(error.stack == `ValidationError: "accaunt" length must be less than or equal to 30 characters long`){
      return res.status(403).json({message:"Kompaniya akkaunt bolimida 30 ta harfdan oshib ketgan !"})
    }
    if(error.stack == `ValidationError: "accaunt" must be a valid email`){
      return res.status(403).json({message:"Kompaniya akkaunt bolimid email notogri shakld kiritilgan !"})
    }
    if(error.stack == `ValidationError: "accaunt" is not allowed to be empty`){
      return res.status(403).json({message:"Kompaniya akkaunt bolimi toldirilmagan !"})
    }
    if(error.stack == `ValidationError: "bank" is not allowed to be empty`){
      return res.status(403).json({message:"Kompaniya bank bolimi toldirilmagan !"})
    }
    if(error.stack == `ValidationError: "type" must be one of [1, 2]`){
      return res.status(403).json({message:"Kompaniya type bolimiga faqat 1 va 2 chi turini tanlash kerak !"})
    }
    if(error.stack == `ValidationError: "type" is not allowed to be empty`){
      return res.status(403).json({message:"Kompaniya type bolimi toldirilmagan !"})
    }
    if(error.stack == `ValidationError: "director" is not allowed to be empty`){
      return res.status(403).json({message:"Kompaniya director bolimi toldirilmagan !"})
    }
    if(error.stack == `ValidationError: "adress" is not allowed to be empty`){
      return res.status(403).json({message:"Kompaniya address bolimi toldirilmagan !"})
    }
    if(error.stack == `ValidationError: "phone" must be a number`){
      return res.status(403).json({message:"Kompaniya telefon raqami bolimi toldirilmagan !"})
    };
    if(error.stack == `ValidationError: "phone" must be greater than or equal to 330000001`){
      return res.status(403).json({message:"Kompaniya telefon raqami bolimiga notogri raqam kirgizilmoqda"})
    }
    if(error.stack == `ValidationError: "phone" must be less than or equal to 999999999`){
      return res.status(403).json({message:"Kompaniya telefon raqami bolimiga kop raqam kirgizilmoqda kirgizilmoqda"})
    } 
  } 
  const newCompany = await Company.companiesadd(tin, mfo,  accaunt,  bank, type, director, adress, phone);
   return res.status(200).json({ message: "success", newCompany });
    }catch(error){
    return res.status(400).json({message:"permission denied"})
    }
}

const getCompanies = async ( _,res) =>{
try{
  const Companies = await Company.companiesget()
  return res.status(200).json(Companies)
}catch(error){
return res.status(400).json({message:"Permission denied"})
}
}

const getCompaniesById = async (req, res) =>{
  try{
   const {id} = req.params
   console.log(req.params);
   const Fornotef = await Company.companiesupdate(id)
   const Companies = await Company.companiesbyid(id)
   return res.status(200).json(Companies)
  }catch(error){

  }
}
const getNotef = async(req,res) =>{
  try{
  const Notefs = await Company.companiesgetnotef()
  return res.status(200).json(Notefs)
  }catch(error){
 return res.status(400).json({message:"Permission denied"})
  }
}
const getNotefcount = async(req, res) =>{
  try{
  const Notefcount = await Company.companiesgetnotefcount()
  return res.status(200).json(Notefcount)
  }catch(error){
    return res.status(400).json({message:"Permission denied"})
  }
}

module.exports = {addcompany, getCompanies,getCompaniesById, getNotef, getNotefcount}