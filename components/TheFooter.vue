<!--
    Footer of the page
-->

<template>
    <footer class="mx-x_padding_page mt-inner_space mb-44 h-fit pb-16">
        <div class="w-full flex flex-row space-x-inner_space">
            <div class="grow flex flex-row space-x-inner_space">
                <div class="basis-1/2 bg-yellow rounded-card_radius">
                    1111
                </div>
                <div class="basis-1/2 bg-background-light rounded-card_radius p-7">
                    <form class="w-full mx-auto flex flex-col justify-center " noValidate>
                        <div class="flex flex-col space-y-5">
                            <div class="flex flex-row gap-4">
                                <div class="w-1/2">
                                    <label htmlFor="name" class="block font-semibold text-sm mb-3">
                                        Your Name (required)
                                    </label>
                                    <input id="name" name="name" type="text" placeholder="Enter Your Name"
                                        class="py-2 px-5 w-full border text-input text-sm placeholder-body min-h-12 bg-transparent border-white focus:outline-none  h-12 rounded-full"
                                        autoComplete="off" spellCheck="false" aria-invalid="false" />
                                </div>
                                <div class="w-1/2">
                                    <label htmlFor="email" class="block font-semibold text-sm mb-3">
                                        Your Email (required)
                                    </label>
                                    <input id="email" name="email" type="email" placeholder="Enter Your Email"
                                        class="py-2 px-5 w-full border text-input text-sm placeholder-body min-h-12 bg-transparent border-white focus:outline-none  h-12 rounded-full"
                                        autoComplete="off" spellCheck="false" aria-invalid="false" />
                                </div>
                            </div>
                            <div class="relative mb-4">
                                <label htmlFor="message" class="block font-semibold text-sm mb-3">
                                    Message
                                </label>
                                <textarea id="message" name="message"
                                    class="px-4 py-3 flex items-center w-full text-heading text-sm focus:outline-none bg-transparent border focus:outline-none focus:border-heading placeholder-body rounded-3xl h-36"
                                    autoComplete="off" spellCheck="false" rows={6}
                                    placeholder="Write your message here"></textarea>
                            </div>
                            <div class="flex justify-end">
                                <button data-variant="flat" type="submit"
                                    class="text-yellow py-2 px-3 rounded-full flex flex-row space-x-2 hover:text-black hover:bg-yellow transition duration-200">
                                    <span>Send message</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div class="flex flex-col space-y-inner_space">
                <div class="basis-1/2 bg-yellow rounded-card_radius">
                    1111
                </div>
                <div class="basis-1/2 bg-yellow rounded-card_radius">
                    1111
                </div>

            </div>
        </div>
    </footer>
</template>
