const users = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
  },
]

export default function handler(req, res) {
  res.status(200).json(users)
}
