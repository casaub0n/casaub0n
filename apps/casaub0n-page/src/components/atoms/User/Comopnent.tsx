import type { FC } from "react"

type BasicInfo = {
  id: number
  name: string
}

type PersonalUser = BasicInfo & {
  type: "personal"
  age: number
}

type CompanyUser = BasicInfo & {
  type: "company"
  phone: string
}

type User = PersonalUser | CompanyUser

/**
 * get User data
 * @returns Merged State
 * @see https://zenn.dev/ficilcom/articles/940ecce71e45a6#%E3%83%A6%E3%83%8B%E3%82%AA%E3%83%B3%E5%9E%8B-(%7C)-%E3%81%A8%E4%BA%A4%E5%B7%AE%E5%9E%8B-(%26)
 */
const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch("https://api.example.com/users")
  if (!response.ok) {
    throw new Error("Failed to fetch users")
  }

  return (await response.json()) as User[]
}

const Component: FC = async () => {
  const users = await fetchUsers()

  return (
    <div>
      {users.map((user) => (
        <div>
          <div>{user.name}</div>
          {user.type === "personal" && <div>{user.age}</div>}
          {user.type === "company" && <div>{user.phone}</div>}
        </div>
      ))}
    </div>
  )
}

export { Component }
