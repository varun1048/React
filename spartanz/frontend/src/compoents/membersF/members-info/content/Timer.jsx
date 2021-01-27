
export default function Timer(){
    let date = Date().slice(0,15)
  return  <div>
      <button className="btn btn-success"> 
        Done <span className="badge bg-light text-dark"> {date} </span>
      </button>
      <h4>Day more</h4>
        
  </div>

}
