const users = [
    {id: "1", name: "test1", email:"test1@gmail.com"},
    {id: "2", name: "test2", email:"test2@email.com"},
    {id: "3", name: "test3", email:"test2@email.com"},
]

export const prisma = {
    findMany : async () => users,
    findUnique: async (userId: string) => {
        return users.find(u => u.id === userId)
    }
}