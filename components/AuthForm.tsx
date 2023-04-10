"use client";

import { useState } from "react";
import LoaderSpinner from "./LoaderSpinner";
import Link from "next/link";
import { Layout } from "react-feather";
import { register, signin } from "@/lib/fetch";
import { useRouter } from "next/navigation";

const registerContent = {
  header: "Create New Account",
  buttonText: "Register",
  linkText: "Already have an account ?",
  url: "/signin",
};

const signinContent = {
  header: "Sign In",
  buttonText: "Sign in",
  linkText: "Don't have and accout ?",
  url: "/register",
};

const AuthForm = ({ mode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const router = useRouter();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let content = {};
  if (mode === "register") {
    content = { ...registerContent };
  } else {
    content = { ...signinContent };
  }

  async function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();

    if (mode === "register") {
      if (!error) {
        try {
          await register(formData);
          setFormData({
            name: "",
            email: "",
            password: "",
            passwordConfirm: "",
          });
          router.push("/dashboard");
          setLoading(false);
        } catch (e) {
          setLoading(false);
          setError("This account already exists");
        }
      }
    } else {
      try {
        setError(null);
        await signin(formData);
        setFormData({
          name: "",
          email: "",
          password: "",
          passwordConfirm: "",
        });
        router.push("/dashboard");
        setLoading(false);
      } catch (e) {
        setLoading(false);
        setError("Wrong credentials");
      }
    }
  }

  function handleValidation() {
    if (mode === "register") {
      if (formData.password.length < 8) {
        setError("Password must be at least 8 characters long");
      } else if (formData.password !== formData.passwordConfirm) {
        setError("Passwords don't match");
      } else {
        setError(null);
      }
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-10 text-white bg-gray-800 w-full sm:w-96 mx-auto rounded-lg border-2 border-slate-400"
    >
      <div className="flex flex-col justify-around gap-4 mx-auto">
        <div className="flex justify-center px-4 gap-4">
          <Layout size={40} className="text-indigo-500" />
          <div className="text-center">
            <div className="text-4xl font-bold tracking-wider ">kanban</div>
            <div className="p-0 m-0">Task Manager</div>
          </div>
        </div>
        <div className="text-center text-2xl pt-8">{content.header}</div>

        {mode === "register" && (
          <div className="flex flex-col">
            <label className=" mb-1" htmlFor="name">
              Name
            </label>
            <input
              required
              className="h-8 bg-slate-500 rounded-md outline-none p-2"
              type="text"
              value={formData.name}
              id="name"
              name="name"
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
              }}
            />
          </div>
        )}

        <div className="flex flex-col">
          <label className="mb-1" htmlFor="email">
            Email
          </label>
          <input
            required
            className="h-8 bg-slate-500 rounded-md outline-none p-2"
            type="email"
            id="email"
            value={formData.email}
            name="email"
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1" htmlFor="password">
            Password
          </label>
          <input
            required
            className="h-8 bg-slate-500 rounded-md outline-none p-2"
            type="password"
            id="password"
            value={formData.password}
            name="password"
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
            }}
          />
        </div>
        {mode === "register" && (
          <div className="flex flex-col">
            <label className="mb-1" htmlFor="confirm-password">
              Confirm Password
            </label>
            <input
              required
              className="h-8 bg-slate-500 rounded-md outline-none p-2"
              type="password"
              id="confirm-password"
              value={formData.passwordConfirm}
              name="confirm-password"
              onChange={(e) => {
                setFormData({ ...formData, passwordConfirm: e.target.value });
              }}
            />
          </div>
        )}
        {error && (
          <div className="bg-red-500/50 rounded p-3 text-red-200 border border-red-200">
            {error}
          </div>
        )}
        {loading && <LoaderSpinner />}
        <button
          type="submit"
          className="tracking-widest text-lg mt-10 w-100 bg-indigo-500 rounded-full p-2 my-3"
          onClick={handleValidation}
        >
          {content.buttonText}
        </button>
        <Link href={content.url} className="text-indigo-300">
          {content.linkText}
        </Link>
      </div>
    </form>
  );
};

export default AuthForm;
