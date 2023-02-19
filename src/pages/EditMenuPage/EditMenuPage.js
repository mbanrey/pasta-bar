//for admin user to add/remove/update menu items
import IngredientList from '../../components/IngredientList/IngredientList'
import AddIngredientForm from '../../components/AddIngredientForm/AddIngredientForm'

export default function EditMenuPage({ user, allIngredients, setAllIngredients, handleUpdateIngredient }){
    return(
        <>
            <h1>Edit Menu Page</h1>
            <IngredientList
                user={user}
                ingredients={allIngredients}
                setAllIngredients={setAllIngredients}
                isEditing={true} 
                handleUpdateIngredient={handleUpdateIngredient}/>
            <AddIngredientForm allIngredients={allIngredients} setAllIngredients={setAllIngredients} handleUpdateIngredient={handleUpdateIngredient}/>
        </>
    )
}