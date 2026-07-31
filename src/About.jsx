import {useState} from "react";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div class="flex bg-[#1F2937] bg-[radial-gradient(circle_at_bottom_left,rgba(147,51,234,0.35),transparent_55%)] py-8 my-30 mx-[15%] h-125 rounded-[30px] w-[70%] ">
            <div className="justify-center mx-28 my-auto">
                <h2 class="text-3xl sm:text-4xl tracking-tight text-balance font-semibold">
                    Boost your productivity. Start using our app today.
                </h2>
                <p class="mt-6 text-pretty text-gray-300 text-lg/8 ">
                    Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                        <a href="/" className="rounded-md bg-gray-700 px-3.5 py-2.5 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-gray-600 focus-visible:outline-offset-2 focus-visible:outline-white">
                            Get Started
                        </a>
                        <a href="/home" className="text-sm/6 font-semibold text-white hover:text-gray-100">
                            Learn More <span aria-hidden = "true">→</span>
                        </a>
                </div>
            </div>
            <div className="w-180 justify-end">
                <img src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png" alt="image" className="w-130 h-117 rounded-br-3xl"></img>
            </div>
            </div>  
    );
}