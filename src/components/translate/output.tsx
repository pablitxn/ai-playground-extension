import React, { FC } from "react"

const Output: FC<OutputProps> = ({ translation }) => {
  return (
    <div className="flex items-start justify-end gap-4 mt-4 p-4 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600">
      <div className="max-w-4xl rounded-t-2xl rounded-bl-2xl bg-primary-dark px-4 py-3 text-gray-light">
        {translation &&
          translation.content.map(({ type, payload, id }) => (
            <div
              key={id}
              className="whitespace-pre-line text-sm text-gray-900 dark:text-gray-200"
            >
              {type === "text" && <span>{payload.content}</span>}
            </div>
          ))}
      </div>
    </div>
  )
}

export default Output
