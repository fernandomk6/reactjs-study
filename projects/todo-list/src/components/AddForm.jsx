import { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const AddForm = ({ setToggleAddForm, addItem, editItem }) => {
    const [inputValue, setInputValue] = useState(editItem ? editItem.text : '');
    const textInputRef = useRef(null);

    useEffect(() => {
        if (editItem) {
            setInputValue(editItem.text);
        }
    }, [editItem]);

    return (
        <div className='add-form'>
            <input
                type='text'
                placeholder='Digite o texto da tarefa'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                ref={textInputRef}
            />
            <button
                onClick={() => addItem({
                    id: editItem ? editItem.id : uuidv4(),
                    text: inputValue
                })}
            >
                Adicionar
            </button>
            <button
                onClick={() => setToggleAddForm(false)}
            >
                Cancelar
            </button>
        </div>
    )
}