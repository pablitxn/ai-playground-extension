import React, {FC} from "react"
import {Content} from "@/types/globals.d"

const Output: FC<OutputProps> = ({translation}) => (
  <div className="bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 mt-4 flex items-start justify-end gap-4 border p-4">
    <div className="text-gray-light max-w-4xl rounded-t-2xl rounded-bl-2xl bg-primary-dark px-4 py-3">
      {translation &&
        translation.content.map(({type, payload, id}: Content) => (
          <div
            key={id}
            className="text-gray-900 dark:text-gray-200 whitespace-pre-line text-sm"
          >
            {type === "text" && <span>{payload.content}</span>}
          </div>
        ))}
    </div>
  </div>
)

export default Output
