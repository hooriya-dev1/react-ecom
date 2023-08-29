import React from 'react'
import a6 from '../images/a6.jpg'
import blog1 from '../images/blog-1.jpg'
import blog2 from '../images/blog-2.jpg'
import blog3 from '../images/blog-3.jpg'
import blog4 from '../images/blog-4.jpg'

function about() {
  return (
   <>

  <section className="about-us p-5">
    <div className="row">
      <div className="col-md-6">
        <img src={a6} alt="" className='img-fluid p-5' />
      </div>
      <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
        <h1><b>Who are we?</b></h1>
        <p className="card-text mb-3">Welcome to Shipshop Brand, where passion for quality meets the joy of shopping. We are a dedicated team of enthusiasts committed to curating a diverse selection of premium products that cater to your every need. Our mission is to provide you with a seamless and delightful online shopping experience, backed by top-notch customer service. Join us in exploring a world of innovation, style, and convenience, all in one place.</p>
        <p className="card-text">At Shipshop Brand, we're not just an online store we're your partners in finding the extraordinary. Our journey began with a simple belief: that shopping should be an adventure filled with inspiration and delight. Guided by this vision, we handpick each product to tell a story, to spark joy, and to elevate your lifestyle. We're more than a platform; we're a community of trendsetters and tastemakers, united by the thrill of discovering remarkable treasures. Join us in redefining the way you shop, as we invite you to experience a world where imagination knows no bounds.</p>
      </div>
    </div>
  </section>
   

  <section className="abouts p-5">
    <div className="container-xxl">
      <div className="row">
        <div className="col-12 d-flex flex-column align-items-center">
          <h1 className='mb-3'>What our customers say...</h1>
          <p className='mb-4'>Our customers never miss a bit on providing feedback</p>
        </div>
        
        <div className="col-12 col-md-6 p-3">
              <div className="card mb-3">
                <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog1} className="img-fluid rounded-start" alt="..." />
                  </div>
                   <div className="col-md-8">
                  <div className="card-body">
                  <h5 className="card-title">Marvel Clein</h5>
                  <p className="card-text mb-3">I'm blown away by the attention to detail at Shipshop Brand. The website is easy to navigate, the checkout process is smooth, and the product I received is exactly as described. It's evident that they prioritize customer satisfaction.</p>
                  <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                 </div>
                 </div>
                 </div>
             </div>
          </div>
        </div>
        <div className="col-12 col-md-6 p-3">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={blog2} alt="" className='img-fluid rounded-start' />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Melisa Ivy</h5>
                      <p className="card-text mb-3">Kudos to Shipshop Brand for delivering top-notch quality. I've been searching for eco-friendly options, and they have an impressive selection. The product I bought is not only environmentally conscious but also stylish. I'm a happy customer!</p>
                      <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 p-3">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={blog3} alt="" className='img-fluid rounded-start' />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Tristian Ann</h5>
                      <p className="card-text mb-3">Unique products, exceptional quality, and outstanding service that's what I associate with Shipshop Brand. From trendy fashion to innovative gadgets, they have it all. My recent purchase was a hit, and I'm excited to explore more in the future.</p>
                      <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 p-3">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={blog4} alt="" className='img-fluid rounded-start' />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Phillip Omosh</h5>
                      <p className="card-text mb-3">I'm amazed by how Shipshop Brand manages to combine style and functionality seamlessly. The product I ordered not only looks great but also serves its purpose perfectly. Shopping here feels like investing in both fashion and practicality.</p>
                      <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 p-3">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={blog2} alt="" className='img-fluid rounded-start' />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Melisa Ivy</h5>
                      <p className="card-text mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit <br />. Doloribus maxime consequatur, ipsam architecto incidunt volup <br />tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.</p>
                      <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 p-3">
              <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog1} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Marvel Clein</h5>
                    <p className="card-text mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit <br />. Doloribus maxime consequatur, ipsam architecto incidunt volup <br />tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.</p>
                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                  </div>
                  </div>
              
                </div>
              </div>
            </div>
            </div>
            </section>
            













   

   
   
   
   
   
   
   
   
   </>

  )

   
  }

  export default about;


 

