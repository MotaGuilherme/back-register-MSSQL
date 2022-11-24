const UserRepository = require('../repositories/user.repository')

class UserService {

    async listAllUsers() {
       const user = await new UserRepository().listAllUsers()
       return JSON.stringify(user)
    }

    async listUser(id) {
        const user = await new UserRepository().listUser(id);
        return JSON.stringify(user)

    }

    async updateUser(id, body) {
        await new UserRepository().updateUser(id, body)

    }

    async deleteUser(id) {
        await new UserRepository().deleteUser(id)

    }
}

function setUser(body) {
    return {
        name: body.name,
        email: body.email,
        password: body.password,
        cpf: body.cpf,
        address: body.address
    }
}

module.exports = UserService;
