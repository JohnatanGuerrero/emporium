import ButtonBackgroundShine from "./components/ButtonBackgroundShine";
import GradualSpacing from "./components/magicui/GradualSpacing";
import Link from "next/link";
import Ripple from "./components/magicui/Ripple";



export default function Home() {
  return (
    <main className="">
      <nav class="bg-white dark:bg-zinc-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-zinc-800">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-0 ">
          <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse animate__animated animate__fadeIn">
            <img src="./img/logo2.png" class="h-24" alt="Flowbite Logo" />
          </a>
          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse animate__animated animate__fadeIn">
            <button type="button" class="text-amber-950 bg-yellow-100 hover:opacity-50  focus:outline-nonefont-medium rounded-lg text-sm px-4 py-2 text-center flex gap-2 items-center font-extrabold transition duration-300 transform hover:scale-105">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
              Your cart (0)
            </button>
            <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 " id="navbar-sticky">
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-stone-900 dark:border-gray-700 ">
              <li>
                <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-yellow-100 md:p-0 transition duration-300" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-100 md:p-0 transition duration-300 ">About us</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-100 md:p-0 transition duration-300">Packages</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-100 md:p-0 transition duration-300">Memberships</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section class=" h-lvh flex items-center justify-center absolute top-0 z-[-2] w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">

          <GradualSpacing className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white" text="Coming Soon" />
          <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 animate__animated animate__fadeInUp">The new and ultimate concept in shooting training</p>
          <div class="flex flex-col mb-8 lg:mb-8 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 animate__animated animate__fadeIn">
            <div data-element="fields" data-stacked="false" class="flex items-center w-full max-w-md mb-3 seva-fields formkit-fields">
              <div class="relative w-full mr-3 formkit-field">
                <label for="member_email" class="hidden block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                  <svg class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"></path>
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"></path>
                  </svg>
                </div>
                <div className='relative'>
                  <div className='absolute top-0 flex w-full justify-center'>
                    <div className='h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000' />
                  </div>
                  <input
                    className='block h-14 w-full rounded-md border border-gray-800 bg-zinc-950 px-3 py-4 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 focus:ring-offset-gray-50'
                    placeholder='Please enter your email address'
                  />
                </div>

              </div>
              <ButtonBackgroundShine />
            </div>
          </div>

          <div class="flex mt-4 sm:justify-center sm:mt-0 animate__animated animate__zoomIn">
            <Link target="_blank" href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white transition duration-300 transform hover:scale-110 " >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              <span class="sr-only">Facebook page</span>
            </Link>
            <Link target="_blank" href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5 transition duration-300 transform hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              <span class="sr-only">Instagram page</span>
            </Link >
            <Link target="_blank" href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5 transition duration-300 transform hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              <span class="sr-only">Linkedin page</span>
            </Link>
          </div>
        </div>


      </section>
      <footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-zinc-950 dark:border-zinc-800 animate__animated animate__fadeIn">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024<a href="https://flowbite.com/" class="hover:underline"></a>. All Rights Reserved.
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link  href="#" class="hover:underline me-4 md:me-6">About us</Link>
          </li>
          <li>
            <Link href="#" class="hover:underline me-4 md:me-6">Privacy Policy</Link>
          </li>
          <li>
            <Link href="#" class="hover:underline">Contact</Link>
          </li>
        </ul>
      </footer>



    </main>
  );
}
