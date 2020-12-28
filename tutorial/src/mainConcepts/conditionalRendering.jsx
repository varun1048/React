export default function Condition(){
    let boo = false
    return (
        <div>
            {boo === true && 
                <h1>
                    this is true statement 
                </h1>
                }
            condition Rendering
        </div>
    )
}