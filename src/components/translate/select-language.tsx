import React, { FC } from "react"

const SelectLanguage: FC<SelectLanguageProps> = ({ label, options, onChange }) => {
  return (
    <div className="my-4">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">{label}</label>
      <select
        className="mt-1 block w-full p-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600"
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option, idx) => (
          <option key={idx} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SelectLanguage
