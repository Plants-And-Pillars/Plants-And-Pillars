import Head from "next/head"
import styles from "../styles/Home.module.css"
import Header from "../components/Header"
import LotteryEntrance from "../components/LotteryEntrance"
import { useMoralis } from "react-moralis"
import MintNFT from "../components/MintNFT"
import Dashboard from "../components/CovalentDashboard"
import React, { useEffect, useState } from "react"



const supportedChains = ["31337", "4"]

function Home() {
    const { isWeb3Enabled, chainId } = useMoralis()
    return (
        <div className="min-h-screen bg-plant bg-cover px-4">
            <Head>
                <title>Plants And Pillars</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className="flex  w-full">
                <div className="w-1/2"></div>
                <div className="flex justify-end items-end w-1/2">
                    <div className="grid grid-cols-1">
                        <div className="flex justify-start items-center">
                            <div className="flex flex-col justify-start items-center">
                                <div className="text-black font-bold text-lg pb-3">
                                    Main Mission
                                </div>
                                <p>
                                    Our Ultimate Goal is to reduce and neutralize carbon emissions
                                    by planting more and more trees and educating people about our
                                    current environmental issues.
                                </p>
                            </div>
                            <img src="./tree.png" alt="book" width={300} height={300} />
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="flex flex-col justify-start items-center">
                                <div className="text-black font-bold text-lg pb-3">Education</div>
                                <p>
                                    Our Organization will also make people aware of the current
                                    situation on Earth and educate them regarding the global issues
                                    of Save Soil, Global Warming, etc.
                                </p>
                            </div>
                            <img src="./book.png" alt="asaf" height={300} width={300} />
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="flex flex-col justify-start items-center">
                                <div className="text-black font-bold text-lg pb-3">Game</div>
                                <p>
                                    A Lottery Game to keep our supporters engaged to keep planting
                                    trees and get an equal chance of winning every day.
                                </p>
                            </div>
                            <img src="./dice.png" alt="asaf" height={300} width={300} />
                        </div>{" "}
                        <div className="flex justify-center items-center">
                            <div className="flex flex-col justify-start items-center">
                                <div className="text-black font-bold text-lg pb-3">Award</div>
                                <p>
                                    We&apos;ll randomly award our supporters to add a P2E
                                    environment to this project in order to keep the people engaged
                                    in this initiative which will eventually help mother Nature.
                                </p>
                            </div>
                            <img src="./award.png" alt="asaf" height={300} width={300} />
                        </div>{" "}
                        <div className="flex justify-center items-center mb-10">
                            <div className="flex flex-col justify-start items-center">
                                <div className="text-black font-bold text-lg pb-3">DAO</div>
                                <p>
                                    Plants and Pillars DAO will help our community to take all the
                                    important decisions in a decentralized way and help in the
                                    smooth functioning of this project.
                                </p>
                            </div>
                            <img src="./dao.png" alt="asaf" height={300} width={300} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
