import { A } from "@solidjs/router";
import Logo from "./Logo";
import TextInput from "./TextInput";
import PasswordInput from "./PasswordInput";

import { createSignal, createEffect } from "solid-js";

import { useFormHandler } from "solid-form-handler";
import { zodSchema } from "solid-form-handler/zod";
import { z } from "zod";
import ChevronRight from "./icons/ChevronRight";

const schema = z.object({
  username: z.string().email("*Invalid"),
});

const VITE_API_URL = import.meta.env["VITE_API_URL"];

function Popup() {
  const formHandler = useFormHandler(zodSchema(schema));
  const { formData } = formHandler;

  const [isProcessing, setIsProcessing] = createSignal(false);
  const [message, setMessage] = createSignal("");

  const submit = async (event) => {
    event.preventDefault();
    setIsProcessing(true);
    try {
      //Call API here:
      const response = await fetch(VITE_API_URL + "/auth/login", {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          username: formData().username,
          password: "1234",
        }),
      });
      const result = await response.json();
      if (!result.success) {
        setMessage(result.response);
        setIsProcessing(false);
      } else {
        var store = {
          custom_id: result.response.custom_id,
          user_role: result.response.role,
          token: result.response.token,
          expiry: now.getTime() + 10800000,
        };
        setData(store);
        localStorage.setItem("TIJUser", JSON.stringify(data()));
        navigate("/u/profile");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div class="z-50 bg-black w-screen h-screen bg-opacity-95 fixed flex items-center top-0 bottom-0 left-0 right-0">
      <div class="rounded-lg w-11/12 md:w-96 mx-auto text-sm">
        <div
          class="bg-gray-200 p-6 rounded-tl-lg rounded-tr-lg 
        grid grid-cols-1 gap-6"
        >
          <div>
            <h2 class="flex space-x-2">
              <span class="bg-red-600 block w-6 h-6 text-white font-semibold text-center rounded-full pt-0.5">
                1
              </span>
              <span class="text-lg -mt-0.5">Exclusive Content</span>
            </h2>
            <div class="text-slate-800 space-y-2 my-2">
              <p>
                Get to read weekly updates on the latest in the tech ecosystem
                in Jos, including news about local startups, tech events, job
                opportunities, etc.
              </p>
            </div>
          </div>
          <div>
            <h2 class="flex space-x-2">
              <span class="bg-red-600 block w-6 h-6 text-white font-semibold text-center rounded-full pt-0.5">
                2
              </span>
              <span class="text-lg -mt-0.5">Regular Giveaways</span>
            </h2>
            <div class="text-slate-800 space-y-2 my-2">
              <p>
                Become eligible for regular giveaways, discounts, and special
                offers related to tech products, events, and services.
              </p>
            </div>
          </div>
        </div>
        <div class="bg-slate-900 p-6 pb-12 rounded-bl-lg rounded-br-lg">
          <form class="">
            <div class="flex flex-col md:flex-row text-sm md:space-x-0.5">
              <div class="grow text-white">
                <TextInput
                  label="Enter your email:"
                  name="username"
                  required={true}
                  type="email"
                  placeholder="techymoses@gmail.com"
                  formHandler={formHandler}
                />
              </div>
              <div class="md:w-fit pt-2 md:pt-6">
                <Show
                  when={formHandler.isFormInvalid()}
                  fallback={
                    <>
                      <Show
                        when={isProcessing()}
                        fallback={
                          <button
                            type="submit"
                            class="bg-red-800 text-white border-2 border-white w-full h-12 px-3 hover:opacity-60"
                          >
                            Continue <ChevronRight/>
                          </button>
                        }
                      >
                        <button
                          disabled
                          class="animate-pulse opacity-60 border-2 border-white bg-black text-white w-full h-12 px-3"
                        >
                          Processing.. .
                        </button>
                      </Show>
                    </>
                  }
                >
                  <button
                    disabled
                    class="cursor-not-allowed opacity-60 border-2 border-white bg-black text-white w-full h-12 px-3"
                  >
                    Continue <ChevronRight/>
                  </button>
                </Show>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Popup;
