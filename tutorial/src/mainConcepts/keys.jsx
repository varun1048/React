export default
function Kyes(){
    let number  = [1,2,3,4,5]
    return <div>
        list and keys
        <ul>
            {number.map(element => <li key={element.toString()}>
                    {element}  
                </li>)
            }
        </ul>
    </div>
}