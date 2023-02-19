// index all ingredients

import Ingredient from "../Ingredient/Ingredient"

export default function IngredientList({
    ingredients, 
    setAllIngredients,
    addToOrder, 
    removeFromOrder, 
    isInNewOrder, 
    user, 
    isEditing,
    handleUpdateIngredient
}){

    let ingredientsList = null

    if(ingredients && ingredients.length > 0) {
        ingredientsList = ingredients.map((ingredient, index) => <Ingredient 
            ingredient={ingredient} 
            addToOrder={addToOrder}
            removeFromOrder={removeFromOrder}
            isInNewOrder={isInNewOrder}
            isEditing={isEditing}
            key={index}
            user={user}
            ingredients={ingredients}
            setAllIngredients={setAllIngredients}
            handleUpdateIngredient={handleUpdateIngredient}
        />)
    }
    
    return (
        <div>
            {ingredientsList && ingredientsList}
        </div>
    )
}