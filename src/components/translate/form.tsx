import React, { FC, useState, FormEvent, ChangeEvent } from "react"

const Form: FC<FormProps> = ({ onSubmit }) => {
  const [text, setText] = useState("")

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(text)
  }

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        className="w-full h-32 p-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600"
        onChange={handleChange}
        placeholder="Enter text to translate..."
      />
      <button
        type="submit"
        className="mt-2 w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-500 text-white font-bold py-2 px-4 rounded"
      >
        Translate
      </button>
    </form>
  )
}

export default Form
