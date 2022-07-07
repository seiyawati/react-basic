import { useState } from "react"

const TextInput = () => {
  const [name, setName] = useState('')

  const handleName = (event) => {
    // 更新関数
    setName(event.target.value)
    console.log(name)
  }

  return (
    <input
      onChange={(event) => handleName(event)}
      type={'text'}
      value={name}
    />
  )
}

export default TextInput
