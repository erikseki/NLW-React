import type { ComponentProps } from 'react'

// Components

// Component Div Pai
// extendendo o ComponentProps de uma div
interface InputRootProps extends ComponentProps<'div'> {
  error?: boolean // tipo do error opcional
}
export function InputRoot({ error = false, ...props }: InputRootProps) {
  return (
    <div
      data-error={error}
      className="group bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-2 focus-within:border-gray-100 data-[error=true]:border-danger"
      {...props}
    />
  )
}

// Component Input Icon
// extendendo o ComponentProps de um Span
interface InputIconProps extends ComponentProps<'span'> {}
export function InputIcon(props: InputIconProps) {
  return (
    <span
      className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger"
      {...props}
    />
  )
}

// Component Input Field
// extendendo o ComponentProps de um Input
interface InputFieldProps extends ComponentProps<'input'> {}
export function InputField(props: InputFieldProps) {
  return <input className="flex-1 outline-0 placeholder-gray-400" {...props} />
}

// modelo antigo sem o Composition Pattern
// interface InputProps extends ComponentProps<'input'> {
//   error?: boolean

//  }

// export function Input({error = false, ...props}: InputProps) {
//   return (
//     <div
//      data-error={error}
//     className="group bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-2 focus-within:border-gray-100 data-[error=true]:border-danger"
//     >
//       <span className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger"
//       >
//         <Mail />
//       </span>
// <input
//   className="flex-1 outline-0 placeholder-gray-400"
//   {...props}
// />
//     </div>
//   )
// }
