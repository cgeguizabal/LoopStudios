import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState("close");
  const [menuClass, setMenuClass] = useState("hidden");

  const handleMenu = () => {
    setMenuOpen(menuOpen === "close" ? "open" : "close");
    setMenuClass(menuClass === "hidden" ? "flex" : "hidden");
  };
  return (
    <>
      {/* HERO SECTION */}

      <section id="hero">
        {/* HERO CONTAINER */}
        <div className="container max-w-6xl mx-auto px-6 py-12 ">
          {/* NAV/LOGO */}
          <nav className="flex items-center justify-between font-bold text-white">
            {/* LOGO */}
            <img src="/logo.svg" alt="" />
            {/* MENU */}
            <div className="hidden h-10 font-alata md:flex md:space-x-8">
              <div className="group">
                <a href="#">About</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <a href="#">Careers</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <a href="#">Events</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <a href="#">Products</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <a href="#">Support</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
            </div>
            {/* @TO DO HAMBURGER BUTTON */}

            <div className="md:hidden">
              <button
                id="menu-btn"
                type="button"
                className={`${menuOpen} z-40 block hamburger md:hidden focus:outline-none`}
                onClick={() => {
                  handleMenu();
                }}
              >
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
              </button>
            </div>
          </nav>
          {/* @TO DO -MOBILE MENU */}
          <div
            id="menu"
            class={`absolute top-0 bottom-0 left-0 ${menuClass} flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black`}
          >
            <a href="#" class="hover:text-pink-500">
              About
            </a>
            <a href="#" class="hover:text-pink-500">
              Careers
            </a>
            <a href="#" class="hover:text-pink-500">
              Events
            </a>
            <a href="#" class="hover:text-pink-500">
              Products
            </a>
            <a href="#" class="hover:text-pink-500">
              Support
            </a>
          </div>
          <div
            className="max-w-lg mt-32 mb-32 p-4 font-sans text-4xl
           text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl"
          >
            Immersive experiences that deliver
          </div>
        </div>
      </section>
      {/* FEATURE SECTION */}
      <section id="feature">
        {/* Feature CONTAINER */}
        <div className="relative container flex flex-col max-w-6xl mx-auto my-32 px-6 text-gray-900 md:flex-row md:px-0">
          <img src="/desktop/image-interactive.jpg" alt="" />
          {/* Text Container */}
          <div className="top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20">
            <h2 className="max-w-lg mt-10 mb-6 font-sans text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left">
              The leader in interactive VR
            </h2>
            <p className="max-w-md text-center md:text-left">
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </section>

      {/* CREATIONS SECTION */}
      <section id="creations">
        {/* CREATIONS CONTAINER */}
        <div className="container max-w-6xl mx-auto my-32 px-5 text-gray-900 md:px-0">
          <div className="flex justify-center mb-20 md:justify-between">
            <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
              Our Creations
            </h2>
            <button className="hidden btn md:block">See All</button>
          </div>
          {/* ITEMS CONTAINER*/}
          <div className="item-container">
            {/* ITEM 1 */}
            <div className="group item">
              {/* DESKTOP */}
              <img
                src="desktop/image-deep-earth.jpg"
                alt=""
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              {/* MOBILE */}
              <img
                src="mobile/image-deep-earth.jpg"
                alt=""
                className="w-full md:hidden"
              />
              {/* ITEM GRADIENT */}
              <div className="item-gradient"></div>
              {/* ITEM TEXT */}
              <h5>DEEP EARTH</h5>
            </div>
            {/* ITEM 2*/}
            <div className="group item">
              {/* DESKTOP */}
              <img
                src="desktop/image-night-arcade.jpg"
                alt=""
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              {/* MOBILE */}
              <img
                src="mobile/image-night-arcade.jpg"
                alt=""
                className="w-full md:hidden"
              />
              {/* ITEM GRADIENT */}
              <div className="item-gradient"></div>
              {/* ITEM TEXT */}
              <h5>NIGHT ARCADE</h5>
            </div>
            {/* ITEM 3 */}
            <div className="group item">
              {/* DESKTOP */}
              <img
                src="desktop/image-soccer-team.jpg"
                alt=""
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              {/* MOBILE */}
              <img
                src="mobile/image-soccer-team.jpg"
                alt=""
                className="w-full md:hidden"
              />
              {/* ITEM GRADIENT */}
              <div className="item-gradient"></div>
              {/* ITEM TEXT */}
              <h5>SOCCER TEAM</h5>
            </div>
            {/* ITEM 4 */}
            <div className="group item">
              {/* DESKTOP */}
              <img
                src="desktop/image-grid.jpg"
                alt=""
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              {/* MOBILE */}
              <img
                src="mobile/image-grid.jpg"
                alt=""
                className="w-full md:hidden"
              />
              {/* ITEM GRADIENT */}
              <div className="item-gradient"></div>
              {/* ITEM TEXT */}
              <h5>THE GRID</h5>
            </div>
          </div>
          {/* ITEM CONTAINER */}
          <div className="item-container mt-10">
            {/* ITEM 1 */}
            <div className="group item">
              {/* DESKTOP */}
              <img
                src="desktop/image-from-above.jpg"
                alt=""
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              {/* MOBILE */}
              <img
                src="mobile/image-from-above.jpg"
                alt=""
                className="w-full md:hidden"
              />
              {/* ITEM GRADIENT */}
              <div className="item-gradient"></div>
              {/* ITEM TEXT */}
              <h5>FROM UP ABOVE VR</h5>
            </div>
            {/* ITEM 2*/}
            <div className="group item">
              {/* DESKTOP */}
              <img
                src="desktop/image-pocket-borealis.jpg"
                alt=""
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              {/* MOBILE */}
              <img
                src="mobile/image-pocket-borealis.jpg"
                alt=""
                className="w-full md:hidden"
              />
              {/* ITEM GRADIENT */}
              <div className="item-gradient"></div>
              {/* ITEM TEXT */}
              <h5>THE CURIOSITY</h5>
            </div>
            {/* ITEM 3 */}
            <div className="group item">
              {/* DESKTOP */}
              <img
                src="desktop/image-fisheye.jpg"
                alt=""
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              {/* MOBILE */}
              <img
                src="mobile/image-fisheye.jpg"
                alt=""
                className="w-full md:hidden"
              />
              {/* ITEM GRADIENT */}
              <div className="item-gradient"></div>
              {/* ITEM TEXT */}
              <h5>MAKE IT FISHEYE</h5>
            </div>
            {/* ITEM 4 */}
            <div className="group item">
              {/* DESKTOP */}
              <img
                src="desktop/image-grid.jpg"
                alt=""
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              {/* MOBILE */}
              <img
                src="mobile/image-grid.jpg"
                alt=""
                className="w-full md:hidden"
              />
              {/* ITEM GRADIENT */}
              <div className="item-gradient"></div>
              {/* ITEM TEXT */}
              <h5>THE GRID</h5>
            </div>
          </div>
          {/* BOTTOM BUTTON CONTAINER */}
          <div className="flex justify-center mt-10 md:hidden">
            <button className="btn w-full md:hidden">See All</button>
          </div>
        </div>
      </section>
      <footer class="bg-black">
        {/* <!-- Container --> */}
        <div class="container max-w-6xl py-10 mx-auto">
          {/* <!-- Footer Flex Container --> */}
          <div class="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
            {/* <!-- Menu & Logo Container --> */}
            <div class="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
              {/* <!-- Logo --> */}
              <div class="h-8">
                <img src="/logo.svg" alt="" class="w-44 md:ml-3" />
              </div>
              {/* <!-- Menu Container --> */}
              <div class="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
                {/* <!-- Item 1 --> */}
                <div class="h-10 group">
                  <a href="#">About</a>
                  <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                {/* <!-- Item 2 --> */}
                <div class="h-10 group">
                  <a href="#">Careers</a>
                  <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                {/* <!-- Item 3 --> */}
                <div class="h-10 group">
                  <a href="#">Events</a>
                  <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                {/* <!-- Item 4 --> */}
                <div class="h-10 group">
                  <a href="#">Products</a>
                  <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                {/* <!-- Item 5 --> */}
                <div class="h-10 group">
                  <a href="#">Support</a>
                  <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
              </div>
            </div>

            {/* <!-- Social & Copy Container --> */}
            <div class="flex flex-col items-start justify-between space-y-4 text-gray-500">
              {/* <!-- icons Container --> */}
              <div class="flex items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0">
                {/* <!-- Icon 1 --> */}
                <div class="h-8 group">
                  <a href="#">
                    <img src="/icon-facebook.svg" alt="" class="h-6" />
                  </a>
                </div>
                {/* <!-- Icon 2 --> */}
                <div class="h-8 group">
                  <a href="#">
                    <img src="/icon-twitter.svg" alt="" class="h-6" />
                  </a>
                </div>
                {/* <!-- Icon 3 --> */}
                <div class="h-8 group">
                  <a href="#">
                    <img src="/icon-pinterest.svg" alt="" class="h-6" />
                  </a>
                </div>
                {/* <!-- Icon 4 --> */}
                <div class="h-8 group">
                  <a href="#">
                    <img src="/icon-instagram.svg" alt="" class="h-6" />
                  </a>
                </div>
              </div>

              {/* <!-- Copy --> */}
              <div class="font-bold">
                &copy; 2022 Loopstudios. All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
