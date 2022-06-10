const { Router } = require('express');
const router = Router()
const { Diet } = require("../db")
const {  preLoadDiets } = require ("../Controllers/diets")

router.get("/", async (req,res,next) => {
    try {
        let dietDb = await Diet.findAll()
        res.status(200).send(dietDb)
        const fullDiet =  await preLoadDiets()
         
          //agregado
        
    } catch (error) {
        next(error)
    }
})

module.exports = router;