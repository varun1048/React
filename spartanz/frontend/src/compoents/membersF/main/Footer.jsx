
export default function Footer(){
    let logos={
        fb:"https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png",
        inst:"https://www.brandchannel.com/wp-content/uploads/2016/05/instagram-new-logo-may-2016.jpg"
    }
    let socialLinks={
        fb:"https://www.facebook.com/Spartanz-Fitness-172986243351947",
        inst:"https://www.instagram.com/spartanzfitness/"

    }
    return <div className="Footer "> 
<footer className="bg-light  text-center text-lg-start">
  <div className="container p-4">
    <div className="row">
      <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 className="text-uppercase">SPARTANZ <small>Fitness</small></h5>

        <p>
        Address: 8, Old Mahabalipuram Rd, Muthamil Nagar,<br/> Karapakkam, Chennai, Tamil Nadu 600097

        </p>
      </div>
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase">CONTACT US</h5>

        <ul className="list-unstyled mb-0">
          <li>
            <a href="#!" className="text-dark">78714 33777</a>
          </li>
        </ul>
      </div>
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase mb-0">Social media</h5>

        <ul className="list-unstyled">
          <li>
            <a href={socialLinks.fb} className="">
                <img src={logos.fb} className="social-logos " alt=""/>
            </a>
          </li>
          <li>
            <a href={socialLinks.inst}>
                <img src={logos.inst} className="social-logos img-circle" alt=""/>
            </a>
          </li>

        </ul>
      </div>
    </div>
  </div>

 <div className="text-center p-3 footerEnd" >
    
    <a className="text-dark" href="https://mdbootstrap.com/"> Spartanz Fitness </a>
  </div>
</footer>
    </div>
}   