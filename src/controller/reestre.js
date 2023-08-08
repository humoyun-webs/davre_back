const Reestre = require("../model/reestre")
const Joi = require("joi")



const addreestre = async(req, res) =>{
    try{
        const {gover_name, full_name, location, stir, oked, mfo, accaunt } = req.body;
                
    const scheme = Joi.object({
     gover_name: Joi.string().required(),
     full_name: Joi.string().required(),
     location: Joi.string().required(),
     stir:Joi.number().min(100000000).max(999999999).required(),
     oked:Joi.string().required(),
     mfo: Joi.string().required(),
     accaunt: Joi.number().min(1000000000000000).max(8999999999999999).required()
  });

  const { error } = scheme.validate({ gover_name, full_name, location, stir, oked, mfo, accaunt });
  
  if(error){    
    if (error.stack == `ValidationError: "stir" must be less than or equal to 999999999`) {
       return res.status(403).json({message:"stir bolimida notogri shaklda kiritilgan!"})
    } 
    if(error.stack == `ValidationError: "stir" must be greater than or equal to 100000000`){
      return res.status(403).json({message:"stir bolimi: notogri shaklda toldirilgan!"})
    }
    if(error.stack == `ValidationError: "full_name" is not allowed to be empty`){
        return res.status(403).json({message:"Rahbar I.S.Sh nomi: bolimi toldirilmagan !"})
      }
    if(error.stack == `ValidationError: "gover_name" is not allowed to be empty`){
      return res.status(403).json({message:"boshqaruvchi organ nomi bolimi toldirilmagan !"})
    }
    if(error.stack == `ValidationError: "stir" must be a number`){
        return res.status(403).json({message:"stir raqami: notog'ri shaklda kiritilgan!"})
      }
      if (error.stack == `ValidationError: "accaunt" must be greater than or equal to 1000000000000000`) {
        return res.status(403).json({message:"hisob raqam bolimi: notogri shaklda kiritilgan"})
     } 
     if  (error.stack == `ValidationError: "accaunt" must be less than or equal to 8999999999999999`){
       return res.status(403).json({message:"hisob raqami: bolimi: notogri shaklda toldirilgan!"})
     }
    if(error.stack == `ValidationError: "accaunt" must be a number`){
      return res.status(403).json({message:"hisob raqam bolimi toldirilmagan !"})
    }
    if(error.stack == `ValidationError: "accaunt" must be a safe number`){
      return res.status(403).json({message:"hisob raqami bolimi: notogri shaklda toldirilgan! !"})
    }
    if(error.stack == `ValidationError: "oked" is not allowed to be empty`){
      return res.status(403).json({message:"oked bolimi toldirilmagan !"})
    }
    if(error.stack == `ValidationError: "mfo" is not allowed to be empty`){
      return res.status(403).json({message:"Mfo bolimi toldirilmagan !"})
    }
    // if(error.stack == `ValidationError: "adress" is not allowed to be empty`){
    //   return res.status(403).json({message:"Kompaniya address bolimi toldirilmagan !"})
    // }
    // if(error.stack == `ValidationError: "phone" must be a number`){
    //   return res.status(403).json({message:"Kompaniya telefon raqami bolimi toldirilmagan !"})
    // };
    // if(error.stack == `ValidationError: "phone" must be greater than or equal to 330000001`){
    //   return res.status(403).json({message:"Kompaniya telefon raqami bolimiga notogri raqam kirgizilmoqda"})
    // }
    // if(error.stack == `ValidationError: "phone" must be less than or equal to 999999999`){
    //   return res.status(403).json({message:"Kompaniya telefon raqami bolimiga kop raqam kirgizilmoqda kirgizilmoqda"})
    // } 
  } 
  const newReestre = await Reestre.reestreadd(gover_name, full_name, location, stir, oked, mfo, accaunt);
   return res.status(200).json({ message: "success", newReestre });
    }catch(error){
    return res.status(400).json({message:"permission denied"})
    }
}

const getReesters = async ( _,res) =>{
    try{
      const Reesters = await Reestre.reestreget()
      return res.status(200).json(Reesters)
    }catch(error){
    return res.status(400).json({message:"Permission denied"})
    }
    }
    
    const getReestersById = async (req, res) =>{
      try{
       const {id} = req.params
       console.log(req.params);
       const Reesters = await Reestre.reestregetbyid(id)
       return res.status(200).json(Reesters)
      }catch(error){
    return res.status(400).json({message:"Permission denied"})
      }
    }

    const editreestre = async (req, res) => {
        try{
            const { type} = req.body;
            const { id } = req.params;
            const scheme = Joi.object({
              type:Joi.string().valid("1","2").required()
            });
            const { error } = scheme.validate({ type });
          
            if (error) return res.status(403).json({ message: error.message });
          
            const Reesters = await Reestre.reestreupdate(type,id);
          
            return res.status(201).json({ message: "edit success", newReester: Reesters });
        }catch(error){
// return res.status(403).json({ message:"Permission denied"})
console.log(error.message);
}
      };

module.exports = {
addreestre,
getReesters,
getReestersById,
editreestre
}