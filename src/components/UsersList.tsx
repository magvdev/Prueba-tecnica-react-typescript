import { type User } from '../interfaces/UsersResponse.interface'

interface Props {
  users: User[]
  colorRows: boolean
}

export function UsersList({ users, colorRows }: Props) {
  return (
    <table width="100%">
      <thead>
        <tr>
          <th>Foto</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>País</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user: User, index: number) => {
          const backgroundColor = index % 2 === 0 ? '#fff' : 'transparent'
          const rowColor = colorRows ? backgroundColor : 'transparent'
          return (
            <tr key={user.login.uuid} style={{ backgroundColor: rowColor }}>
              <td>
                <img src={user.picture.thumbnail}></img>
              </td>
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.location.country}</td>
              <td>
                <button>Borrar</button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
