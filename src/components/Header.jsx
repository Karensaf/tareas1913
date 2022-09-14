
const Header = ({ titulo }) => {
    return (
        //*<div>Header</div>  Lo que se va a ver en la web
        <header>
            <h1>{titulo} </h1>
        </header>
    )
}

Header.defaultProps = {
    titulo: 'Tareas'
}

export default Header
