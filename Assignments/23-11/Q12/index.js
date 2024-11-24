
const App = () => {
    const items = ['React', 'JavaScript', 'CSS']
    return (
        <div>
        <h1>Dynamic list</h1>
        <ul>
            {
                items.map(item,index) => (
                    <li key={index} >{items}</li>
                )
            }
        </ul>
        </div>
    )
}
ReactDOM.render(<App/>, document.getElementById("root"));



