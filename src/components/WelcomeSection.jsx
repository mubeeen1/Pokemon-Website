import React from 'react'

const WelcomeSection = () => {
    return (
        <section className=" h-screen flex items-center justify-center  font-serif ">
            <div className="text-center">
                <h1 className="text-black m-7 font-semibold text-2xl md:text-4xl">
                    Hey Pokemon Lover, Welcome to the universe of Pokemons!! </h1>
                <div className="flex flex-col md:flex-row items-center justify-center ">
                <a href="/pokemons">
                    <button type="button" h className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 my-4 mx-4">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                           Explore Pokemons 
                        </span>
                    </button>
                    </a>
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-300 to-pink-300 group-hover:from-purple-300 group-hover:to-pink-300 dark:text-white dark:hover:text-gray-900 cursor-not-allowed my-4 mx-4">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Explore Trainers
                        </span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default WelcomeSection