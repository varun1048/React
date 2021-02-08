
export default function Fulldetails(pros){  
    let info = pros.info
    let assessment = Array((pros.assessment))
    let workout = Array((pros.workout))
    
    return <div className=""> 
    <div className="row m-2">
        <div className="col">
            <ul className="list-group">
                <li className="list-group-item  d-flex justify-content-between align-items-center">
                    Name 
                    <span className="badge bg-primary text-white rounded-pill">{info.name}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Number
                    <span className="badge bg-primary text-white rounded-pill">{info.number}</span>
                </li>
                <li className="list-group-item d-flex  justify-content-between align-items-center">
                    Age
                    <span className="badge bg-primary text-white rounded-pill">{info.age}</span>
                </li>
            </ul>
        </div>

        <div className="col">
            <ul className="list-group">
                <li className="list-group-item  d-flex justify-content-between align-items-center">
                    Gmail 
                    <span className="badge bg-primary text-white rounded-pill">{info.gmail}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Gender
                    <span className="badge bg-primary text-white rounded-pill">{info.gender}</span>
                </li>
                <li className="list-group-item d-flex  justify-content-between align-items-center">
                    Program
                    <span className="badge bg-primary text-white rounded-pill">{info.program} </span>
                </li>
            </ul>
        </div>
        
    </div>
        {/* row 2 */}
    <div className="row m-2">   
        <div className="col">
            <ul className="list-group">
                <li className="list-group-item  d-flex justify-content-between align-items-center">
                    Joined  Date             
                    <span className="badge bg-Success text-white rounded-pill">{String(info.joindate).slice(0,10)}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Expiry Date
                    <span className="badge bg-Success text-white rounded-pill">{String(info.expiry).slice(0,10)}</span>
                </li>
                <li className="list-group-item d-flex  justify-content-between align-items-center">
                    In Specific
                    <span className="badge bg-Success text-white rounded-pill">{info.specific}</span>
                </li>
            </ul>
        </div>
        
        <div className="col">
            <ul className="list-group">
                <li className="list-group-item  d-flex justify-content-between align-items-center">
                Card Number
                    <span className="badge bg-Success text-white rounded-pill">{info.card}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                 Days More
                    <span className="badge bg-Success text-white rounded-pill">{info.days}</span>
                </li>
                <li className="list-group-item d-flex  justify-content-between align-items-center">
                Package
                    <span className="badge bg-Success text-white rounded-pill">{info.package}</span>
                </li>
            </ul>
        </div>
        
    </div>
        {/* row 2 */}
        <div className="row m-2">   
        <div className="col">
            <ul className="list-group">
                <li className="list-group-item  d-flex justify-content-between align-items-center">
                    Total Assessment             
                    <span className="badge bg-danger text-white rounded-pill">{assessment[0].length}</span>
                </li>
            </ul>
        </div>
        
        <div className="col">
            <ul className="list-group">
                <li className="list-group-item  d-flex justify-content-between align-items-center">
                Numebr of workout days
                    <span className="badge bg-danger text-white rounded-pill">{workout[0].length}</span>
                </li>
            </ul>
        </div>
        
    </div>



</div>
}
