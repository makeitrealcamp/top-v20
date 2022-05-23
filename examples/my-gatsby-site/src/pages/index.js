import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Character from "../components/character"
// markup
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulCharacters {
        nodes {
          id
          slug
          name
          image {
            file {
              url
            }
          }
        }
      }
    }
  `)
  return (
    <main>
      <title>Home Page</title>
      <h1>Characters</h1>
      {
        data.allContentfulCharacters.nodes.map(character => (
          <Character key={character.id} {...character} />
        ))
      }
    </main>
  )
}

export default IndexPage
