export const Navbar = ({ setToggleAddForm, toggleAddForm }) => {
    return (
        <nav className="navbar">
            <h1>Todo List</h1>
            <ul>
                {!toggleAddForm && (
                    <li
                        onClick={() => setToggleAddForm(true)}
                    >
                        Adicionar
                    </li>
                )}
            </ul>
        </nav>
    )
}
