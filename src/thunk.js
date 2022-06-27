export default function fetchData(){
    return (dispatch)=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(data=>dispatch({type:"postdata",payload:data}))
    }
    
}