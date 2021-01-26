
import AboutUs from "../body/AboutUs";
import Carousel from "../body/Carousel";
import ContactUs from "../body/ContactUs";
import WhyJoin from "../body/WhyJoin"

export default function MainBody() {
    return <div>
    
        <div class="row d-flex justify-content-center">
            <div class="col-lg " >   
                <br/>
                <Carousel />
            </div>
        </div><br/>
        
        <div class="row ">
            <div class="col-sm" >
            <WhyJoin />
            </div>
        </div>

        <div class="row ">
            <div class="col-sm" >
            <ContactUs />
            </div>
        </div>

        <div class="row ">
            <div class="col-sm" >
            <AboutUs />
            </div>
        </div>
        
    </div>
}