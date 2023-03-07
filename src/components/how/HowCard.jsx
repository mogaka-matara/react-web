import React from 'react'

const HowCard = () => {
  return (
    <div class=" h-full w-full relative mt-12 lg:mt-20">
    <div class="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
        <img class="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
    </div>

    <div class="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
        <div>
            <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span class="text-xl font-semibold text-gray-700"> 1 </span>
            </div>
            <h3 class="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Create a free account</h3>
            <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
        </div>

        <div>
            <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span class="text-xl font-semibold text-gray-700"> 2 </span>
            </div>
            <h3 class="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Build your website</h3>
            <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
        </div>

        <div>
            <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span class="text-xl font-semibold text-gray-700"> 3 </span>
            </div>
            <h3 class="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Release & Launch</h3>
            <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
        </div>
    </div>
</div>
  )
}

export default HowCard