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
            <a>TikTok</a>
          </div>
        </div>
        <nav className="header-nav">
          <ul className="flex justify-around">
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
    </main>
  );
}
