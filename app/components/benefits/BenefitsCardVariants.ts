export const benefitsCardVariants = {
  Left: {
    base: "bg-white flex flex-col w-full md:w-80 h-96 rounded-xl p-6",
    text: "font-bold text-3xl md:text-4xl bg-linear-to-r from-blue-900 to-blue-400 bg-clip-text text-transparent text-left",
  },

  Center: {
    base: "bg-linear-to-t from-blue-400 to-blue-900 md:w-80 flex flex-col w-full h-96 rounded-xl p-6",
    text: "font-bold text-3xl md:text-4xl text-white text-center",
  },

  Right: {
    base: "bg-white flex flex-col w-full md:w-80 h-96 rounded-xl p-6",
    text: "font-bold text-3xl md:text-4xl bg-linear-to-r from-blue-900 to-blue-400 bg-clip-text text-transparent text-right",
  },
}





export type benefitsCardVariant = keyof typeof benefitsCardVariants
