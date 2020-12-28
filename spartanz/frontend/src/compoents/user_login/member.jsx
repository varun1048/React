import React from 'react';

export default function Member(params) {
    let st={
        "width":"400px"
    }
    return    <React.StrictMode>
        <br/>
        <div   className="d-flex justify-content-center"> 
            <div className="card" style={st}>
                <div class="card-body">

                    <form action="/register" >
                        <div class="form-group">
                            <label for="usr">Number</label>
                            <input type="number" className="form-control"  placeholder="Enter your mobile number" name="userNumber"/>
                        </div>
                        
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>

                </div>
            </div>
        </div>
    </React.StrictMode>
}