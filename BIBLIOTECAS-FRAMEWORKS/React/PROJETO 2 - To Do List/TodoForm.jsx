import {useState} from 'react'

const TodoForm = ({addTodo}) => {

  const [value, setValue] = useState("")
  const [category, setCategory] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!value || !category) return;
    addTodo(value, category)
    setCategory("");
    setValue("");   
  }
  return (
    <div className='todoform'>
        <h2>Criar Tarefa: </h2>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder='Digite o Titulo' 
            onChange={(e) => setValue(e.target.value)} 
            value={value}
            />
            <select onChange={(e) => setCategory(e.target.value)} value={category}>
                <option value="">Selecione uma Categoria </option>
                <option value="trabalho">Trabalho</option>
                <option value="pessoal">Pessoal</option>
                <option value="estudos">Estudos </option>
            </select>
            <button type='submit'>Criar Tarefa </button>
        </form>
    </div>
  )
}

export default TodoForm