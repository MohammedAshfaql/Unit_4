// parent - child - button - select - options

// parentDiv = document.createElement("div");
// childDiv = document.createElement("div");

// btn1 = document.createElement(button);
// btn2 = document.createElement(button);
// btn3 = document.createElement(button);

// select1 = document.createElement(select);
// Option1 = document.createElement(option)
// Option2 = document.createElement(option)

// select1.append(Option1, Option2)
// childDiv.append(btn1,btn2,btn3, select)
// parentDiv.append(childDiv)
// body.append(parentDiv)

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<h1>React application is working?</h1>)


// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<h1> finally 1st react '_' </h1>)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<h1>Alhamdulillah</h1>)
// const root1 = ReactDOM.createRoot(document.getElementById("root1"))
// root1.render(<h1>Mashallah '__'</h1>)
 
function Navbar(){
    return (
        <div>
            <h1>This is Navbar</h1>
            <button>Click Me</button>
        </div>
    )
}
function Content() {
    let arr = ["Apple", "grapes", "lemon", "banana", "banana"]
    return (
        <>
        <h2>This is Content</h2>
        <ul>
        {
            arr.map((ele, i) => {
                return (
                    <li key={i} >{ele}</li>
                )
            })
        }
        </ul>
        </>
    )
}
function Footer(){
    return (
        <h3>This is Footer</h3>
    )
}

function App(){
    return (
        <>
        <Navbar/>
        <Content/>
        <Footer/>
        </>
    )
}

root.render(<App/>)













