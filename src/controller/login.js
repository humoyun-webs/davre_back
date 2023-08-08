const Joi = require("joi");
const bcrypt = require("bcrypt");
const { sign } = require("../utils/jwt");
const User = require("../model/login")

const Loginc = async (req, res) => {
    try{
      const { email, password } = req.body;
      console.log(req.body);
      const scheme = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
      }); 
      const {error} = scheme.validate({ email, password });
      if (error){
        return res.status(400).json({ message: error.message });
      }
      
      const user = await User.findbyemail(email);
      if (!user) {
        return res.status(404).json({ message: "Incorrect email or password" });
      };

      const verify = await bcrypt.compare(password, user.password);
      if (!verify) {
        return res.status(403).json({ message: "Incorrect email or password" });
      }
      const token = sign({ id: user.user_id, role: user.role });
      res.status(200).json({ message: "Success", token });
    } catch (error) {
      return res.status(401).json({ message: "Permission denied" });
    }
  };
   
module.exports = {Loginc}