import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import { FaFacebookMessenger, FaMailBulk, FaPeopleCarry } from "react-icons/fa";

class MapContainer extends Component {
  render() {
    return (
      <>
        <div className="">
          <div>
            <Map
              centerAroundCurrentLocation={true}
              google={this.props.google}
              zoom={14}
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                zIndex: "-1",
              }}
              initialCenter={{
                lat: 27.717245,
                lng: 85.323959,
              }}
            />
          </div>

          <div className="h-screen flex flex-col items-center justify-end sm:py-16  xl:px-28 bottom-px">
            <div className="rounded-sm p-5 grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-9 gap-5 bg-white">
              <div className="col-span-3">
                <div className="flex items-center space-x-3">
                  <span className="w-5 h-0.5 bg-red-500" />
                  <span className="uppercase text-sm">OUR OFFICES</span>
                </div>
                <div className=" text-xl sm:text-3xl font-bold ">
                  <p className="text-sky-900 text-left">Get in Touch</p>
                </div>
                <p className="text-sm">
                  Come and visit our quarters or simply send us an email anytime
                  you want. We are open to all suggestions from our clients.
                </p>
              </div>

              <div className="flex col-span-3 lg:col-span-2 space-x-2 items-center">
                <FaFacebookMessenger className="w-16 h-16 lg:w-20 lg:h-20 text-red-500" />
                <div>
                  <h6 className=" text-2xl text-sky-900 font-bold">Address</h6>
                  <p>Bloomsbury Square, London WC1B 4EA</p>
                </div>
              </div>
              <div className="flex col-span-3 lg:col-span-2  space-x-2 items-center">
                <FaPeopleCarry className="w-16 h-16 lg:w-20 lg:h-20 text-red-500" />
                <div>
                  <h6 className=" text-2xl text-sky-900 font-bold">Call us</h6>
                  <p>9898989989</p>
                  <p>98989898989</p>
                </div>
              </div>
              <div className="flex col-span-3 lg:col-span-2 space-x-2 items-center">
                <FaMailBulk className="w-16 h-16 lg:w-20 lg:h-20 text-red-500" />
                <div>
                  <h6 className=" text-2xl text-sky-900 font-bold">Email</h6>
                  <p>info@lumens.com</p>
                  <p>info@lumens.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCNYAkCtpJKJklz78SKMdZg_BvWyz7Q3mM",
})(MapContainer);
