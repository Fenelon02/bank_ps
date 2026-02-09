export const buttonVariants = {
  primary: {
    base: "bg-blue-600 text-white rounded-lg cursor-pointer transition-all duration-200",
    hover: "hover:bg-blue-700",
    active: "active:scale-95",
    focus: "focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2",
    disabled: "opacity-50 cursor-not-allowed pointer-events-none",
  },

  secondary: {
    base: "bg-white text-blue-600 rounded-lg cursor-pointer border border-blue-600 transition-all duration-200",
    hover: "hover:bg-blue-600 hover:text-white",
    active: "active:scale-95",
    focus: "focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2",
    disabled: "opacity-50 cursor-not-allowed pointer-events-none",
  },

  outline: {
    base: "bg-transparent text-blue-600 border border-blue-600 rounded-lg cursor-pointer transition-all duration-200",
    hover: "hover:bg-blue-600 hover:text-white",
    active: "active:scale-95",
    focus: "focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2",
    disabled: "opacity-50 cursor-not-allowed pointer-events-none",
  },

  transparent: {
    base: "bg-white/10 backdrop-blur-sm text-blue-300 border border-white/20 rounded-lg cursor-pointer shadow transition-all duration-200",
    hover: "hover:bg-white/20 hover:shadow-md",
    active: "active:scale-95",
    focus: "focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-transparent",
    disabled: "opacity-50 cursor-not-allowed pointer-events-none",
  },

  link: {
    base: "bg-transparent text-blue-500 cursor-pointer transition-colors duration-150",
    hover: "hover:text-blue-800 hover:underline hover:underline-offset-8",
    active: "",
    focus: "focus:outline-none focus:underline",
    disabled: "opacity-50 cursor-not-allowed pointer-events-none",
  },

    underline: {
    base: "bg-transparent text-black cursor-pointer border-b-2 border-blue-400 transition-all duration-200",
    hover: "hover:border-blue-700",
    active: "active:scale-95",
    focus: "focus:outline-none focus:border-blue-700",
    disabled: "opacity-50 cursor-not-allowed pointer-events-none",
  },

}

export type Variant = keyof typeof buttonVariants
