import { useEffect, useState } from 'react'
import './App.css'
import { type User } from './interfaces/UsersResponse.interface'
import { UsersList } from './components/UsersList'

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [colorRows, setColorRows] = useState(false)

  const toggleColors = () => {
    setColorRows(!colorRows)
  }
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=100')
      .then(async (response) => await response.json())
      .then((data) => {
        setUsers(data.results)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div className="App">
      <h2>Listado de Usuarios</h2>
      <header>
        <button onClick={toggleColors}>Colorea filas</button>
      </header>
      <main>
        <UsersList users={users} colorRows={colorRows} />
      </main>
    </div>
  )
}

export default App
