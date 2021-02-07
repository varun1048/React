
export default function Fulldetails(pros){  
    let info = pros.info
    let assessment = Array((pros.assessment))
    let workout = Array((pros.workout))
    
    return <div className=""> 
    <div className="row m-2">
        <div className="col">
            <ul class="list-group">
                <li class="list-group-item  d-flex justify-content-between align-items-center">
                    Name 
                    <span class="badge bg-primary text-white rounded-pill">{info.name}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Number
                    <span class="badge bg-primary text-white rounded-pill">{info.number}</span>
                </li>
                <li class="list-group-item d-flex  justify-content-between align-items-center">
                    Age
                    <span class="badge bg-primary text-white rounded-pill">{info.age}</span>
                </li>
            </ul>
        </div>

        <div className="col">
            <ul class="list-group">
                <li class="list-group-item  d-flex justify-content-between align-items-center">
                    Gmail 
                    <span class="badge bg-primary text-white rounded-pill">{info.gmail}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Gender
                    <span class="badge bg-primary text-white rounded-pill">{info.gender}</span>
                </li>
                <li class="list-group-item d-flex  justify-content-between align-items-center">
                    Program
                    <span class="badge bg-primary text-white rounded-pill">{info.program} </span>
                </li>
            </ul>
        </div>
        
    </div>
        {/* row 2 */}
    <div className="row m-2">   
        <div className="col">
            <ul class="list-group">
                <li class="list-group-item  d-flex justify-content-between align-items-center">
                    Joined  Date             
                    <span class="badge bg-Success text-white rounded-pill">{String(info.joindate).slice(0,10)}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Expiry Date
                    <span class="badge bg-Success text-white rounded-pill">{String(info.expiry).slice(0,10)}</span>
                </li>
                <li class="list-group-item d-flex  justify-content-between align-items-center">
                    In Specific
                    <span class="badge bg-Success text-white rounded-pill">{info.specific}</span>
                </li>
            </ul>
        </div>
        
        <div className="col">
            <ul class="list-group">
                <li class="list-group-item  d-flex justify-content-between align-items-center">
                Card Number
                    <span class="badge bg-Success text-white rounded-pill">{info.card}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                 Days More
                    <span class="badge bg-Success text-white rounded-pill">{info.days}</span>
                </li>
                <li class="list-group-item d-flex  justify-content-between align-items-center">
                Package
                    <span class="badge bg-Success text-white rounded-pill">{info.package}</span>
                </li>
            </ul>
        </div>
        
    </div>
        {/* row 2 */}
        <div className="row m-2">   
        <div className="col">
            <ul class="list-group">
                <li class="list-group-item  d-flex justify-content-between align-items-center">
                    Total Assessment             
                    <span class="badge bg-danger text-white rounded-pill">{assessment[0].length}</span>
                </li>
            </ul>
        </div>
        
        <div className="col">
            <ul class="list-group">
                <li class="list-group-item  d-flex justify-content-between align-items-center">
                Numebr of workout
                    <span class="badge bg-danger text-white rounded-pill">{workout[0].length}</span>
                </li>
            </ul>
        </div>
        
    </div>



</div>
}
