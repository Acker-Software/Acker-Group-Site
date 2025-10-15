import type { InputHTMLAttributes } from "react"
import { cn } from "../utils/cn"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input = ({ label, error, className, id, ...props }: InputProps) => {
  const inputId = id || props.name
  
  return (
    <div className="w-full">
      {label && (
        <label 
          htmlFor={inputId} 
          className="block text-sm font-medium text-slate-300 mb-2"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={cn(
          "w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white",
          "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
          "placeholder:text-slate-500",
          error && "border-red-500",
          className
        )}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  )
}
