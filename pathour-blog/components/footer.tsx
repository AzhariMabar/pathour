'use client'
import { useEffect, useState } from 'react';




export default function Footer() {
  const [year, setYear] = useState<number>(new Date().getFullYear());
  
  return (
    <footer className="ftco-footer bg-bottom ftco-no-pt">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md pt-5">
            <div className="ftco-footer-widget pt-md-5 mb-4">
              <h2 className="ftco-heading-2">About</h2>
              <p>Pathour is a travel community & trip organizer platform focused on meaningful journeys with new people, not just destinations.</p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft">
                <li className=""><a href="https://www.tiktok.com/@pathour.com" target="_blank"><span className="fab fa-tiktok"></span></a></li>
                <li className=""><a href="#"><span className="fab fa-facebook"></span></a></li>
                <li className=""><a href="https://www.instagram.com/pathour.id/" target="_blank"><span className="fab fa-instagram"></span></a></li>
              </ul>
            </div>
          </div>
          <div className="col-md pt-5 ">
            <div className="ftco-footer-widget pt-md-5 mb-4 ml-md-5">
              <h2 className="ftco-heading-2">Infromation</h2>
              <ul className="list-unstyled">
                <li><a href="#" className="py-2 d-block">Online Enquiry</a></li>
                <li><a href="#" className="py-2 d-block">General Enquiries</a></li>
                <li><a href="#" className="py-2 d-block">Booking Conditions</a></li>
                <li><a href="#" className="py-2 d-block">Privacy and Policy</a></li>
                <li><a href="#" className="py-2 d-block">Refund Policy</a></li>
                <li><a href="#" className="py-2 d-block">Call Us</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md pt-5 ">
            <div className="ftco-footer-widget pt-md-5 mb-4">
              <h2 className="ftco-heading-2">Experience</h2>
              <ul className="list-unstyled">
                <li><a href="#" className="py-2 d-block">Adventure</a></li>
                <li><a href="#" className="py-2 d-block">Hotel and Restaurant</a></li>
                <li><a href="#" className="py-2 d-block">Beach</a></li>
                <li><a href="#" className="py-2 d-block">Nature</a></li>
                <li><a href="#" className="py-2 d-block">Camping</a></li>
                <li><a href="#" className="py-2 d-block">Party</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md pt-5 ">
            <div className="ftco-footer-widget pt-md-5 mb-4">
              <h2 className="ftco-heading-2">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li><span className="icon fa fa-map-marker"></span><span className="text">Bandung Indonesia, INA</span></li>
                  <li><a href="tel:+6285129922233"><span className="icon fa fa-phone"></span><span className="text">+62 851 2992 2233</span></a></li>
                  <li><a href="mailto:cs@pathour.com"><span className="icon fa fa-paper-plane"></span><span className="text">cs@pathour.com</span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              Copyright &copy; {year} All rights reserved | This template is made with{' '}
              <i className="fa fa-heart" aria-hidden="true"></i> by{' '}
              <a href="https://pathour.com" target="_blank" rel="noopener noreferrer">PATHOUR</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
