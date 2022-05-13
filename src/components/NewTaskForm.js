import React, {useState} from "react";

function NewTaskForm( {categories, onAddTask} ) {
  const [newTask, setNewTask]=useState("")

  const categoriesArr = categories.map((category) => {
    return(<option key={category}>{category}</option>)
  })

  function handleSubmit(e){
    e.preventdefault()
    onAddTask(newTask)
  }


  return (
    <form className="new-task-form">
      <label>
        Details
        <input onChange={(e)=> setNewTask(e.target.value)} type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {categoriesArr}
        </select>
      </label>
      <input onSubmit = {handleSubmit} type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
