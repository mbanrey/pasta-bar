// Specific ingredient item
import EditIngredientForm from '../EditIngredientForm/EditIngredientForm'

import "./Ingredient.css"

export default function Ingredient({
    ingredient, 
    user, 
    addToOrder, 
    removeFromOrder, 
    isInNewOrder, 
    isEditing,
    getAllAndAvailable
}){
//../../images/icons/${ingredient.image}

//images/icons/
    return(
        <div className='ingredient-container ingredient-card'>
            <div className='ingredient-card-details'>
                {/* <div className='ingredient-align'> */}
                <img className='ingredient-image1' src={`/images/icons/${ingredient.image}`} alt='Filler Image'/>
                <div className="ingredient-name-and-price">
                <img className='ingredient-image2' src={`/images/icons/${ingredient.image}`} alt='Filler Image'/>
                    <h3 className='ingredient-name'>{ingredient.name}</h3>
                    <p className='ingredient-price'>$ {ingredient.price}</p>
                {/* </div> */}
                </div>
                <div>
                {isEditing ?
                    <EditIngredientForm
                        ingredient={ingredient}
                        getAllAndAvailable={getAllAndAvailable}
                    />
                    :
                    isInNewOrder ?
                        <button className="btn-delete" onClick={() => removeFromOrder(ingredient._id)}>➖</button>
                        :
                        <button onClick={() => addToOrder(ingredient._id)}>➕</button>
                }
                </div>
            </div>
                    <button className='btn-add-order' onClick={() => addToOrder(ingredient._id)}>➕</button>
            
        </div>
    )
}