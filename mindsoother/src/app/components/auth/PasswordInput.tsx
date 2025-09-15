"use client";

import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "../icons/index";

interface PasswordInputInterface {
  Icon: React.ElementType;
  name: string;
  placeholder: string;
  field: "password" | "confirmPassword";
  isSubmitted: boolean;
  password: string;
  confirmPassword: string;
  autoComplete?: string;
  onInputChange: (name: string, value: string) => void;
}

export default function PasswordInput({
  Icon,
  name,
  field,
  placeholder,
  autoComplete,
  onInputChange,
  password,
  confirmPassword,
}: PasswordInputInterface) {
  const [isShowing, setIsShowing] = useState(false);
  const [showError, setShowError] = useState(false);

  const passwordRules = {
    password: [
      {
        test: (pw: string) => pw.length >= 8,
        message: "At least 8 characters",
      },
      {
        test: (pw: string) => /[A-Z]/.test(pw),
        message: "Must contain an uppercase letter",
      },
      {
        test: (pw: string) => /[!@#$%^&*]/.test(pw),
        message: "Must contain a special character",
      },
      { test: (pw: string) => /\d/.test(pw), message: "Must contain a number" },
    ],
    confirmPassword: [
      {
        test: (confirmPw: string) => confirmPw === password,
        message: "Passwords must match",
      },
    ],
  };

  const valueToTest = field === "password" ? password : confirmPassword;

  return (
    <div className="flex flex-col gap-y-2">
      <label htmlFor={field}>{name}</label>
      <div className="relative">
        <input
          type={isShowing ? "text" : "password"}
          id={field}
          name={field}
          className="py-1 w-full pl-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder={placeholder}
          {...(autoComplete ? { autoComplete } : {})}
          onChange={(e) => {
            onInputChange(e.target.name, e.target.value);
            if (e.target.value.length > 0) {
              setShowError(true);
            } else {
              setShowError(false);
            }
          }}
        />
        <div
          className="absolute inset-y-0 left-0 pl-3 flex items-center"
          aria-hidden="true"
        >
          <Icon stroke="gray" fontSize={20} />
        </div>
        <button
          type="button"
          className="absolute inset-y-0 flex items-center right-3 my-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label={isShowing ? "Hide password text" : "Show password text"}
          onClick={() => setIsShowing(!isShowing)}
        >
          {isShowing ? (
            <IoEyeOffOutline
              fontSize={20}
              aria-hidden="true"
              focusable="false"
            />
          ) : (
            <IoEyeOutline fontSize={20} aria-hidden="true" focusable="false" />
          )}
        </button>
      </div>

      {showError &&
        passwordRules[field]?.map((rule) =>
          !rule.test(valueToTest) ? (
            <p key={rule.message} className="text-red-500 pl-1">
              {rule.message}
            </p>
          ) : null,
        )}
    </div>
  );
}
