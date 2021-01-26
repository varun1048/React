export default function WhyJoin(){
    let card={
        Support:{
            img:"https://media.mktg.workday.com/is/image/workday/illustration-people-on-bar-charts-1?fmt=png-alpha&wid=1000",
            content:"Every member gets a free, personalized Get Started Plan when they join. Our friendly, professional staff is trained to help you along your fitness journey, no matter how much support you need."
        },

        Tools:{
            img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPUAAADOCAMAAADR0rQ5AAAAk1BMVEX39/clIyT///8AAAD8/PwiICEfHR4dGxwIAAUaFxj29vbm5ubp6ekWExUFAAALBgkRDQ/v7+/d3d21tbUqKClgX1/Hx8fn5+dEQkO7u7ttbG3e3t6Ih4fU1NQwLi9XVlako6R1dHSSkZKbmpp+fX02NTVLSkqsrKyEg4RoZ2hUU1NeXV5zcnPLy8uMjIyWlpY9PD2yPwalAAAPvUlEQVR4nO1dh3LqOBQFFdvCTaY9DKH3JAT+/+vWBpJYtq5cAZPlzOzOzr6HpaNydZuuGo0XXnjhhRdeeOGFF/7XIAR9g5BHd+ZOII3DctU742N+9D30PyCOvGMTc1u/gHHHmI/Rozt1Y5DGjHPaFMDw3PrT001GGyPGOYTd9P/wdKM+15OcA1C8+LO0yQFLJvqCv0vbamoQ6YB2/8F7m1xQ9WfR3oZJNyn1qm6Q5CBCRn6n0/H7Y9NqXfSIavgTHytIByJtVc0aD3kG3W555vgQMukcsvTfwo4bwHAwb67fh18zfxzQr6A7E3BTX9f4uPzwooY37m8X8+mpyxzHCIm42E//LjryyKrTmM0NjLWNWbY/ZGuoSTf1XvmxHXYxdrjNdPo7xNomnTUZSEQONY6qXxKUvhVI2lQHk91WfOC6cJFqZIBDwhmlcG40TFc6D0NFa+i43uxXX7NOv215Qd9k7ElfvatD2G+SRkKupGWNDv52sRq+n/YtBeuttPPuNm2yiS9diNpJwdrCmqYHW8F1sNsc9HYzf9SKmxRopxLgF9BurBGCGmZ/+zXcTDjGLrdtpmmqXYq+pI2wedrWQW/SH1IN/iFZ8uhf1G3uYDZdigcR2ijO6m9gS/xwZz/BoaWiRdatPoV7glZM9lntlDbXaCrvnQ0vLBkhquMvoSlkp27ruBQPNoUu+ZFjNSCgvVzh5fBPrqDy3ilYW/I98S6yTt/WAWvhaCULLvtLRgecOdSTs049E0dSeRBIBHC4AElAJ2KHMrEWtFJgvSq0GYh1mjgDRS3MGpIETWFjZ2MtrvC9fJcOcs+1/aUWZ2QmXVXB1gC1ZPIulwRMGCcE7ByRtXBgkw+Aw7+8rNP0H/CAgfe1p8n5xFjLlJ8Ea+En0HA6oHUGsaZr9QqHfgezJmNA0xRYEzSULtcYH+GUh1jzGch6CPQeK0k3yEk+cVSH1gjpAPIvyro12+7SWdNBfxnR98lUzgFWOtAcaASn6KQABTq5tEQSblxylEuCqDRDO8wzTHWg7huTX0YEOH21TZz1d6/A/YnV1qYFiFptcG6JjHcLYnmBCfBjrUNLV2C9SldHr7+iv4yg9Uq7190WdoGglok6q4uaShZAOy58xp9ZAawveiDxsW1Mmb3adU9+f3z250KqZvS8BvRj2a/WEdby8zrgEG4D4o388bTZWzbdqWHj3bl/4Am0VLLuOwDrTxTYPh4Ldr1GKbOpFijb7mcw2K2uXBJElV+wN8l2PiKsofVqBOsVzRg2XJ3qgaYbDjvuh7ZuB2hHas39dk9uqjXDZbUefGxiS84djpAHNBS15cHBTHYvok/A69VH3jJmSdN1b3MCJiDFUBbNJxE0sKYSa5nx9zlwWOi9yKLyZGaEDNGzGFwhWm9PE39EA8sMbER7V7HOvgF/vgfJZuF8yXRaNyOC6swaOhObWtZB/PmB0tZEn9l6lwHCVgIslOSPopZF9n2RCmE0k6wB1bcARLHZzmJ8BDs2qnaBB0qR3qic7aDHg9oZ1GgB4hFJNpm0FCy4Ys28rCmDeolVrMkJOHy7i4+ctEUbgZhdjFPWEcZYVCa8nEKGDt4AT1CKSgq4bwMl0JeLFlBuxty8hIw8QMO8gnvtlihzYGcyYNuuEHQGKb0pLYBEIJDl36ObAdAznHBDoKNq7pLaNbzfNLllGJxPkNhXKuLQmuJLJDcy8BYy0poJqakW5CzpGAJPFO47slYD1pAAhG3ykDUwVIYvZa05K68J7IlBUi9oq1jzpG8LQcoZHs80yR8FrD2gCTVr4Ee4jSS6qn4aB6q5/Bf6Pska2j+XJpJrENSPnT7yhslZCNoka3kThirC58kXCGUtckj8kUYDowtaHTIHnTSE9g03KWVJH5iEkAPqJWbbPhLIF1SEdSBpSDs2tpTzUC5agP4kc8aqND/alXQHdFOHJ5w3cGKDyGcE8nEUYc12iByi484wn7yZ4YcgTcKQCE2VwSl1Y0JC46IBtWYb7kS/aC8QJDHVrOWDG0yc4A6x52OzceklxJpLAt6quKbUAoaOrqveR4jVjg5k6AoF+qOWZkw6uIHGIYwH/82KA1qhE5m6b8JCXBqegLx/v9ouEQYG+wTJbWx1ro9UG6I6EpSUaPQBYC2PPEJ+lyagRkBbIqLjC7axPiXAQCl1M/mSCk3laH+jqxHYE/IYC4EUuWAJylJAIFvT/d2l4q7BY0A7U1ofqBdP8gwR6ChCUkl0XgAHklx6mLBKKvdi/pN/3Yl+Pbop2RDJDhWqO0qba9xbc8O1mRDF4Z5giwlqF6B5uG3ZmMpDs5ePSlNmABswOuziR50RisYOKNXtgE93ow5qEtSwDp3FcEDdMCXinCVgfyJhGQnTIleGYmHcKyxV5F6aeQHt0qhG8y+6gOwd6uAzWxYmjOjr3tu2bybyRWTMwwSYhjX2Z7v9gHIcqKPCdjeiW1DufWEyn6Q6FqDJInCA68yOrlckrAfskQF29fXH6tg5mK3ctw3IJfvHHLdjlozYptS/KDmHCErxIhkzyYxIjwgxgo2EICA/Iu9gXjKhyiTtBSqvGD5nUdaBfh4mB+ma4Jc14sY1QeM+FC69gjb7/URHhVVGr6lOeAGzplqrUUkGKBEnieqCPCTjzmyxGk4HE83AGDsu5xzH3c/In2InzRFJDXxaxniTJQ6+54Zfxmxyeu+tvpbbvqABITH06YJx3nxAc2ERxyXVJekv6K0X5qv2/e3suBQPX2TN03xmV2jGJnYJpDU7zmaXXF6vdc4ujK/cmMSTC9L8iB2aqoSvn7RHcv2v8B/vyLK7/XT8OTr//vqRn6/BbcYUOEcZv8wK9CV+FU4VCLuAWuPt2/D9tF6vB73VB958rZhM84HBcG+xd06r/Sb4RpiqOetbSkEck5LKNMjM8GKdhrORgqU8mxrYDY95GsbFmN7UbLlBo4JuB79jPx8Jzs7TYgwfuSiWyVHFrYK4c5R9gvkR5sp1K4udCNBsPD1kzRFRbcGsiNtJkI+VNBZO3tBgHuh4D976ih3q5dPr48nslMkHkowGUASyKjAbuPUV11ulmmE+1jEPH5AAhHx2m7UdBXTrK6G38vQ0eDXpuNNHnuGBtvBNrSqBpWOeCH7au3KTjd7jSRmy0zAgfQ/OAYxPqd0ea57aqanRKiRDyJIQReNs3N0JrixjOGGj8GWZyU56sHny2ovqImL1wMcEoeTcqHMT0mAm3DE/QbjAlPPMEJ6ZJR24OmD/0q7V+FZcJE7wMmppXBlt/pwKpLXtTdjZFLLzpsaUBbu2290szEtnkr6HLHe4IEg8udpZ8UEd3b032QSoxvFbGOiXOZBTMkcVkN2sDIPrpDW8505Wga9HRJolV/zWpyxLLLBoiLfJmiB5e2j2gci8WLRZkHSjJVnEAWtvcEt9Oy8oH0t9d0WXuCRkfWY9rRPpMNHQkuU02IuCrGUJOHSzuLWVkRf65kviNY/dJ8sM+U24bmU5l5VB68r+r+LenRLpd4frDOW9ZhhA4sKzQJmeAKLK5NVHQH3rAWRdXaLyQ6C+9QCyBpPSnwOwW1PJOvMVlXoienEmB2v4DshToJiD+NlZS5KQX6z/KOuC+/rZpVmhUjv/05Mr4x2suqJYKOB/OtdPLs20Quc1eP1Zgdt5xvN/uFiCSqaqFyJ0CqfHlsNknd9thYvUZMt8e/gHfGDe6LTTpuQztzO6UKZG3luSFK/gIhYlEaxWtAVqmYJQF1MAABWWAMCYjwLN5jZyP9Q4UN5siCz1ChMg8Uv8KlD8cc4asfJlWeUiQMgXziFq3I/8nEPaWzujCNFcNkupWFIK31fl0WGdMUmxqeNVQR8p+rdz+SU/Hp5Byly8mXnfZ6OXpXpbXvzIJdLo9AxHcRf80ji1ca9EeW5kLQe667o2dcLUYCYkBlONccdZf25HkQw4NKtej2URO4Igz98NeFjXL9IXei4c6GKsnXu73rXLlWIn59i85ZkHf7Ybvk80jrERlmg17O5mvuybjfj3gYvrJeDErnIjYh1mq+kkWGVhXzB2WXezXy07/ZHnCfH80rhmBrfM9sEPc3jblrwGZ1ph3fywJYlH5854o3H/3JdzFnxlpYEh+soc3kzVKPMgeX89c1/uhyz1VvMgrfxeTZDIUSsH5QW0+kAa9y4M/ixF5BFQhK4IYrdMaowqJ/tpprrKyabsWaa6ysnmzyHAL4hfxSjOulTy751RlYJWNtH73sjvdJOhbFL/nVFNuKiK9xHuCZKxjJsaygtzdQRUczkXHv7KTV5ABYnysZbVKagzCFRVLg/KXVp5AKrwjFd1qfh+qCI2qE2fbFtXkqP3bDpKA3oPIxfcQpmgD0WBkGgcRumHou4OsOhgZshKH9Yd5FB2Y9vP41D4RatAfoEAp/CVrAcia/VsCJKKpk+AsjlMxXKIHg6rHOtCqQaPR0k3kqJCSZ1RzrNQLPn18Sh3dj3ludUo8rRCFIpnuGqNko6Fp3MpnFHWdfZ0TrMzyLachf1sDtILyr4dIi/aW3dA70lkhqSieP0BVGrOjmLXSx8L8D2+zCh2vfSxKB/zeUbtrPyTQNR+noj9NxQV0rPi+ayuKvzhVRQgvC9Kn1shnGKlER4FgjpVpA6zeWVpsLcGCSuxKuqj5wEf9j1Uf+YEef3FO8NV3QhgDj/tOmYtEmRBkP5HmKpf6XUAzXbxIOXZ7oeC+FmvZeRljgsX7ro9qkwgFUGVzwU+FlZZgwNGfeObsfLqlaK2eQvEvOXVZadTy52NvJvt6hC0WeKG1q1AGkt628pn1F2BpbQfBDQ+uTevhmbzeq1ytI2/BncTULyqkZaGVvcqhcY3Xk1oE29zv2obul4PoUbak3sWcKS4Dpsb9XM/El2WdrKW9t1J36k2fhR4/mDSZPGIko7846EyrTV8TB1Le/3QtMNt9zblI9Rg7tdDDU/iLbKWnKgMOh6OHi3PkLnC9zy5NPx+qIP/ELU/78Zbw5t+HTg3zg8JDivziqqgB5xrpIgTNFrhW8s1hqeHGnE+A1kL5t5OS6McfypeJnscUGu7wbcojRMsbae7sOrIOQQh47le+XNsGnc//NajzyoVCPI6U8yrW+majU/LUV2n+RcEmbN3t5KnXzSufmewXiDE3PZ0VW2qdFDm8s1xTJ6F8xlhcPPthI1CzMPqYd3PMJT5TJQvIAj983cbG3OWPcpJw+php/m2/VyTLCJ8xeswWw007HCm3OphtTQXs/Vw2f/XyPlodR0RVgTz2v5s1VuH72oZnHPbZozpevAv2+ZhNTaMu9P5sjP2pNXDnheX936t9sHfzpZvq/l8uN/P5/O342zbOYxN2WvHfwjk56Vj9Pt68p9l+8ILL7zwwgsvvPDCCy+88D/Ef1tUGUyemHUzAAAAAElFTkSuQmCC",
            content:"Getting to a healthier place is about more than going to the gym. That’s why we offer personal training and classes when you’re here, and the right tools to keep you on track when you’re not."
        },

        Community:{
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnPAHKCQrP1vLKz1eJvyyYeKvw_19Usy4U-A&usqp=CAU",
            content:"You’re not just joining a gym. You’re joining a supportive community of like-minded people who are here to give you the encouragement you need."
        }

            
    }
        return <div class="jumbotron ">
                   <h1 className="d-flex justify-content-center">Why We</h1> <br/>

                <p className="d-flex justify-content-center">
                If you’re looking to join a supportive, welcoming gym community, with people of all
                 fitness levels who want to see you succeed, you’ve come to the right place.</p>




                <div className="container">
                <div class="row d-flex justify-content-center">

                    <div class="col-sm ">
                        <div class="card  WhyJoin-imags" >
                            <h5 class="text-center  card-title">Support</h5>
                            <img class="card-img-top" src={card.Support.img} alt="Cardcap" />

                                <div class="card-body">
                                    <p class="card-text">
                                        {card.Support.content}
                                    </p>
                                </div>
                            </div>
                    </div>

                    <div class="col-sm ">
                        <div class="card  WhyJoin-imags" >
                            <h5 class="text-center  card-title">Tools & Training</h5>
                            <img class="card-img-top" src={card.Tools.img} alt="Cardcap" />

                                <div class="card-body">
                                    <p class="card-text">
                                        {card.Support.content}
                                    </p>
                                </div>
                            </div>
                    </div>

                    <div class="col-sm ">
                        <div class="card  WhyJoin-imags" >
                            <h5 class="text-center  card-title">Community</h5>
                            <img class="card-img-top" src={card.Community.img} alt="Cardcap" />

                                <div class="card-body">
                                    <p class="card-text">
                                        {card.Community.content}
                                    </p>
                                </div>
                            </div>
                    </div>

                    </div>
                </div>
            </div>
}
            