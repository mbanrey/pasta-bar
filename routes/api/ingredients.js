//-----Backend Ingredients Routes-----//

const express = require("express")
const router = express.Router()

const ingredientsCtrl = require('../../controllers/api/ingredients');
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const ensureIsAdmin = require('../../config/ensureIsAdmin');


// Base Route: /api/ingredients



//Show Ingredients
//router.get("/", ensureLoggedIn, ingredientsCtrl.show)

//Create New Ingredient
//router.post("/new", ensureIsAdmin, ingredientsCtrl.create)

//Delete ingredient
//router.delete("/:id", ensureIsAdmin, ingredientsCtrl.delete)

//Update Ingredient
//router.patch("/:id", ensureIsAdmin, ingredientsCtrl.update)