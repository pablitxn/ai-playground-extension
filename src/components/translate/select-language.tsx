import React, { FC, useState, useEffect, ChangeEvent } from "react"

const SelectLanguage: FC<SelectLanguageProps> = ({
  selectLanguage,
  languages,
  selectedLanguage
}) => {
  const [languageSelection, setLanguageSelection] = useState({
    from: selectedLanguage.from,
    to: selectedLanguage.to
  })

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    setLanguageSelection((prev) => ({
      ...prev,
      [name]: value as Languages
    }))
  }

  useEffect(() => {
    selectLanguage(languageSelection)
  }, [languageSelection, selectLanguage])

  return (
    <div className="flex justify-between">
      <div className="my-4 w-1/2 pr-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
          From
        </label>
        <select
          className="mt-1 block w-full p-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600"
          value={languageSelection.from}
          name="from"
          onChange={handleChange}
        >
          {languages.map((option, idx) => (
            <option key={idx} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="my-4 w-1/2 pl-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
          To
        </label>
        <select
          className="mt-1 block w-full p-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600"
          value={languageSelection.to}
          name="to"
          onChange={handleChange}
        >
          {languages.map((option, idx) => (
            <option key={idx} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default SelectLanguage
