import Menu from "./Menu";
import { createSignal } from "solid-js";
import Logo from "./Logo";
import { useNavigate } from "@solidjs/router";

const VITE_API_URL = import.meta.env["VITE_API_URL"];

function Header() {
  const [menu, setMenu] = createSignal(false);
  const navigate = useNavigate();

  const [fetching, setFetching] = createSignal(false);
  const latestIssue = async () => {
    setFetching(true);
    try {
      const response = await fetch(VITE_API_URL + "/open/latest-post", {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "GET",
      });
      const result = await response.json();
      if (result.success) {
        navigate("/issue/" + result.response[0].issue_number, {
          replace: true,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
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
          <div class="flex space-x-6">
            <div class="pt-3 lg:pt-0.5 text-sm">
              <Show
                when={fetching()}
                fallback={
                  <span
                    onClick={() => {
                      latestIssue();
                    }}
                    class="text-sm flex text-white cursor-pointer p-2 border border-red-600 bg-red-600 rounded hover:bg-white hover:text-red-600"
                  >
                    Latest Issue
                  </span>
                }
              >
                <span class="w-fit flex space-x-2 text-sm text-white opacity-60 cursor-wait p-2 border border-red-600 bg-red-600 rounded">
                  <span>Fetching..</span>
                  <span class="animate-spin w-3 h-3 bg-white mt-1 rounded border-2 border-white bg-transparent">
                    &nbsp;
                  </span>
                </span>
              </Show>
            </div>
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
