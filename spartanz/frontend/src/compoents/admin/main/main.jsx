import AdminLinks from "../body/adminLinks";
let st={"width": "500"}
let url = "https://www.pixel4k.com/wp-content/uploads/2019/01/kai-greene-4k_1547938909.jpg"
export default function Main(){
    return<div className="container">
    <div  className="row">
       <AdminLinks />
       <div className="col-sm-10   mx-auto">    
            <h3>
                Admin page <br/>
            </h3>
            <img src={url} class="img" alt="Cinque Terre" style={st} />            
       </div>
   </div>
</div>
}

