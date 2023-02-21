//-----Backend Ingredients Controllers-----//
const Ingredients = require("../../models/ingredient")

//show all
async function show(req, res, next) {
    try {
        const ingredients = await Ingredients.find({})
        res.json(ingredients)
    } catch (error) {
        console.error(error)
        res.status(400).json(error)
    }
}


//----For Admin Users Only-----//

//create
async function create(req, res, next) {
    try {
        const ingredient = await Ingredients.create(req.body)
        res.status(201).json(ingredient)
    } catch (error) {
        console.error(error)
        res.status(400).json(error)
    }
}

//delete
async function remove(req, res, next) {
    try {
        console.log("in the remove ingredient function")
        
        const ingredient = await Ingredients.findById(req.params.id)
        
        if(ingredient) {
            await Ingredients.deleteOne({_id: {$eq: req.params.id}})
        }

        // const ingredient = await Ingredients.findById(req.params.id)
        // await ingredient.deleteOne()

        res.sendStatus(204)

        //we think the problem may be with this res.sendStatus

    } catch (error) {
        console.error(error)
        res.status(400).json(error)
    }
}
//update
async function update(req, res, next) {
    try {
        //ingredient from db (by ID)
        const ingredient = await Ingredients.findById(req.params.id)
        console.log(ingredient)

        //new ingredient data
        const newIngredient = req.body
        console.log(newIngredient)

        const blendedData = Object.assign(ingredient, newIngredient)
        console.log(blendedData)

        ingredient.updateOne(blendedData)
        ingredient.save()
        
        res.json(ingredient)

    } catch (error) {
        console.error(error)
        res.status(400).json(error)
    }
}

module.exports = {show, create, remove, update}