import { A } from "@solidjs/router";
import Menu from "./Menu";
import { createSignal } from "solid-js";

function Header() {
  const [menu, setMenu] = createSignal(false);
  return (
    <>
      <Show when={menu()}>
        <div class="z-50 fixed top-0 bottom-0 left-0 right-0 w-screen h-screen bg-black bg-opacity-90 flex">
          <div class="grow">&nbsp;</div>
          <div class="w-80 bg-white">
            <div class="border-b border-black py-4 px-6 md:px-12 text-right">
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
      <div class="fixed w-full bg-white">
        <div class="w-full md:w-11/12 mx-auto px-2 md:px-0 py-1 lg:py-4 flex justify-between border-b border-black">
          <div class="text-3xl lg:text-4xl font-bold pt-1 lg:pt-0">
            <A href="/">
              Tech<span class="text-gray-400">IN</span>Jos
            </A>
          </div>
          <div class="hidden lg:block">
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
              className="size-12 cursor-pointer hover:opacity-60 -mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
