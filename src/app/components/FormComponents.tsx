import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function FormInput({ className = "", ...props }: InputProps) {
  return (
    <input
      {...props}
      className={`w-full px-4 py-3 rounded-2xl bg-cinza-form text-cinza-text placeholder:text-cinza-text italic font-medium text-base tracking-[0.02em] outline-none placeholder:pl-1 focus:bg-[#e4e4e4] focus:border focus:border-[#aac0f0] ${className}`}
    />
  );
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export function FormTextarea({ className = "", ...props }: TextareaProps) {
  return (
    <textarea
      {...props}
      className={`w-full h-40 px-4 py-3 rounded-2xl bg-cinza-form text-cinza-text placeholder:text-cinza-text italic font-medium text-base tracking-[0.02em] outline-none resize-none placeholder:pl-1 focus:bg-[#e4e4e4] focus:border focus:border-[#aac0f0] ${className}`}
    />
  );
}

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  touched?: boolean;
  accepted?: boolean;
  children: React.ReactNode;
}

export function FormCheckbox({
  touched,
  accepted,
  className = "",
  children,
  ...props
}: CheckboxProps) {
  const error = touched && !accepted;

  return (
    <div className="flex flex-col items-center text-center">
      <label
        className={`flex items-center justify-center gap-2 italic font-medium text-base tracking-[0.02em] ${
          error ? "text-red-600" : "text-cinza-text"
        }`}
      >
        <input
          type="checkbox"
          className={`w-5 h-5 rounded-sm accent-green-600 bg-cinza-form transition-colors ${
            error ? "border-2 border-red-600" : "border border-gray-300"
          } focus:ring-2 focus:ring-[#aac0f0] ${className}`}
          {...props}
        />
        {children}
      </label>
      {error && (
        <span className="text-red-600 mt-1 text-sm">
          Você precisa aceitar os termos para continuar.
        </span>
      )}
    </div>
  );
}
