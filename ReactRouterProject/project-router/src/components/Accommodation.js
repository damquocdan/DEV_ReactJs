import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

function Accommodation() {
    const listzoom = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                listzoom: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                listzoom: {
                    slidesToShow: 2
                }
            }
        ]
    };
    return (
        <>
            <div className="banner">
                <div className="banner-title">
                    <div className="avt">
                        <img src="img/banner-about-us.jpg" alt="" />
                    </div>
                    <div className="desc">
                        <h1>
                            <span>accommodation</span>
                        </h1>
                    </div>
                </div>
            </div>
            <div className="accommodation  bg-abe">
                <div className="container">
                    <div className="accom-custom">
                        <div className="accom-content">
                            <div className="item active" data-id={1}>
                                <a href="" className="avt">
                                    <img src="img/accom-slide-1.jpg" alt="" />
                                </a>
                                <div className="desc">
                                    <div className="desc-midle">
                                        <h3>
                                            <a href="">Double Room</a>
                                        </h3>
                                        <p>
                                            Double room is a room usually for 2 people and mainly
                                            customers are couples or couples traveling together.
                                            Therefore, the space will often be romantic, modern and
                                            comfortable. Furniture often has a harmonious combination to
                                            create a uniformity for the whole space of the room. It is
                                            possible to combine more bedside cabinets and tables and
                                            chairs for guests to sit and talk to each other.
                                        </p>
                                        <div className="btn-read-m">
                                            <a href="./accmoreE.html">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item" data-id={2}>
                                <a href="" className="avt">
                                    <img src="img/accom-sm-2.jpg" alt="" />
                                </a>
                                <div className="desc">
                                    <div className="desc-midle">
                                        <h3>
                                            <a href="">Triple Room</a>
                                        </h3>
                                        <p>
                                            Triple standard rooms are usually located on a low floor, with
                                            no view or less beautiful view. Basic room furniture includes:
                                            bed, wardrobe, bedside tab, television and air conditioner.
                                            The room is suitable for short-term tour groups, staying
                                            overnight. The cost of the room is quite cheap, the lowest in
                                            the price list for 3 people in the hotel.
                                        </p>
                                        <div className="btn-read-m">
                                            <a href="./accmoreE.html">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item" data-id={3}>
                                <a href="" className="avt">
                                    <img src="img/accom-sm-3.jpg" alt="" />
                                </a>
                                <div className="desc">
                                    <div className="desc-midle">
                                        <h3>
                                            <a href="">Triple Room</a>
                                        </h3>
                                        <p>
                                            Triple standard rooms are usually located on a low floor, with
                                            no view or less beautiful view. Basic room furniture includes:
                                            bed, wardrobe, bedside tab, television and air conditioner.
                                            The room is suitable for short-term tour groups, staying
                                            overnight. The cost of the room is quite cheap, the lowest in
                                            the price list for 3 people in the hotel.
                                        </p>
                                        <div className="btn-read-m">
                                            <a href="./accmoreE.html">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item" data-id={4}>
                                <a href="" className="avt">
                                    <img src="img/accom-sm-4.jpg" alt="" />
                                </a>
                                <div className="desc">
                                    <div className="desc-midle">
                                        <h3>
                                            <a href="">Dorm Room</a>
                                        </h3>
                                        <p>
                                            Although the price of a single room depends on many different
                                            factors, in general, single rooms are quite cheap compared to
                                            other room types. Depending on the intended use and budget,
                                            you can easily rent a single room for only a few hundred
                                            thousand VND/night. Many hotels also offer cheap rates
                                            including breakfast. The single room cleaning service is also
                                            quite fast and clean. When you are alone, you also have more
                                            privacy.
                                        </p>
                                        <div className="btn-read-m">
                                            <a href="./accmoreE.html">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accom-nav">
                            <div className="slide">
                                <ul>
                                    <Slider {...listzoom}>
                                        <li className="active" data-id={1}>
                                            <a href="javascript:void(0)">
                                                <div className="avt">
                                                    <img src="img/accom-sm-1.jpg" alt="" />
                                                </div>
                                                <div className="desc">
                                                    <b>Double Room</b>
                                                    <span />
                                                </div>
                                            </a>
                                        </li>
                                        <li data-id={2}>
                                            <a href="javascript:void(0)">
                                                <div className="avt">
                                                    <img src="img/accom-sm-2.jpg" alt="" />
                                                </div>
                                                <div className="desc">
                                                    <b>Triple Room</b>
                                                    <span>3 Bed</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li data-id={3}>
                                            <a href="javascript:void(0)">
                                                <div className="avt">
                                                    <img src="img/accom-sm-3.jpg" alt="" />
                                                </div>
                                                <div className="desc">
                                                    <b>Triple Room</b>
                                                    <span>2 Bed</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li data-id={4}>
                                            <a href="javascript:void(0)">
                                                <div className="avt">
                                                    <img src="img/accom-sm-4.jpg" alt="" />
                                                </div>
                                                <div className="desc">
                                                    <b>Dorm Room</b>
                                                    <span />
                                                </div>
                                            </a>
                                        </li>
                                    </Slider>
                                </ul>
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

export default Accommodation