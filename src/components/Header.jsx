import { A } from "@solidjs/router";
import Menu from "./Menu";
import { createSignal } from "solid-js";
import Logo from "./Logo";
import network from "../assets/no-network.webp";

function Header() {
  console.log(navigator.onLine);
  const [menu, setMenu] = createSignal(false);
  const [block, setBlock] = createSignal(false);
  return (
    <>
      <Show when={block()}>
        <div class="z-50 fixed top-0 bottom-0 left-0 right-0 w-screen h-screen bg-white bg-opacity-100 flex items-center">
          <div class="bg-black bg-opacity-90 w-80 mx-auto p-4 lg:p-6 rounded-md text-white text-center">
            <Logo />
            <div>Launching Sunday 18, Aug 2024</div>
          </div>
        </div>
      </Show>
      <Show when={menu()}>
        <div class="z-50 fixed top-0 bottom-0 left-0 right-0 w-screen h-screen bg-black bg-opacity-90 flex">
          <div class="grow">&nbsp;</div>
          <div class="w-80 bg-white">
            <div class="border-b border-black py-1 px-2 md:px-10 text-right">
              <svg
                onClick={() => {
                  setMenu(false);
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="inline size-12 cursor-pointer hover:opacity-60"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
            <Menu />
          </div>
        </div>
      </Show>
      <div class="fixed z-40 w-full bg-white">
        <div class="w-full md:w-11/12 mx-auto px-2 md:px-0 py-1 lg:py-4 flex justify-between border-b border-black">
          <Logo />
          <div class="hidden lg:flex space-x-6">
            <Menu />
          </div>
          <div class="lg:hidden">
            <svg
              onClick={() => {
                setMenu(true);
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-12 cursor-pointer hover:opacity-60 -mr-1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          </div>
        </div>
      </div>
      <Show when={!navigator.onLine}>
        <div class="fixed w-full mx-auto z-50">
          <div
            class="w-60 mx-auto bg-yellow-100 border border-yellow-300 p-3 
          mt-6 space-x-1 rounded-md text-xs flex"
          >
            <div class="pt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6 text-red-600"
              >
                <path
                  fill-rule="evenodd"
                  d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div>
              <b>Please check your internet connection & refresh this page.</b>
            </div>
          </div>
        </div>
      </Show>
    </>
  );
}

export default Header;
