import React, { FC } from "react"

const Output: FC<OutputProps> = ({ translation }) => {
  return (
    <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600">
      <p className="text-sm text-gray-900 dark:text-gray-200">{translation}</p>
    </div>
  )
}

export default Output
