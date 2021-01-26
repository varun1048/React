export default function Carousel(){
    let images={
        two:"https://c4.wallpaperflare.com/wallpaper/206/268/839/pose-muscle-muscle-rod-press-hd-wallpaper-preview.jpg",
        one:"https://i.pinimg.com/originals/c9/2b/9e/c92b9ec0771b9fb8f13d29861ffadefc.jpg",
        three:"https://bgwall.net/wp-content/uploads/2014/09/gym-motivation-winner-image-wallpaper.jpg"
    }
    return <div id="demo" class="carousel slide  container"  data-ride="carousel">

    <ul class="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" class="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
    </ul>

    <div class="carousel-inner">
        <div class="carousel-item active">
        <img src={images.one} alt="Los Angeles" width="1100" height="500"/>
        <div class="carousel-caption">
            <h3>-</h3>
            <p>-</p>
        </div>   
        </div>
        <div class="carousel-item">
        <img src={images.two} alt="Chicago" width="1100" height="500" />
        <div class="carousel-caption">
            <h3>-</h3>
            <p>-</p>
        </div>   
        </div>
        <div class="carousel-item">
        <img src={images.three} alt="New York" width="1100" height="500" />
        <div class="carousel-caption">
            <h3>-</h3>
            <p>-</p>
        </div>   
        </div>
    </div>
    <a class="carousel-control-prev" href="#demo" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
    </a>
    <a class="carousel-control-next" href="#demo" data-slide="next">
        <span class="carousel-control-next-icon"></span>
    </a>
</div>
}