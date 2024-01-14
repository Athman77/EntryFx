"use client";

import Container from "@/components/container";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";
export default function Contact({ settings }) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting }
  } = useForm({
    mode: "onTouched"
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(false);
  // Please update the Access Key in the Sanity CMS - Site Congig Page
  const apiKey = settings?.w3ckey || "3ba051e7-819d-4364-80a8-914a5557d6d6";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "snapIman",
      subject: "New Contact Message from snapIman"
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    }
  });

  return (
    <>
      <section className="custom-page global-cover-homepage global-alternative-buttons">
        <div className="global-cover"></div>
        <div className="custom-wrap">
          <div className="custom-container">
            <header className="header-section">
              <div className="header-wrap">
                <div className="header-logo">
                  <Link href="/">
                    <a className="is-image">
                      <img src="https://cdn.sanity.io/images/11ognen8/production/4cca0cc34eac7da36fedf0218a086c4d3bcef5f4-300x81.svg" alt="Genki" />
                    </a>
                  </Link>
                </div>
              </div>
            </header>
            <div className="custom-content">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h1
                  id="post-title"
                  className="custom-title global-title-large">
                  Contact us
                </h1>
                <label for="name">Your name</label>
                <input
                  type="text"
                  placeholder="Full Name"
                  autoComplete="false"
                  //required=""
                  {...register("name", {
                    required: "Full name is required",
                    maxLength: 80
                  })}
                />
                <label for="email">Your email address</label>
                <input
                  id="email_address"
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  autoComplete="false"
                  // required=""
                  {...register("email", {
                    required: "Enter your email",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Please enter a valid email"
                    }
                  })}
                />
                <label for="message">Your message</label>
                <textarea
                  id="message"
                  name="message"
                  {...register("message", {
                    required: "Enter your Message"
                  })}
                  required=""></textarea>
                {errors.message && (
                  <div className="mt-1 text-red-600">
                    {" "}
                    <small>{errors.message.message}</small>
                  </div>
                )}
                <button className="global-button" type="submit">
                  {isSubmitting ? (
                    <svg
                      className="mx-auto h-5 w-5 animate-spin text-white dark:text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>

              {isSubmitSuccessful && isSuccess && (
                <div className="mt-3 text-center text-sm text-green-500">
                  {message || "Success. Message sent successfully"}
                </div>
              )}
              {isSubmitSuccessful && !isSuccess && (
                <div className="mt-3 text-center text-sm text-red-500">
                  {message ||
                    "Something went wrong. Please try later."}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
