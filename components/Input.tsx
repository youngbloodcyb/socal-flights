export default function Input() {
  return (
    <div className="flex flex-row mt-4  w-full">
      <label className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-red-600 focus-within:ring-1 focus-within:ring-red-600 w-2/3 hover:w-3/4 transition-all duration-300 ease-in-out">
        <span className="text-xs font-medium text-gray-700"> Email </span>

        <input
          type="email"
          id="UserEmail"
          placeholder="JohnnyAppleseed@gmail.com"
          className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm bg-transparent"
        />
      </label>
      <button className="text-sm px-6 border border-white rounded-md ml-4 text-gray-400 hover:text-white hover:text-base transition-all duration-300 ease-in-out">
        Sign Up
      </button>
    </div>
  );
}

// <label
//   for="UserEmail"
//   class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
// >
//   <span class="text-xs font-medium text-gray-700"> Email </span>

//   <input
//     type="email"
//     id="UserEmail"
//     placeholder="anthony@rhcp.com"
//     class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
//   />
// </label>
