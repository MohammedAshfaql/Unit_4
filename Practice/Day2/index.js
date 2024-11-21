

let isLogged = false 

function ToggleLogIn(title){
    isLogged = isLogged ? flase : true
}

let Navbar = () => {
    return (
        <div>
        <button>Home</button>
        <button>About</button>
        <button onClick = {()=>ToggleLogIn("dholu")}>Login</button>
        <button>Theme</button>
        </div>
    )
    // Navbar.render(<root>)
}
let Card = ({ele}) => {
    return (
        <div key={ele.id}>
                            <img src={ele.Img}></img>
                            <p><b>Name:</b>{ele.name}</p>
                            <p><b>Email:</b>{ele.email}</p>
                            <h3>{ele.department}</h3>                            
                        </div>
    )
}
let Container = () => {
    let arr = [
        {
            id:1,
            name: "dholu",
            email: "dholu@gmail.com",
            department: "HR",
            Img:"https://dummyimage.com/150x150/000/fff"
        },
        {
            id:2,
            name: "bholu",
            email: "bholu@gmail.com",
            department: "Finance",
            Img:"https://dummyimage.com/150x150/000/fff"
        },
        {
            id:3,
            name: "bheem",
            email: "bheem@gmail.com",
            department: "Operations",
            Img:"https://dummyimage.com/150x150/000/fff"
        },
        {
            id:4,
            name: "jaggu",
            email: "jaggu@gmail.com",
            department: "IT",
            Img:"https://dummyimage.com/150x150/000/fff"
        },
        {
            id:5,
            name: "kaaliya",
            email: "kaaliya@gmail.com",
            department: "Logistics",
            Img:"https://dummyimage.com/150x150/000/fff"
        },
        {
            id:6,
            name: "indumati",
            email: "indumati@gmail.com",
            department: "Legal",
            Img:"https://dummyimage.com/150x150/000/fff"
        },
    ]
    
    return (
        <div className="container">
            {
                
                arr.map((ele, i)=> {
                    return (
                        isLogged ?
                        <div>
                        <Card ele = {ele}/>
                        <button>Add Me</button>
                        </div>
                        :
                        <div>
                        <Card ele = {ele}/>
                        </div>
                    )
                })
                
            }
        </div>
    )

}

let App = () => {
    return (
        <>
        <Navbar/>
        
        <Container/>
        </>
        
    )
}

let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)
