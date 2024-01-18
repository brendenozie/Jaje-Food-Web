"use client";
import React, { useRef } from "react";
import { picardData } from "@/constant/Data";
import {ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Picard from "./Picard";

const Team = () => {

    return (
    <>
        <div>
                {/* <!-- component -->
                <!-- MDI Icons --> */}
                <link rel="stylesheet" href="https://cdn.materialdesignicons.com/6.5.95/css/materialdesignicons.min.css"/>

                {/* <!-- Page Container --> */}
                <div className="flex items-center justify-center min-h-screen bg-white py-48">
                    <div className="flex flex-col">
                        <div className="flex flex-col mt-8">
                            {/* <!-- Meet the Team --> */}
                            <div className="container max-w-7xl px-4">
                                {/* <!-- Section Header --> */}
                                <div className="flex flex-wrap justify-center text-center mb-24">
                                    <div className="w-full lg:w-6/12 px-4">
                                        {/* <!-- Header --> */}
                                        <h1 className="text-gray-900 text-4xl font-bold mb-8">
                                            Meet our expert Chefs
                                        </h1>

                                        {/* <!-- Description --> */}
                                        <p className="text-gray-700 text-lg font-light">
                                            With over 100 years of combined experience, weve got a well-seasoned team at the helm.
                                        </p>
                                    </div>
                                </div>

                                {/* <!-- Team Members --> */}
                                <div className="flex flex-wrap">
                                    {/* <!-- Member #1 --> */}
                                    <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                                        <div className="flex flex-col">
                                            {/* <!-- Avatar --> */}
                                            <a href="#" className="mx-auto">
                                                <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                                    src="/expert.png"/>
                                            </a>

                                            {/* <!-- Details --> */}
                                            <div className="text-center mt-6">
                                                {/* <!-- Name --> */}
                                                <h1 className="text-gray-900 text-xl font-bold mb-1">
                                                    Tranter Jaskulski
                                                </h1>

                                                {/* <!-- Title --> */}
                                                <div className="text-gray-700 font-light mb-2">
                                                    Founder & Specialist
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Member #2 --> */}
                                    <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                                        <div className="flex flex-col">
                                            {/* <!-- Avatar --> */}
                                            <a href="#" className="mx-auto">
                                                <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                                    src="/expert.png"/>
                                            </a>

                                            {/* <!-- Details --> */}
                                            <div className="text-center mt-6">
                                                {/* <!-- Name --> */}
                                                <h1 className="text-gray-900 text-xl font-bold mb-1">
                                                    Denice Jagna
                                                </h1>

                                                {/* <!-- Title --> */}
                                                <div className="text-gray-700 font-light mb-2">
                                                    Tired & M. Specialist
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Member #3 --> */}
                                    <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                                        <div className="flex flex-col">
                                            {/* <!-- Avatar --> */}
                                            <a href="#" className="mx-auto">
                                                <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                                    src="/expert.png"/>
                                            </a>

                                            {/* <!-- Details --> */}
                                            <div className="text-center mt-6">
                                                {/* <!-- Name --> */}
                                                <h1 className="text-gray-900 text-xl font-bold mb-1">
                                                    Kenji Milton
                                                </h1>

                                                {/* <!-- Title --> */}
                                                <div className="text-gray-700 font-light mb-2">
                                                    Team Memeber
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Member #4 --> */}
                                    <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                                        <div className="flex flex-col">
                                            {/* <!-- Avatar --> */}
                                            <a href="#" className="mx-auto">
                                                <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                                    src="/expert.png"/>
                                            </a>

                                            {/* <!-- Details --> */}
                                            <div className="text-center mt-6">
                                                {/* <!-- Name --> */}
                                                <h1 className="text-gray-900 text-xl font-bold mb-1">
                                                    Doesnt matter
                                                </h1>

                                                {/* <!-- Title --> */}
                                                <div className="text-gray-700 font-light mb-2">
                                                    Will be fired
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </>
    );
};


export default Team;