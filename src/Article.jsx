import { useState } from "react"
import PublishButton from "./PublishButton"

const Article = (props) => {
  const [isPublished, setIsPublished] = useState(false)
  console.log(isPublished)
  const publishArticle = () => {
    setIsPublished(true)
  }
  return (
    <PublishButton isPublished={ isPublished } onClick={ publishArticle } />
  )
}

export default Article
