import React from 'react';
import '../style/todo.css';


function Todo({todos, addTodos, formData, updateFormData}) {

    const handleChange = (e) => {
        updateFormData({
          ...formData,
    
          // Trimming any whitespace
          [e.target.name]: e.target.value.trim()
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault()
        
        addTodos([
            ...todos,
            {title:formData.nom, cp: formData.description}
        ])
        // ... submit to API or something

    };

    return (

        <div>
            <form>
                <label for="nom">Nom:</label><br/>
                <input type="text" id="nom" name="nom" onChange={handleChange}/><br/><br/>

                <label for="cp">Code Postal:</label><br/>
                <input type="text" id="cp" name="cp" onChange={handleChange}/><br/><br/>

                <input type="submit" value="Submit" onClick={handleSubmit}/>
            </form>

        </div>

    )
}

export default Todo;