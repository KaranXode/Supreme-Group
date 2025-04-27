import React from "react";

interface TextAreaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

function TextAreaField({ className = "", ...props }: TextAreaFieldProps) {
  return (
    <div className="relative">
      <textarea
        {...props}
        rows={3}
        className={`text-white placeholder:text-opacity-90 focus-visible:border-opacity-100 border-white border-opacity-40 transition-all duration-200 tracking-wide ease-in-out border-b-2 border-solid py-2 pr-2 w-full text-base lg:text-lg placeholder:text-white font-normal bg-transparent outline-none focus-visible:outline-none ${className}`}
      />
    </div>
  );
}

export default TextAreaField;
