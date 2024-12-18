import React from 'react'
import { Link } from 'react-router-dom'

function News() {
  return (
    <>
  <div className="banner">
    <div className="banner-title">
      <div className="avt">
        <img src="img/banner-gallery.jpg" alt="" />
      </div>
      <div className="desc">
        <h1>
          <span>News</span>
        </h1>
      </div>
    </div>
  </div>
  <div className="page-news bg-abe">
    <div className="container">
      <div className="news-box">
        <div className="list-news-k">
          <ul>
            <li>
              <div className="item">
                <div className="news-k" />
                <a href="" className="avt">
                  <img src="img/news-item-1.jpg" alt="" />
                </a>
                <div className="desc">
                  <div className="desc-midle">
                    <h3>
                      <a href="">When to book a hotel for the best price</a>
                    </h3>
                    <p>
                      Accommodation is one of the expenses many people have to
                      consider, as it is often quite expensive. Therefore,
                      maximum savings on room rates are always concerned. Hotel
                      prices are always changing, based on supply and demand. So
                      when is the best time to book?
                    </p>
                    <div className="btn-read-k">
                      <a href="https://vnexpress.net/thoi-diem-dat-phong-khach-san-de-co-gia-tot-nhat-4573014.html">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="news-k" />
                <a href="" className="avt">
                  <img src="img/news-item-2.jpg" alt="" />
                </a>
                <div className="desc">
                  <div className="desc-midle">
                    <h3>
                      <a href="">
                        cozynibi hotel shapes new investment trends for the
                        hotel industry
                      </a>
                    </h3>
                    <p>
                      cozynibi hotel is a small-scale hotel model with 10-100
                      rooms, owning a unique design style following new trends,
                      focusing on the personalized experience of visitors.
                      Boutique hotels have a streamlined investment and
                      operation management method, minimizing costs and
                      optimizing investors' cash flow. This product can be
                      operated independently or within a large hotel chain.
                    </p>
                    <div className="btn-read-k">
                      <a href="https://vnexpress.net/boutique-hotel-dinh-hinh-xu-huong-dau-tu-moi-cho-nganh-khach-san-4541378.html">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="news-k" />
                <a href="" className="avt">
                  <img src="img/news-item-3.jpg" alt="" />
                </a>
                <div className="desc">
                  <div className="desc-midle">
                    <h3>
                      <a href="">
                        Free hotel for residents to stay away from the storm
                      </a>
                    </h3>
                    <p>
                      Hundreds of people with unstable houses, students staying
                      in Da Nang and Quang Ngai can come to avoid storms in
                      hotels that are open for free.
                    </p>
                    <div className="btn-read-k">
                      <a href="https://vnexpress.net/khach-san-cho-nguoi-dan-o-tranh-bao-mien-phi-4516364.html">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="pagination">
          <ul>
            <li className="active">
              <a href="">1</a>
            </li>
            <li>
              <a href="">2</a>
            </li>
            <li>
              <a href="">3</a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-angle-right" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-angle-double-right" aria-hidden="true" />
              </a>
            </li>
          </ul>
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

export default News