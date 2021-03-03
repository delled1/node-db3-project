const schemes = require("./scheme-model")
const db = require("../../data/db-config")

/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/
const checkSchemeId = async (req, res, next) => {

  try {

    const scheme = await db("schemes")
      .where("scheme_id", req.params.scheme_id)
    

    if(!scheme){
      return res.status(404).json({
        message: `scheme with scheme_id ${req.params.scheme_id} not found`
      })
    }

    next()
  } catch(err){
    next(err)
  }

  }

/*
  If `scheme_name` is missing, empty string or not a string:

  status 400
  {
    "message": "invalid scheme_name"
  }
*/
const validateScheme = (req, res, next) => {

  try{

    if(!req.body.scheme_name){
      return res.status(400).json({
        message: "invalid scheme name"
      })
    }

    if(typeof !req.body.scheme_name !== "string"){
      return res.status(400).json({
        message: "invalid scheme name"
      })
    }

  } catch(err) {
    next(err)
  }
  
}

/*
  If `instructions` is missing, empty string or not a string, or
  if `step_number` is not a number or is smaller than one:

  status 400
  {
    "message": "invalid step"
  }
*/
const validateStep = (req, res, next) => {

  try{

  } catch(err) {
    next(err)
  }

}

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}
