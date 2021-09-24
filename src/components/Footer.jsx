import React from 'react';
import Link from '@docusaurus/Link';

import DyteLogo from './DyteLogo';
import {
  Github,
  Linkedin,
  Medium,
  Twitter,
} from '@styled-icons/boxicons-logos';

export default function Footer(props) {
  return (
    <footer className="lg:px-12 py-6 bg-background-100">
      <div className="flex flex-col items-start w-full max-w-6xl p-4 md:px-12 mx-auto">
        <div className="flex flex-col items-start space-y-4">
          <Link href="https://dyte.io">
            <DyteLogo className="h-10" />
          </Link>
          <p className="text-sm text-text-100 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            illum. Facere hic cupiditate molestiae, illum perferendis maxime
            quod nisi, unde error voluptatibus nobis rerum ad. Mollitia magnam
            deserunt nulla vel.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row w-full mt-8">
          <div className="flex-1 flex flex-col items-start">
            <div className="w-full flex flex-col items-start space-y-2">
              <p className="m-0 text-sm">
                Signup to get 10,000 minutes free every month!
              </p>
              <form
                method="GET"
                action="https://dev.dyte.in/signup"
                target="_blank"
                className="flex items-center w-full md:max-w-sm"
              >
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  className="flex-1 h-10 px-3 bg-background-100 text-text text-sm border border-r-0 border-border rounded-l-md focus:outline-none focus:ring-0 focus:border-primary"
                />
                <button
                  type="submit"
                  className="h-10 px-4 bg-primary text-white rounded-r-md cursor-pointer"
                >
                  Sign Up
                </button>
              </form>
            </div>

            <div className="flex items-center mt-8 space-x-3 text-text-100">
              <Link
                href="#"
                className="text-current hover:text-primary transition"
              >
                <Twitter className="h-8" />
              </Link>
              <Link
                href="#"
                className="text-current hover:text-primary transition"
              >
                <Medium className="h-8" />
              </Link>
              <Link
                href="#"
                className="text-current hover:text-primary transition"
              >
                <Linkedin className="h-8" />
              </Link>
              <Link
                href="#"
                className="text-current hover:text-primary transition"
              >
                <Github className="h-8" />
              </Link>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 lg:mt-0">
            <div className="space-y-2">
              <div className="font-sans font-normal text-sm text-text-100">
                Product
              </div>
              <ul className="space-y-2 text-sm list-none p-0">
                <li>
                  <a href="#" className="text-current hover:no-underline">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-current hover:no-underline">
                    Developer Portal
                  </a>
                </li>
                <li>
                  <a href="#" className="text-current hover:no-underline">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <div className="font-sans font-normal text-sm text-text-100">
                Company
              </div>
              <ul className="space-y-2 text-sm list-none p-0">
                <li>
                  <a href="#" className="text-current hover:no-underline">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-current hover:no-underline">
                    Developer Portal
                  </a>
                </li>
                <li>
                  <a href="#" className="text-current hover:no-underline">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <div className="font-sans font-normal text-sm text-text-100">
                Help
              </div>
              <ul className="space-y-2 text-sm list-none p-0">
                <li>
                  <a href="#" className="text-current hover:no-underline">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-current hover:no-underline">
                    Developer Portal
                  </a>
                </li>
                <li>
                  <a href="#" className="text-current hover:no-underline">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full mt-10 text-sm text-center text-text-100">
          Copyright © Dyte since 2020. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
