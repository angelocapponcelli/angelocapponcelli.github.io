<!--
    Home page
-->
<template>
    <!--main>
        <img id = "main-img" src = "~/assets/img/home-image.jpg" />
        <h2>
            This is a description for the Dog's Hotel. The best place where dogs can rest.
        </h2>
    </main-->

    <div class="flex flex-col space-y-inner_space xl:px-x_padding_page px-x_padding_page_mobile pt-inner_space">
        <div class="flex lg:flex-row flex-col lg:space-x-inner_space space-x-0 lg:space-y-0 space-y-inner_space">
            <div class="basis-1/2">
                <div class="flex flex-col space-y-inner_space">
                    <div class="basis-1/2 bg-background-light rounded-card_radius p-5 reveal">
                        <h1 class="lg:text-5xl text-4xl leading-tight font-bold ">Unlocking digital
                            possibilities, one line
                            of code at a
                            time!</h1>
                    </div>
                    <div class="basis-1/2 bg-background-light rounded-card_radius p-5 reveal">
                        <h3 class="text-3xl font-semibold pb-2">About</h3>
                        <p class="text-xl">Enthusiastic student engineer with a passion for software development and
                            technology.
                            Eager to combine engineering skills with programming expertise to create innovative and
                            efficient
                            solutions. A quick learner, team player, and problem solver dedicated to continuous growth.</p>
                    </div>
                </div>
            </div>
            <div class="basis-1/2 flex flex-col space-y-inner_space reveal">
                <div
                    class="bg-background-light rounded-card_radius text-3xl font-semibold p-3 lg:flex hidden justify-between">
                    <div id="clock" onload="currentTime()" class="h-fit my-auto"></div>
                    <div>
                        <NuxtLink to="#contact"
                            class="text-yellow py-1 px-3 rounded-full flex flex-row space-x-3 hover:text-black hover:bg-yellow transition duration-200">
                            <span class="text-lg font-normal">Contact me</span>
                            <dotlottie-player src="https://lottie.host/0161f23f-2187-4ec2-9ca4-823c6b25e170/6MbKAdgdFg.json"
                                background="transparent" speed="0.8" class="w-7 h-7" direction="1" mode="normal" loop
                                autoplay></dotlottie-player>
                        </NuxtLink>

                    </div>
                    <!-- Weather --
                        div class="text-xs text-transparent" id="idf49ff7c3b75fb"
                        a='{"t":"s","v":"1.2","lang":"en","locs":[928],"ssot":"c","sics":"ds","cbkg":"#FFFFFF00","cfnt":"rgba(255,255,255,1)","slfs":23,"slis":25,"slgp":10,"sfnt":"a","sdr":"rl"}'>
                        Weather Data Source: <a href="https://sharpweather.com/weather_milan/30_days/">weather forecast
                            Milan 30 days</a></div-->
                </div>
                <div class="flex lg:flex-row flex-col h-full lg:space-x-inner_space lg:space-y-0 space-y-inner_space">
                    <div class="lg:basis-1/2 h-[400px] lg:h-auto rounded-card_radius bg-purple relative">
                        <!-- image here -->
                        <img src="~/assets/img/_0017(2).png"
                            class="absolute lg:h-auto lg:w-[110%] lg:max-w-[110%] h-[430px] w-auto object-cover bottom-0 justify-self-center rounded-card_radius" />
                    </div>
                    <div class="basis-1/2">
                        <div class="flex flex-col space-y-inner_space h-full">
                            <div class="flex-none bg-background-light rounded-card_radius text-2xl p-3">
                                Computer scientist
                            </div>
                            <div
                                class="lg:grow lg:h-auto h-56 bg-background-light rounded-card_radius p-3 space-y-3 flex flex-col">
                                <p class="text-2xl">Based in Milan</p>
                                <div class="bg-[url('~/assets/img/map.jpg')] bg-cover bg-center rounded-card_radius h-full">
                                </div>
                            </div>
                            <!-- soclial icons desktop -->
                            <div class="hidden lg:flex flex-none flex-row space-x-inner_space">
                                <NuxtLink to="https://github.com/angelocapponcelli" target="_blank"
                                    class="basis-1/4 bg-background-light fill-white rounded-card_radius aspect-square p-2 hover:bg-green transition duration-200">
                                    <svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path
                                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </NuxtLink>
                                <NuxtLink
                                    to="https://it.linkedin.com/in/angelo-capponcelli-9a8657144?trk=public-profile-badge-profile-badge-view-profile-cta"
                                    target="_blank"
                                    class="basis-1/4 bg-background-light fill-white rounded-card_radius aspect-square p-2 hover:bg-purple transition duration-200">
                                    <svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path
                                            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                    </svg>
                                </NuxtLink>
                                <NuxtLink to="https://www.instagram.com/angelo.capponcelli/" target="_blank"
                                    class="basis-1/4 bg-background-light fill-white rounded-card_radius aspect-square p-2 hover:bg-pink transition duration-200">
                                    <svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path
                                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </NuxtLink>
                                <NuxtLink to="mailto:angelocapponcelli@gmail.com" target="_blank"
                                    class="basis-1/4 bg-background-light fill-white rounded-card_radius aspect-square p-2 hover:bg-yellow hover:fill-background-light transition duration-200">
                                    <svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path
                                            d="M12.042 23.648c-7.813 0-12.042-4.876-12.042-11.171 0-6.727 4.762-12.125 13.276-12.125 6.214 0 10.724 4.038 10.724 9.601 0 8.712-10.33 11.012-9.812 6.042-.71 1.108-1.854 2.354-4.053 2.354-2.516 0-4.08-1.842-4.08-4.807 0-4.444 2.921-8.199 6.379-8.199 1.659 0 2.8.876 3.277 2.221l.464-1.632h2.338c-.244.832-2.321 8.527-2.321 8.527-.648 2.666 1.35 2.713 3.122 1.297 3.329-2.58 3.501-9.327-.998-12.141-4.821-2.891-15.795-1.102-15.795 8.693 0 5.611 3.95 9.381 9.829 9.381 3.436 0 5.542-.93 7.295-1.948l1.177 1.698c-1.711.966-4.461 2.209-8.78 2.209zm-2.344-14.305c-.715 1.34-1.177 3.076-1.177 4.424 0 3.61 3.522 3.633 5.252.239.712-1.394 1.171-3.171 1.171-4.529 0-2.917-3.495-3.434-5.246-.134z" />
                                    </svg>
                                </NuxtLink>
                            </div>
                            <!-- social icons mobile -->
                            <div class="lg:hidden flex flex-row space-x-inner_space">
                                <div class="grow bg-background-light rounded-card_radius">

                                </div>
                                <NuxtLink to="https://github.com/angelocapponcelli" target="_blank"
                                    class="lg:h-16 h-12 bg-background-light fill-white rounded-card_radius aspect-square p-2 hover:bg-green transition duration-200">
                                    <svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path
                                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </NuxtLink>
                                <NuxtLink
                                    to="https://it.linkedin.com/in/angelo-capponcelli-9a8657144?trk=public-profile-badge-profile-badge-view-profile-cta"
                                    target="_blank"
                                    class="lg:h-16 h-12 bg-background-light fill-white rounded-card_radius aspect-square p-2 hover:bg-purple transition duration-200">
                                    <svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path
                                            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                    </svg>
                                </NuxtLink>
                                <NuxtLink to="https://www.instagram.com/angelo.capponcelli/" target="_blank"
                                    class="lg:h-16 h-12 bg-background-light fill-white rounded-card_radius aspect-square p-2 hover:bg-pink transition duration-200">
                                    <svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path
                                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </NuxtLink>
                                <NuxtLink to="mailto:angelocapponcelli@gmail.com" target="_blank"
                                    class="lg:h-16 h-12 bg-background-light fill-white rounded-card_radius aspect-square p-2 hover:bg-yellow hover:fill-background-light transition duration-200">
                                    <svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path
                                            d="M12.042 23.648c-7.813 0-12.042-4.876-12.042-11.171 0-6.727 4.762-12.125 13.276-12.125 6.214 0 10.724 4.038 10.724 9.601 0 8.712-10.33 11.012-9.812 6.042-.71 1.108-1.854 2.354-4.053 2.354-2.516 0-4.08-1.842-4.08-4.807 0-4.444 2.921-8.199 6.379-8.199 1.659 0 2.8.876 3.277 2.221l.464-1.632h2.338c-.244.832-2.321 8.527-2.321 8.527-.648 2.666 1.35 2.713 3.122 1.297 3.329-2.58 3.501-9.327-.998-12.141-4.821-2.891-15.795-1.102-15.795 8.693 0 5.611 3.95 9.381 9.829 9.381 3.436 0 5.542-.93 7.295-1.948l1.177 1.698c-1.711.966-4.461 2.209-8.78 2.209zm-2.344-14.305c-.715 1.34-1.177 3.076-1.177 4.424 0 3.61 3.522 3.633 5.252.239.712-1.394 1.171-3.171 1.171-4.529 0-2.917-3.495-3.434-5.246-.134z" />
                                    </svg>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="basis-full bg-background-light rounded-card_radius px-5 py-3 flex justify-between items-center reveal">
            <h2 class="text-3xl font-semibold">Projects</h2>
            <span>
                <!--NuxtLink to="/"
                    class="text-yellow py-2 px-3 rounded-full flex flex-row space-x-1 hover:text-black hover:bg-yellow transition duration-200">
                    <span>See more projects</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </NuxtLink-->
            </span>
        </div>

        <div class="flex lg:flex-row lg:space-x-inner_space lg:space-y-0 flex-col space-x-0 space-y-inner_space">
            <NuxtLink to="https://polimi-game-collective.itch.io/dark-unknown" target="_blank"
                class="reveal basis-7/12 group bg-green rounded-card_radius p-5 flex lg:flex-row lg:space-x-inner_space lg:space-y-0 flex-col space-x-0 space-y-inner_space hover:shadow-md hover:transform hover:scale-101 transition duration-1000">
                <div class="basis-6/12"> <img src="~/assets/img/dark-unknown.jpg"
                        class=" h-full w-full rounded-card_radius object-cover" /></div>
                <div class="basis-6/12 relative lg:pb-0 pb-12">
                    <h2 class="text-3xl">Develop videogame</h2>
                    <h3 class="lg:text-lg">Developed a Unity-based roguelike video game
                        called 'Dark Unknown' in collaboration with a team of individuals and our university. Explore the
                        challenging dungeon in this exciting adventure!
                    </h3>
                    <div
                        class="absolute bottom-0 right-0 py-2 px-3 rounded-full flex flex-row space-x-1 group-hover:text-green group-hover:bg-white transition duration-200">
                        <span>See details</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </div>
                </div>
            </NuxtLink>
            <div
                class="reveal basis-5/12 group bg-background-light rounded-card_radius p-5  flex lg:flex-row lg:space-x-inner_space lg:space-y-0 flex-col space-x-0 space-y-inner_space hover:shadow-md hover:transform hover:scale-101 transition duration-1000">
                <div class="basis-5/12 flex justify-center items-center"> <img src="~/assets/img/IoT.png"
                        class="h-fit max-w-full lg:max-h-fit max-h-40 rounded-card_radius object-cover" /></div>
                <div class="basis-7/12 relative">
                    <h2 class="text-3xl">IoT</h2>
                    <h3 class="lg:text-lg">Implement and showcase a network architecture similar to LoraWAN in
                        TinyOS. Connect network to Node-RED, and periodically transmit data from sensor nodes to Thingspeak
                        through MQTT.
                    </h3>
                    <!--div 
                        class="absolute bottom-0 right-0 p-2 rounded-full group-hover:text-background-light group-hover:bg-white transition duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </div-->
                </div>
            </div>
        </div>

        <div class="flex lg:flex-row lg:space-x-inner_space lg:space-y-0 flex-col-reverse space-x-0 space-y-inner_space">
            <div
                class="reveal basis-5/12 group bg-background-light rounded-card_radius p-5 flex lg:flex-row lg:space-x-inner_space lg:space-y-0 flex-col space-x-0 space-y-inner_space hover:shadow-md hover:transform hover:scale-101 transition duration-1000">
                <!--div class="basis-5/12"> <img src="~/assets/img/home-image.jpg"
                        class=" h-full w-full rounded-card_radius object-cover" /></div-->
                <div class="basis-12/12 relative">
                    <h2 class="text-3xl">Data quality</h2>
                    <h3 class="lg:text-lg">Given a dataset and a classification task, introduce missing data ranging from 0%
                        to
                        50%. Next, employ imputation techniques to fill in the missing values. Evaluate the accuracy of the
                        classification task, including the application of machine learning algorithms.
                    </h3>
                    <!--div
                        class="absolute bottom-0 right-0 p-2 rounded-full group-hover:text-background-light group-hover:bg-white transition duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </div-->
                </div>
            </div>
            <div
                class="reveal basis-7/12 group bg-pink rounded-card_radius p-5 flex lg:flex-row lg:space-x-inner_space lg:space-y-0 flex-col space-x-0 space-y-inner_space hover:shadow-md hover:transform hover:scale-101 transition duration-1000">
                <div class="basis-4/12 flex justify-center items-center"> <img src="~/assets/img/data-analysis.png"
                        class="h-fit max-w-full lg:max-h-fit max-h-40 rounded-card_radius object-cover" /></div>
                <div class="basis-8/12 relative">
                    <h2 class="text-3xl">Big and unstructured data project</h2>
                    <h3 class="lg:text-lg">The aim of the pro ject is to implement a system that manages and queries a
                        bibliography database of scientific articles. Using Neo4j, MongoDB and Spark.
                    </h3>
                    <!--div
                        class="absolute bottom-0 right-0 py-2 px-3 rounded-full flex flex-row space-x-1 group-hover:text-pink group-hover:bg-white transition duration-200">
                        <span>See details</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </div-->
                </div>
            </div>
        </div>

        <div class="flex lg:flex-row lg:space-x-inner_space lg:space-y-0 flex-col space-x-0 space-y-inner_space">
            <div class="basis-9/12 flex flex-col space-y-inner_space">
                <div class="bg-background-light rounded-card_radius p-5 reveal">
                    <h2 class="text-3xl font-semibold">Skills</h2>
                </div>
                <div
                    class="flex lg:flex-row lg:space-x-inner_space lg:space-y-0 flex-col space-x-0 space-y-inner_space h-full">
                    <div class="basis-2/3 flex flex-col space-y-inner_space">
                        <div
                            class="reveal basis-1/2 bg-purple rounded-card_radius p-5 flex lg:flex-row flex-col lg:space-x-7 lg:space-y-0 space-y-inner_space">
                            <div
                                class="lg:basis-4/12 bg-[url('~/assets/img/ai.png')] bg-contain bg-no-repeat bg-center lg:h-auto h-40">
                            </div>
                            <p class="basis-9/12 lg:text-lg">
                                I am actively pursuing my interest in Artificial Intelligence (AI) through a comprehensive
                                course curriculum. Through this academic journey, I am gaining insights into AI
                                fundamentals, machine learning algorithms, and their practical applications.
                            </p>

                        </div>
                        <div
                            class="reveal basis-1/2 bg-background-light rounded-card_radius p-5 flex lg:flex-row flex-col lg:space-x-7 lg:space-y-0 space-y-inner_space">
                            <div
                                class="lg:basis-4/12 bg-[url('~/assets/img/server.png')] bg-contain bg-no-repeat bg-center lg:h-auto h-40">
                            </div>
                            <p class="basis-9/12 lg:text-lg">
                                Experienced in MongoDB, database management, and ensuring top-tier data quality.
                                Transforming raw information into actionable insights for informed decision-making. Ready to
                                drive data-driven excellence.
                            </p>
                        </div>

                    </div>
                    <div class="basis-1/3 flex flex-col space-y-inner_space">
                        <div class="flex flex-row space-x-inner_space">
                            <div class="bg-background-light rounded-card_radius p-5 reveal"> <img src="~/assets/img/c.png"
                                    class=" h-full w-full rounded-card_radius object-cover" /></div>
                            <div class="bg-background-light rounded-card_radius p-5 reveal"> <img src="~/assets/img/c++.png"
                                    class=" h-full w-full rounded-card_radius object-cover" /></div>
                        </div>
                        <div class="bg-green rounded-card_radius p-3 flex flex-row space-x-2 items-center grow reveal">
                            <div
                                class="lg:grow bg-[url('~/assets/img/cyber-eye.png')] bg-contain bg-no-repeat bg-center w-full lg:h-full h-24">
                            </div>
                            <p class="lg:text-lg">
                                Created academic projects involving computer graphics.
                            </p>
                        </div>
                        <div class="flex flex-row space-x-inner_space">
                            <div class="bg-background-light rounded-card_radius p-5 reveal"> <img
                                    src="~/assets/img/python.png" class=" h-full w-full rounded-card_radius object-cover" />
                            </div>
                            <div class="bg-background-light rounded-card_radius p-5 reveal"> <img
                                    src="~/assets/img/java.png" class=" h-full w-full rounded-card_radius object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="basis-3/12 flex flex-col space-y-inner_space">
                <div class="bg-background-light rounded-card_radius p-5 reveal">
                    <h2 class="text-3xl italic">Soft skills</h2>
                </div>
                <div class="bg-background-light rounded-card_radius text-2xl p-3 reveal">
                    Problem-Solving
                </div>
                <div class="bg-background-light rounded-card_radius text-2xl p-3 reveal">
                    Communication
                </div>
                <div class="bg-background-light rounded-card_radius text-2xl p-3 reveal">
                    Adaptability
                </div>
                <div class="bg-background-light rounded-card_radius text-2xl p-3 reveal">
                    Teamwork
                </div>
                <div class="bg-background-light rounded-card_radius text-2xl p-3 reveal">
                    Time Management
                </div>
                <div class="bg-background-light rounded-card_radius text-2xl p-3 reveal">
                    Attention to Detail
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = hh + ":" + mm + ":" + ss;

    if (document.getElementById("clock")) document.getElementById("clock").innerText = time;
    let t = setTimeout(function () { currentTime() }, 1000);
}
function splitFunction() {
    let splitWords = function (selector) {
        var elements = document.querySelectorAll(selector);

        elements.forEach(function (el) {
            el.dataset.splitText = el.textContent;
            el.innerHTML = el.textContent
                .split(/\s/)
                .map(function (word) {
                    return word
                        .split("-")
                        .map(function (word) {
                            return '<span class="word">' + word + "</span>";
                        })
                        .join('<span class="hyphen">-</span>');
                })
                .join('<span class="whitespace"> </span>');
        });
    };

    let splitLines = function (selector) {
        var elements = document.querySelectorAll(selector);

        splitWords(selector);

        elements.forEach(function (el) {
            var lines = getLines(el);

            var wrappedLines = "";
            lines.forEach(function (wordsArr) {
                wrappedLines += '<span class="line"><span class="words">';
                wordsArr.forEach(function (word) {
                    wrappedLines += word.outerHTML;
                });
                wrappedLines += "</span></span>";
            });
            el.innerHTML = wrappedLines;
        });
    };

    let getLines = function (el) {
        var lines = [];
        var line;
        var words = el.querySelectorAll("span");
        var lastTop;
        for (var i = 0; i < words.length; i++) {
            var word = words[i];
            if (word.offsetTop != lastTop) {
                // Don't start with whitespace
                if (!word.classList.contains("whitespace")) {
                    lastTop = word.offsetTop;

                    line = [];
                    lines.push(line);
                }
            }
            line.push(word);
        }
        return lines;
    };

    splitLines(".reveal-text");

    /*let revealText = document.querySelectorAll(".reveal-text");

    gsap.registerPlugin(ScrollTrigger);
    let revealLines = revealText.forEach((element) => {
        const lines = element.querySelectorAll(".words");

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                toggleActions: "restart none none reset"
            }
        });
        tl.set(element, { autoAlpha: 1 });
        tl.from(lines, 1, {
            yPercent: 100,
            ease: Power3.out,
            stagger: 0.25,
            delay: 0.2
        });
    });*/
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 0;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            //reveals[i].classList.remove("active");
        }
    }
}

onMounted(() => {
    currentTime();
    let pretixScript = document.createElement('script');
    pretixScript.setAttribute('src', "https://static1.sharpweather.com/widgetjs/?id=idf49ff7c3b75fb");
    document.head.appendChild(pretixScript);

    // Lottie animation HelloHand
    let recaptchaScript = document.createElement('script');
    recaptchaScript.setAttribute('src', "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs");
    recaptchaScript.setAttribute('type', 'module');
    document.head.appendChild(recaptchaScript);

    splitFunction();

    window.addEventListener("scroll", reveal);
    reveal();
});


</script>

<style>
.reveal-text {
    visibility: hidden;
}

.line {
    position: relative;
    overflow: hidden;
    display: flex;
}

.reveal {
    position: relative;
    transform: translateY(100px);
    /*default 150px*/
    opacity: 0;
    transition: 1.5s all ease;
    /*default 1s*/
}

.reveal.active {
    transform: translateY(0);
    opacity: 1;
}
</style>