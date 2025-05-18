module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  safelist: [
    "grid", "grid-cols-2", "gap-2", "gap-4",
    "bg-blue-200", "bg-blue-400", "bg-blue-500",
    "bg-red-200", "bg-red-400", "bg-red-500",
    "bg-green-200", "bg-yellow-200",
    "p-2", "p-4", "text-2xl", "font-bold", "text-center"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}