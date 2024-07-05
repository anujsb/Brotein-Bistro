const Footer = () => {
  return (
    <div className="snap-end">
      <div className="relative bg-blueGray-200 pt-8 pb-6">
        <div className="container  md:px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4 mb-6 lg:mb-0">
              <h4 className="text-3xl font-semibold text-blueGray-700">
                Brotein Bistro
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                The Muscle Friendly Bistro
              </h5>
              <div className="mt-6 flex flex-wrap lg:mb-0 mb-6">
                <a
                  href="https://www.linkedin.com/company/broteinbistro/"
                  className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2 mb-2"
                // type="button"

                >
                  <img className="w-5" src="/linkedin.svg" />
                </a>
                <a
                  href="https://www.instagram.com/broteinbistro_nashik/"
                  className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2 mb-2"
                // type="button"

                >
                  <img className="w-5" src="/insta.svg" />
                </a>
                <a
                  href="https://x.com/21bubblesweb"
                  className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2 mb-2"
                // type="button"

                >
                  <img className="w-5" src="/x.svg" />
                </a>
                {/* <button
                  className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2 mb-2"
                  type="button"
                >
                  <i className="fab fa-github"></i>
                </button> */}
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top md:mb-6 lg:mb-6 sm:mb-2">
                <div className="w-full sm:w-6/12 lg:w-4/12 px-4 ml-auto mb-6 sm:mb-0">
                  {/* <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Useful Links
                  </span> */}
                  <ul className="list-unstyled">
                    <li>
                      {/* <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        About Us
                      </a> */}
                    </li>
                    {/* <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Blog
                      </a>
                    </li> */}
                    {/* <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.github.com/creativetimofficial?ref=njs-profile"
                      >
                        Github
                      </a>
                    </li> */}
                    {/* <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                      >
                        Free Products
                      </a>
                    </li> */}
                  </ul>
                </div>
                <div className="w-full sm:w-6/12 lg:w-4/12 px-4">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      {/* <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                      >
                        MIT License
                      </a> */}
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © <span id="get-current-year">2024</span>
                <a
                  href="https://21bubbles.com/"
                  className="text-blueGray-500 hover:text-gray-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  brotein bistro by{" "}
                </a>
                <a
                  href="https://21bubbles.com/"
                  className="text-blueGray-500 hover:text-blueGray-800"
                >
                  21bubbles
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
