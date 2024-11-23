// API

let {useState} = React

let URL = "https://dummy-101-a83fe-default-rtdb.asia-southeast1.firebasedatabase.app/todos.json"

// Input in React  // CRUD => To Do

// https://onecompiler.com/javascript/42yuvgq3r


let Form = ()=>{
    let initState = {
        task : "" , 
        status : "" , 
        priority : ""
    }
    let [data , setData] = useState(initState)

    function handleForm(e){
        // console.log(e.target.name , e.target.value)
        // e.target. = {name : input , value : inputValue}
        let {target:{name , value}} = e

        setData({ ...data ,  [name] : value}) // Dynamic key access
    }

    async function handleSubmit(e){
          e.preventDefault()
        // axios => library => it makes fetch easier
          let response = await axios.post(URL , data ) 
          console.log(response.data)
          setData(initState)
    }

    // prevS => {a:"" , b:"" , c:""}
    // setData => prevS.a = 10
    // s => {a:10 , b:"" , c:""}
    // setDatta => prevS.b = 20
    // s => {a:10 , b:20 , c:""}
    return(
        <form onSubmit={handleSubmit}>
            <input name="task" value={data.task} placeholder="Task" onChange={handleForm}/>
            <input name="status" value={data.status} placeholder="status" onChange={handleForm} />
            <input name="priority" value={data.priority} placeholder="priority" onChange={handleForm} />
            <button type="submit">Submit</button>
        </form>
    )
}

function App(){
    return(
       <Form/>
    )
}

let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)


// Firebase => 




// APP-1    --- API (Application programming Interface)  ---     APP-2


// Frontend     --- Fetch API ---         Backend


// let obj = {
//     a:1 , 
//     b:2 , 
//     c:3 
// }

// let bee = "b"


// for(let key in obj){
//     // console.log(obj[key])
// }


// methods

// // fetch(URL , {
//     Headers => content-type
//     body => JSON.stringify
// //})

// axios.post(URL , {})
            