export default function JoinUs(){
    let imgs={
        coach:"https://cdn.newswire.com/files/x/1c/d6/3ead1f10af6e7c72b8e605f68448.jpg",
        care:"https://www.owensborohealth.org/app/files/public/18165/caring-hands-right-web.jpg",
        fit:"https://escollection.es/12077-large_default/sp181-rocky-fit.jpg"
    }
    return <div className="Jumbotron d-flex justify-content-center "> 
          <h3 className="m-2">WHY JOIN US? </h3>

        <div className="row " >
            
            <div className="col-sm">
                <div className="card  WhyJoin-imags" >
                    <h5 className="text-center  card-title"> Best coaching</h5>
                        <img className="card-img-top" src={imgs.coach} alt="Cardcap" />
                </div>
            </div>

            <div className="col-sm">
                <div className="card  WhyJoin-imags" >
                    <h5 className="text-center  card-title">We Care you</h5>
                    <img className="card-img-top" src={imgs.care} alt="Cardcap" />
                </div>            
            </div>
 
            <div className="col-sm">
                <div className="card  WhyJoin-imags2" >
                        <h5 className="text-center  card-title">and   get Fit</h5>
                        <img className="card-img-top" src={imgs.fit} alt="Cardcap" />
                    </div>            
            </div>

        </div>
    </div>

}