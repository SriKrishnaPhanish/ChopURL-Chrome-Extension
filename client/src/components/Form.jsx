import { Button } from "./Button";
import { CopyBox } from "./CopyBox";

export const URLForm = () => {
  return (
    <div class="flex flex-col py-4 sm:py-8">
      <div class="relative w-full max-w-sm mx-auto">
        <div class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-3 rounded-xl"></div>
        <div class="relative px-4 py-8 bg-white shadow-lg rounded-xl sm:px-10">
          <div class="max-w-md mx-auto">
            <div>
              <h1 class="text-3xl font-extrabold text-center font-BadScript cursor-pointer text-blue-600 sm:text-4xl">
                ChopURL
              </h1>
            </div>
            <div class="divide-y divide-gray-200">
              <div class="py-6 text-sm leading-6 space-y-4 text-gray-700 sm:text-base sm:leading-7">
                <div class="relative">
                  <input
                    autoComplete="off"
                    id="urlEntered"
                    name="url"
                    type="url"
                    class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="www.chopURL.com"
                  />
                  <label
                    for="url"
                    class="absolute left-0 -top-3 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Enter the URL
                  </label>
                </div>
                <div class="relative text-center mt-2">
                  <Button />
                </div>
                <div
                  id="errorMessageDisplay"
                  hidden
                  className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 "
                  role="alert"
                ></div>
                <CopyBox />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
