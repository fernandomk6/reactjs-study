

export const List = ({
        items,
        removeItem,
        setToggleAddForm,
        editItem,
        setEditItem
    }) => {
    console.log(items)

    const handdleEdit = (todo) => {
        setEditItem(todo)
        setToggleAddForm(true)
    }

    return (
        <ul className='list'>
            {items.map((todo) => (
                <li key={todo.id}>
                    <p>{todo.text}</p>
                    <ul className='list-actions'>
                        <li 
                            onClick={() => removeItem(todo.id)}
                        >
                            Deletar
                        </li>
                        <li 
                            onClick={() => handdleEdit(todo)}
                        >
                            Alterar
                        </li>
                    </ul>
                </li>
            ))}
        </ul>
    )
}