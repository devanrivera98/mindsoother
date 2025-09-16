"use client";

import { useState } from "react";

interface FormInputInterface {
  Icon: React.ElementType;
  name: string;
  placeholder: string;
  field: "email" | "fullName";
  isSubmitted: boolean;
  formValue: string;
  autoComplete?: string;
  onInputChange: (name: string, value: string) => void;
}

const formRules = {
  fullName: [
    {
      test: (value: string) =>
        value.trim().length > 0 && /[a-zA-Z]/.test(value),
      message: "Not a valid name",
    },
  ],
  email: [
    {
      test: (value: string) => value.length >= 1 && /[a-zA-Z]/.test(value),
      message: "Not a valid email",
    },
    {
      test: (value: string) => value.length >= 1 && /@/.test(value),
      message: "Email must include an @",
    },
  ],
};

export default function FormInput({
  Icon,
  name,
  field,
  placeholder,
  autoComplete,
  onInputChange,
  isSubmitted,
  formValue,
}: FormInputInterface) {
  const [showError, setShowError] = useState(false);

  return (
    <div className="flex flex-col gap-y-2">
      <label htmlFor={field}>{name}</label>
      <div className="relative">
        <div
          className="absolute inset-y-0 left-0 pl-3 flex items-center"
          aria-hidden="true"
        >
          <Icon stroke="gray" fontSize={20} />
        </div>
        <input
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
          required
          aria-invalid={
            isSubmitted &&
            showError &&
            formRules[field]?.some((rule) => !rule.test(formValue))
          }
          aria-describedby={showError ? `${field}-message` : undefined}
        />
      </div>
      {showError && formRules[field]?.some((rule) => !rule.test(formValue)) && (
        <div id={`${field}-message`}>
          {formRules[field].map((rule) =>
            !rule.test(formValue) ? (
              <p key={rule.message} className="text-red-500 pl-1">
                <span aria-hidden="true">⚠️ </span>
                {rule.message}
              </p>
            ) : null,
          )}
        </div>
      )}
    </div>
  );
}
