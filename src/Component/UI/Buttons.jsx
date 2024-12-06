import clsx from 'clsx'

function Button({ children }) {
  return (
    <button className="flex items-center gap-2 py-2 px-3 border rounded text-sm font-medium text-blue-500 cursor-pointer bg-blue-50 hover:bg-blue-100">
      {children}
    </button>
  )
}

export default Button;
