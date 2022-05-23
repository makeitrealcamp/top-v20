import { gql, useQuery, useLazyQuery } from '@apollo/client'

const ALL_PETS = gql`
  query GetAllPets ($category: PetCategory $status: PetStatus){
    allPets (status: $status category: $category){
      id
      name
      status
      weight
      category
    }
    totalPets
  }
`

const CATEGORIES = {
  DOG: '🐶',
  CAT: '🐱',
  RABBIT: '🐰',
  STINGRAY: '🐳',
}

const AllPets = (props) => {
  const { status, category } = props;
  const { loading, error, data } = useQuery(ALL_PETS, { variables: { status, category } })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return data.allPets.map(pet => (
    <div key={pet.id}>
      <p>
        <strong>
          {CATEGORIES[pet.category]} {pet.name}
        </strong> : {pet.weight} kg
      </p>
    </div>
  ))
}

export default AllPets;
