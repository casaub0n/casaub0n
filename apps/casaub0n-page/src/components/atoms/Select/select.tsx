import { useState } from "react"

/**
 * @see https://zenn.dev/ficilcom/articles/940ecce71e45a6#%E3%82%B8%E3%82%A7%E3%83%8D%E3%83%AA%E3%83%83%E3%82%AF
 */
const Select = <T extends string,>({
  options,
  value,
  onChange,
}: {
  options: T[]
  value: T
  onChange: (value: T) => void
}) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value as T)}>
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  )
}

type Drink = "water" | "coffee"
const options: Drink[] = ["water", "coffee"]

const Component = () => {
  const [selectedOption, setSelectedOpiton] = useState<Drink>(options[0])

  return (
    <Select
      options={options}
      value={selectedOption}
      onChange={(val) => setSelectedOpiton(val)}
    />
  )
}

export { Component }
