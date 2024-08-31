import { A } from "@solidjs/router";
import facebook from "../../src/assets/facebook.png";
import whatsapp from "../../src/assets/whatsapp.png";
import { createSignal } from "solid-js";

function ShareButtons2(props) {
  const [popup, setPopup] = createSignal(false);

  const fbShare = () => {
    var fb_url = window.location.href;
    window.open(
      "https://www.facebook.com/sharer/sharer.php?u=" + fb_url,
      "_blank"
    );
  };
  const waShare = () => {
    var wa_url = window.location.href;
    window.open("https://wa.me/?text=" + wa_url, "_blank");
  };
  return (
    <>
      <div class="">
        <div
          onClick={() => {
            setPopup(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
            />
          </svg>
        </div>

        <Show when={popup()}>
          <div class="bg-green-50 border border-green-100 fixed z-50 right-3 md:right-2/5">
            <div class="p-2">
              <span
                onClick={() => {
                  fbShare();
                }}
                class="opacity-60 cursor-pointer"
              >
                <img src={facebook} class="w-8 md:w-8" />
              </span>
            </div>
            <div class="p-2">c</div>
          </div>
        </Show>
      </div>
    </>
  );
}

export default ShareButtons2;
