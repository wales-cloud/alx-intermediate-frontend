module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  safelist: [
  "grid", "grid-cols-2", "gap-2", "gap-4",
  "bg-blue-200", "bg-blue-400", "bg-blue-500",
  "bg-red-200", "bg-red-400", "bg-red-500",
  "bg-green-200", "bg-yellow-200",
  "p-2", "p-4", "px-2",
  "text-2xl", "text-xl", "text-white", "font-bold", "text-center",
  "flex", "space-x-5", "justify-center",
  "bg-gray-300", "hover:bg-gray-500", "rounded-lg", "mb-4"
],
  theme: {
    extend: {},
  },
  plugins: [],
}