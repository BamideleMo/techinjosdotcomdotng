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
              <span
                onClick={() => {
                  setMenu(false);
                }}
                class="text-4xl cursor-pointer hover:opacity-60 mr-1"
              >
                x
              </span>
            </div>
            <Menu />
          </div>
        </div>
      </Show>
      <div class="fixed w-full bg-white">
        <div class="w-full md:w-11/12 mx-auto px-2 md:px-0 py-4 flex justify-between border-b border-black">
          <div class="text-2xl lg:text-4xl font-bold">
            <A href="/">
              Tech<span class="text-gray-400">IN</span>Jos
            </A>
          </div>
          <div class="hidden lg:block">
            <Menu />
          </div>
          <div class="lg:hidden -mt-2">
            <span
              onClick={() => {
                setMenu(true);
              }}
              class="text-4xl cursor-pointer hover:opacity-60"
            >
              +
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
