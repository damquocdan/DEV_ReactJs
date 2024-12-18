import React from 'react'
import { Link } from 'react-router-dom'

function Service() {
    return (
        <>
            <div className="banner">
                <div className="banner-title">
                    <div className="avt">
                        <img src="img/banner-service.jpg" alt="" />
                    </div>
                    <div className="desc">
                        <h1>
                            <span>Service</span>
                        </h1>
                    </div>
                </div>
            </div>
            <div className="page-service bg-abe">
                <div className="container">
                    <div className="nav-slide-service">
                        <ul>
                            <li data-id={1} className="active-k">
                                <div className="item-ser">
                                    <div className="icon">
                                        <img src="img/icon/ser-1.png" alt="" />
                                    </div>
                                    <h3>
                                        <span>Massage &amp; Sauna</span>
                                    </h3>
                                </div>
                            </li>
                            <li data-id={2}>
                                <div className="item-ser">
                                    <div className="icon">
                                        <img src="img/icon/ser-2.png" alt="" />
                                    </div>
                                    <h3>
                                        <span>Charles Bar</span>
                                    </h3>
                                </div>
                            </li>
                            <li data-id={3}>
                                <div className="item-ser">
                                    <div className="icon">
                                        <img src="img/icon/ser-3.png" alt="" />
                                    </div>
                                    <h3>
                                        <span>Wedding</span>
                                    </h3>
                                </div>
                            </li>
                            <li data-id={4}>
                                <div className="item-ser">
                                    <div className="icon">
                                        <img src="img/icon/ser-4.png" alt="" />
                                    </div>
                                    <h3>
                                        <span>Meetings &amp; Events</span>
                                    </h3>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="content-service">
                        <div className="service-k" />
                        <div className="service-box">
                            <div className="item active" data-id={1}>
                                <div className="avt">
                                    <img src="img/sercvice-item-1.jpg" alt="" />
                                </div>
                                <div className="desc">
                                    <div className="desc-box">
                                        <h3>Massage &amp; Sauna</h3>
                                        <div className="desc-wrapp">
                                            <div className="detail_">
                                                <p>
                                                    massage and sauna are only effective and brings health
                                                    benefits when applied correctly. So, look to the reputable
                                                    sauna or beauty salon to perform the service in the safest
                                                    and most effective way.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item" data-id={2}>
                                <div className="avt">
                                    <img src="img/sercvice-item-2.jpg" alt="" />
                                </div>
                                <div className="desc">
                                    <div className="desc-box">
                                        <h3>Charles Bar</h3>
                                        <div className="desc-wrapp">
                                            <div className="detail_">
                                                <p>
                                                    The process of serving drinks and food is part of the
                                                    restaurant service process in general. This mission aims
                                                    to return the most satisfaction to customers. Helping
                                                    customers have an unforgettable dining experience at the
                                                    restaurant.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item" data-id={3}>
                                <div className="avt">
                                    <img src="img/sercvice-item-3.jpg" alt="" />
                                </div>
                                <div className="desc">
                                    <div className="desc-box">
                                        <h3>Wedding</h3>
                                        <div className="desc-wrapp">
                                            <div className="detail_">
                                                <p>
                                                    Surely every couple wants to have a romantic romantic
                                                    party for themselves. Without losing your own style. To
                                                    meet current trend requirements. Many wedding services at
                                                    the hotel sprang up like mushrooms. With a variety of
                                                    styles from classic to modern. Depends on the preferences
                                                    and personality of the customer.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item" data-id={4}>
                                <div className="avt">
                                    <img src="img/sercvice-item-4.jpg" alt="" />
                                </div>
                                <div className="desc">
                                    <div className="desc-box">
                                        <h3>Meetings &amp; Events</h3>
                                        <div className="desc-wrapp">
                                            <div className="detail_">
                                                <p>
                                                    All kinds of events appear in all areas of life: sports,
                                                    food, cosmetics, restaurants - hotels,... Among them,
                                                    businesses are the subjects that pay the most attention. .
                                                    for events to promote their own image.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
    <div className="container">
      <div className="footer">
        <div className="item">
          <div className="tit-F">
            <span>Contact Us</span>
          </div>
          <div className="loc">
            <p>
              <a href="https://www.google.com/maps/place/90+B%E1%BA%BFn+Ph%C3%A0,+H%C3%A0+C%E1%BA%A7u,+H%C3%A0+%C4%90%C3%B4ng,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@20.9671036,105.7828197,17z/data=!3m1!4b1!4m6!3m5!1s0x3135ad2a7e2a678b:0x3f15860c49177bda!8m2!3d20.9671036!4d105.7850137!16s%2Fg%2F11p67fhv78?hl=vi-VN">
                90 Ben Pha, Ha Cau, Ha Dong, Ha Noi
              </a>
            </p>
            <p />
          </div>
          <div className="phone">
            <p>
              <a href="tel:02437835639">(024).3783.5639</a>
            </p>
          </div>
          <div className="mail">
            <a>info@adcvietnam.net</a>
          </div>
          <div className="web">
            <a href="">www.adcvietnam.net</a>
          </div>
        </div>
        <div className="item">
          <div className="tit-F">
            <span>Accommodation</span>
          </div>
          <ul className="menu-F">
            <li>
              <Link to={'accomoodation'}>Double Room</Link>
            </li>
            <li>
              <Link to={'accomoodation'}>Triple Room</Link>
            </li>
            <li>
              <Link to={'accomoodation'}>Dorm Room</Link>
            </li>
          </ul>
        </div>
        <div className="item">
          <div className="tit-F">
            <span>Service</span>
          </div>
          <ul className="menu-F">
            <li>
              <Link to={'service'}>Massage &amp; Sauna</Link>
            </li>
            <li>
              <Link to={'service'}>Charles Bar</Link>
            </li>
            <li>
              <Link to={'service'}>Wedding</Link>
            </li>
            <li>
              <Link to={'service'}>Meetings &amp; Events</Link>
            </li>
          </ul>
        </div>
        <div className="item">
          <div className="tit-F">
            <span>Newsletter</span>
          </div>
          <div className="form-letter">
            <form action="">
              <input type="text" placeholder="Enter your email" />
              <button />
            </form>
          </div>
          <div className="social-F">
            <a href="">
              <i className="fa fa-facebook" aria-hidden="true" />
            </a>
            <a href="">
              <i className="fa fa-twitter" aria-hidden="true" />
            </a>
            <a href="">
              <i className="fa fa-youtube-play" aria-hidden="true" />
            </a>
            <a href="">
              <i className="fa fa-instagram" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
      <div className="kwang-d">
        <div className="left">
          <ul>
            <li>
              <Link to={'home'}>Home</Link>
            </li>
            <li>
              <Link to={'aboutus'}>About Us</Link>
            </li>
            <li>
              <Link to={'menu'}>Food Restaurant</Link>
            </li>
            <li>
              <Link to={'tourtravel'}>Tour Travel</Link>
            </li>
            <li>
              <Link to={'new'}>News</Link>
            </li>
            <li>
              <Link to={'gallery'}>Gallery</Link>
            </li>
            <li>
              <Link to={'contact'}>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="right">
          <p>Copyright © COZYNIBI HITEL. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </footer>
            <div id="fix-hotline">
                <a href="">
                    <img src="img/icon/hotline-fix.png" alt="" />
                </a>
            </div>
            <div className="back-top">
                <img src="img/icon/back-top.png" alt="" />
            </div>
        </>

    )
}

export default Service