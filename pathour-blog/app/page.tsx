// app/page.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      
      {/* HERO SECTION */}
      <div className="hero-wrap js-fullheight" style={{ backgroundImage: `url('/images/bg.jpg')` }}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-center" data-scrollax-parent="true">
            <div className="col-md-7 ftco-animate">
              <span className="subheading">Welcome to PATHOUR</span>
              <h1 className="mb-4">Authentic Small Group Trips in Indonesia</h1>
              <p className="caps">Travel to the any corner of the world, without going around in circles</p>
            </div>
            <a href="https://www.youtube.com/embed/_IzOqfrLc0o" className="icon-video popup-vimeo d-flex align-items-center justify-content-center mb-4">
              <span className="fa fa-play"></span>
            </a>
          </div>
        </div>
      </div>

      {/* Tambahkan semua section seperti di `index.html`... */}

      {/* Search Destination Section */}
      <section className="search-options">
        <div className="search-box-group">
          {/* Destination */}
          <div className="search-box">
            <i className="fa-solid fa-compass" />
            <input type="text" placeholder="Where to?" id="whereplaces" />
          </div>

          {/* Month Select */}
          <div className="search-box">
            <i className="fa-solid fa-calendar" />
            <select>
              <option value="">Month</option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>
          </div>

          {/* Travel Type Select */}
          <div className="search-box">
            <i className="fa-solid fa-map-pin" />
            <select>
              <option value="">Travel Type</option>
              <option>Sea</option>
              <option>Hiking</option>
              <option>Culture</option>
            </select>
          </div>

          {/* Submit */}
          <div className="search-box submit">
            <button type="submit">FIND NOW</button>
          </div>
        </div>
      </section>

      <section className="ftco-section services-section">
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-6 order-md-last heading-section pl-md-5 ftco-animate d-flex align-items-center">
              <div className="w-100">
                <span className="subheading">Travel Together, Discover Indonesia</span>
                <h2 className="mb-4">Pathour, Your Journey Starts Here</h2>
                <p>
                  Pathour connects solo travelers into vibrant group adventures across Indonesia. From beaches to temples,
                  you’ll explore together—safely, meaningfully, and with lasting connections.
                </p>
                <p>Join a community where travel is more than a trip—it’s a shared story.</p>
                <p>
                  <a href="#" className="btn btn-primary py-3 px-4">Explore Trips</a>
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12 col-lg-6 d-flex align-self-stretch ftco-animate">
                  <div className="services services-1 color-1 d-block img" style={{ backgroundImage: "url('/images/services-1.jpg')" }}>
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-paragliding"></span>
                    </div>
                    <div className="media-body">
                      <h3 className="heading mb-3">Exciting Activities</h3>
                      <p>Handpicked adventures for every kind of explorer.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 col-lg-6 d-flex align-self-stretch ftco-animate">
                  <div className="services services-1 color-2 d-block img" style={{ backgroundImage: "url('/images/services-2.jpg')" }}>
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-route"></span>
                    </div>
                    <div className="media-body">
                      <h3 className="heading mb-3">Travel Arrangements</h3>
                      <p>We organize everything so you can enjoy more.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 col-lg-6 d-flex align-self-stretch ftco-animate">
                  <div className="services services-1 color-3 d-block img" style={{ backgroundImage: "url('/images/services-3.jpg')" }}>
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-tour-guide"></span>
                    </div>
                    <div className="media-body">
                      <h3 className="heading mb-3">Private Guides</h3>
                      <p>Local experts to lead your way.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 col-lg-6 d-flex align-self-stretch ftco-animate">
                  <div className="services services-1 color-4 d-block img" style={{ backgroundImage: "url('/images/services-4.jpg')" }}>
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-map"></span>
                    </div>
                    <div className="media-body">
                      <h3 className="heading mb-3">Manage Destinations</h3>
                      <p>Trusted trips to the best places in Indonesia.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />


    </>
  );
}
