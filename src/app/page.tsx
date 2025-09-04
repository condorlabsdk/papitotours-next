"use client"

import { useState } from "react";

type ChatType = {
  id: string;
  name: string;
  messages: Array<[]>;
}

export default function Home() {
  const [activeChat, setActiveChat] = useState<Boolean | null>(false);

  return (
    <main className="main">
      <header className="header justify-between flex p-4">
        <div className="header-logo flex justify-between">
          <a className="">Papito Tours Cph</a>

          <div className="social">
            <a>IG</a>
            <a>FB</a>
            <a>Tk</a>
          </div>
        </div>
        <nav className="header-nav">
          <ul className="flex justify-end">
            <li>
              <a className="header-link" href="">Our Tours</a>
            </li>
            <li>
              <a className="header-link" href="">Contact</a>
            </li>
            <li>
              <a className="header-link" href="">Blog</a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="banner h-80">
        <div className="container flex flex-col items-center justify-center">
          <h1 className="banner-title stext-xl">Palacio Histórico de AmalienBorg</h1>
          <p className="banner-text">
            Descubre los edificios más emblemáticos de la ciudad, como El Palacio de Christianborg,la postal de la ciudad Nyhavn y el Palacio de Amalienborg.s
          </p>
        </div>
      </section>

      <section className="tours">
        <div className="container flex flex-col justify-center items-center">
          <h2 className="tours-title">
            Looking for a tour in Copenhagen?
          </h2>
          <p className="tours-description">
            Check out the following experiences
          </p>

          <div className="tour-items flex justify-between">

            <figure className="tour-item">
              <img src="https://static.wixstatic.com/media/41187b_29a1c8d892b24642b2a812d019107f58~mv2.jpg/v1/fill/w_270,h_319,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/nick-karvounis-3_ZGrsirryY-unsplash.jpg" alt="" className="tour-item-img" />
              <figcaption className="tour-item-caption">
                <h4 className="tour-item-title">
                  Copenhagen Historic Center
                </h4>
                <p className="tour-item-description">
                  Discover the city's most iconic buildings , including Christiansborg Palace, the city's iconic Nyhavn, Amalienborg Palace, and much more! The perfect introduction for newcomers.
                </p>
              </figcaption>
            </figure>
            <figure className="tour-item">
              <img src="https://static.wixstatic.com/media/41187b_a9c45962da9b42759bc77088a6ef86da~mv2.png/v1/crop/x_167,y_0,w_941,h_1102/fill/w_254,h_303,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202024-07-05%20at%2009_12_25.png" alt="" className="tour-item-img" />
              <figcaption className="tour-item-caption">
                <h4 className="tour-item-title">
                  Copenhagen: Luxury Boat Getaway
                </h4>
                <p className="tour-item-description">
                  Glide across the water in complete silence, leaving the hustle and bustle of the city behind as you take in the majestic scenery of Copenhagen's harbor on one of our luxury vessels.
                </p>
              </figcaption>
            </figure>
            <figure className="tour-item">
              <img src="https://static.wixstatic.com/media/41187b_d03583dfe8714351956312dc4793d8e5~mv2.jpg/v1/crop/x_0,y_157,w_960,h_1124/fill/w_254,h_303,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/eremitageslotte-unesco.jpg" alt="" className="tour-item-img" />
              <figcaption className="tour-item-caption">
                <h4 className="tour-item-title">            
                  Deer Park by Bike
                </h4>
                <p className="tour-item-description">
                  Enjoy a unique experience in Dyrehaven. Our tour will take you along off-the-beaten-track paths, where you can admire local wildlife, such as deer, and enchanting landscapes.
                </p>
              </figcaption>
            </figure>
            <figure className="tour-item">
              <img src="https://static.wixstatic.com/media/41187b_63da147bc9294f43b7485b316a5eb764~mv2.jpeg/v1/crop/x_274,y_0,w_533,h_624/fill/w_254,h_303,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/unnamed%20(1).jpeg" alt="" className="tour-item-img" />
              <figcaption className="tour-item-caption">
                <h4 className="tour-item-title">
                  Excursion - Malmö, Sweden
                </h4>
                <p className="tour-item-description">
                  This beautiful Swedish city, the third largest in the country, has become a must-see tourist destination for years if you're visiting Copenhagen. Don't miss it!
                </p>
              </figcaption>
            </figure>

          </div>

        </div>
      </section>
    </main>
  );
}
