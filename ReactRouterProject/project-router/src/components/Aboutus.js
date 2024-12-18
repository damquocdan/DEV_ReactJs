import React from 'react'
import { Link } from 'react-router-dom'

function Aboutus() {
    return (
        <>
            <div className="banner">
                <div className="banner-title">
                    <div className="avt">
                        <img src="img/banner-about-us.jpg" alt="" />
                    </div>
                    <div className="desc">
                        <h1>
                            <span>About Us</span>
                        </h1>
                    </div>
                </div>
            </div>
            <div className="about-intro bg-sena">
                <div className="container">
                    <h2>
                        Wellcome to
                        <b>Cozynibi Hotel</b>
                    </h2>
                    <div className="detail_">
                        <p className="text-center">
                            Belonging to the leading large real estate corporation in our country
                            COZYNIBI, COZYNIBI hotel and resort apparatus has and are always
                            expanding the scale and quality, reaching out to become one of the
                            leading hotel systems in our country. COZYNIBI's hotel and resort
                            system stretches across many famous tourist cities and provinces the
                            voice of the earth meet the resort needs of a large number of domestic
                            and foreign tourists.
                        </p>
                    </div>
                </div>
            </div>
            <div className="list-about-us">
                <div className="item-abu">
                    <div className="avt">
                        <img src="img/abu-1.jpg" alt="" />
                    </div>
                    <div className="desc">
                        <h3>comfortable rooms</h3>
                        <div className="content-wrapp">
                            <div className="detail">
                                <p>
                                    A comfortable and romantic mini hotel bedroom with a single bed
                                    for couples with full facilities, glass door design to bring a
                                    large viewing angle, convenient 2-layer curtain system to adjust
                                    the light for visitors to feel. comfortable topest.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item-abu">
                    <div className="avt">
                        <img src="img/abu-2.jpg" alt="" />
                    </div>
                    <div className="desc">
                        <h3>menu</h3>
                        <div className="content-wrapp">
                            <div className="detail">
                                <p>
                                    Common menus in restaurants, eateries, cafes, pubs.... whereby the
                                    waiter will present to diners a list of dishes and drinks so that
                                    diners can select, call, place (order) to be served.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item-abu">
                    <div className="avt">
                        <img src="img/abu-3.jpg" alt="" />
                    </div>
                    <div className="desc">
                        <h3>message and sauna</h3>
                        <div className="content-wrapp">
                            <div className="detail">
                                <p>
                                    massage and sauna are only effective and brings health benefits
                                    when applied correctly. So, look to the reputable sauna or beauty
                                    salon to perform the service in the safest and most effective way.
                                </p>
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

export default Aboutus