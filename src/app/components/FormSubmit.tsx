"use client";
import { useState } from "react";
import { getStrapiURL } from "../utils/api-helpers";

export default function FormSubmit({
  placeholder,
  text,
}: {
  placeholder: string;
  text: string;
}) {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const token = process.env.NEXT_PUBLIC_STRAPI_FORM_SUBMISSION_TOKEN;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  async function handleSubmit() {
    if (email === "") {
      setErrorMessage("Email cannot be blank.");
      return;
    }

    if (!emailRegex.test(email)) {
      setErrorMessage("Invalid email format.");
      return;
    }

    // biome-ignore lint/style/useTemplate: <explanation>
    const res = await fetch(getStrapiURL() + "/api/lead-form-submissions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ data: { email } }),
    });

    if (!res.ok) {
      setErrorMessage("Email failed to submit.");
      return;
    }
    setErrorMessage("");
    setSuccessMessage("Email successfully submitted!");
    setEmail("");
  }

  return (
    <div className="flex flex-row flex-shrink-0 justify-center items-center self-center shadow-md lg:justify-end">
      <div className="flex flex-col">
        <div className="flex flex-row">
          {successMessage ? (
            <p className="py-2 px-4 text-green-700 bg-green-300 rounded-lg">
              {successMessage}
            </p>
          ) : (
            <>
              <input
                type="email"
                placeholder={errorMessage || placeholder}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className={"w-3/5 p-3 rounded-l-lg sm:w-2/3 text-gray-700"}
              />
              <button
                type="button"
                className="p-3 w-2/5 font-semibold rounded-r-lg sm:w-1/3 dark:text-gray-900 dark:bg-violet-400"
                onClick={handleSubmit}
              >
                {text}
              </button>
            </>
          )}
        </div>

        {errorMessage && (
          <p className="py-2 px-4 my-2 text-red-500 bg-red-200 rounded-lg">
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
}
