import React from 'react'
import gptimg from "../assets/gpt.png"

function Card() {
  return (
<div class="w-full max-w-sm p-4 bg-gray-100 border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
<div className="flex flex-col gap-3">
    <h1 className='text-xl font-semibold'>Any model for any team</h1>
    <p className='text-gray-600 font-medium'>Use AI models like Claude Sonnet out of the box, or bring your own key to access models from Azure, Anthropic, Google, Ollama, OpenAI, and OpenRouter.</p>
    <div className="">
        <img src={gptimg} alt="" />
    </div>
</div>
</div>
  )
}

export default Card