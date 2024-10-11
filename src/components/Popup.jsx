import { A } from "@solidjs/router";
import Logo from "./Logo";
import TextInput from "./TextInput";
import PasswordInput from "./PasswordInput";

import { createSignal, createEffect } from "solid-js";

import { useFormHandler } from "solid-form-handler";
import { zodSchema } from "solid-form-handler/zod";
import { z } from "zod";
import ChevronRight from "./icons/ChevronRight";
import LoginForm from "./LoginForm";

const schema = z.object({
  username: z.string().email("*Invalid"),
});

const VITE_API_URL = import.meta.env["VITE_API_URL"];

function Popup(props) {
  const formHandler = useFormHandler(zodSchema(schema));
  const { formData } = formHandler;

  const [isProcessing, setIsProcessing] = createSignal(false);
  const [message, setMessage] = createSignal("");
  const [theForm, setTheForm] = createSignal("");

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

  createEffect(() => {
    setTheForm(props.whichForm);
  });
  return (
    <div class="z-50 bg-black w-screen h-screen bg-opacity-95 fixed flex items-center top-0 bottom-0 left-0 right-0">
      <div class="rounded w-11/12 md:w-96 mx-auto text-sm bg-white p-4 border-b-8 border-yellow-400">
        <h2 class="text-lg text-center uppercase text-red-600">{theForm()}</h2>
        <Show when={theForm() === "sign in"}>
          <LoginForm whichIssue={props.whichIssue} />
        </Show>
        <Show when={theForm() === "subscribe"}>ccc</Show>
      </div>
    </div>
  );
}

export default Popup;
