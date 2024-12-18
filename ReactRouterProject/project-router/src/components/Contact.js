import React from 'react'
import axiosUser from '../api/comments';
import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react';
function Contact() {
  const [name,setName]=useState('');
    const [tel,setTel]=useState('');
    const [email,setEmail]=useState('');
    const [address,setAddress]=useState('');
    const [title,setTitle]=useState('');
    const [comments,setComments]=useState('');
    const navigate=useNavigate();
    
    //xử lý khi thêm
    const createUser =async(event)=>{
        // giá trị trên form
        event.preventDefault()
        console.log(name,tel,email,address,title,comments);

        await axiosUser.post('users',{name,tel,email,address,title,comments})
        // trở lại danh sách user
        navigate('/')

    }
  return (
    <>
  <div className="banner">
    <div className="banner-title">
      <div className="avt">
        <img src="img/banner-contact.jpg" alt="" />
      </div>
      <div className="desc">
        <h1>
          <span>Contact</span>
        </h1>
      </div>
    </div>
  </div>
  <div className="contact-page">
    <div className="ple  bg-sena">
      <div className="container">
        <div className="left">
          <h2>COZYNOBI Hotel</h2>
          <div className="contact-address">
            <div className="item">
              <div className="icon">
                <img src="img/ct-loc.png" alt="" />
              </div>
              <div className="desc">
                <div className="desc-midle">
                  <p>90 Ben Pha, Ha Cau, Ha Dong, Ha Noi</p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src="img/ct-phone.png" alt="" />
              </div>
              <div className="desc">
                <div className="desc-midle">
                  <p>
                    <a href="">(024) .3783.5639</a> -{" "}
                    <a href="">(024) .3783.5640</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src="img/ct-fax.png" alt="" />
              </div>
              <div className="desc">
                <div className="desc-midle">
                  <p>(024) 3,783,5641</p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src="img/ct-mail.png" alt="" />
              </div>
              <div className="desc">
                <div className="desc-midle">
                <a>info@adcvietnam.net</a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src="img/ct-web.png" alt="" />
              </div>
              <div className="desc">
                <div className="desc-midle">
                  <p>
                    <a href="">www.adcvietnam.net</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="tit-Ct">
            <p>Get in touch with us</p>
          </div>
          <div className="form-contact-k">
            <form action="">
              <div className="row">
                <div className="col-2">
                  <input type="text" name='name' className="inp-c"onChange={(ev)=>setName(ev.target.value)} placeholder="Name" />
                </div>
                <div className="col-2">
                  <input type="number" name='tel' className="inp-c"onChange={(ev)=>setTel(ev.target.value)} placeholder="Tel" />
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <input type="email" name='email' className="inp-c"onChange={(ev)=>setEmail(ev.target.value)} placeholder="Email" />
                </div>
                <div className="col-2">
                  <input type="text" name='address' className="inp-c"onChange={(ev)=>setAddress(ev.target.value)} placeholder="Address" />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <input type="text" name='title' className="inp-c"onChange={(ev)=>setTitle(ev.target.value)} placeholder="Title" />
                </div>
                <div className="col">
                  <textarea
                    name="comments"
                    id=""
                    cols={30}
                    rows={10}
                    className="area-c"
                    onChange={(ev)=>setComments(ev.target.value)}
                    placeholder="Comments"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <button onClick={createUser}>Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.984638361172!2d105.78469205085867!3d20.993252885949055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acb433453903%3A0x89bf648fedc58921!2zNTggVOG7kSBI4buvdSwgVHJ1bmcgVsSDbiwgTmFtIFThu6sgTGnDqm0sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1570090288818!5m2!1svi!2s"
        width={600}
        height={450}
        frameBorder={0}
        style={{ border: 0 }}
        allowFullScreen=""
      />
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

export default Contact