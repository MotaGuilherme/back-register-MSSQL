const userModel = require('../model/user.model')
const {where} = require("sequelize");


class UserRepository {

    async createUser(user){
        try {
            return await userModel.create(user)
        }  catch (e) {
            console.log(e)
        }
    }

    async authUser(body) {
        try {
            return await userModel.findOne({where: body});

        } catch (e) {
    console.log(e)
        }
    }

    async listAllUsers() {
        try {
            return await userModel.findAll()
        }catch (e) {
            console.log(e)
        }
    }

    async updateUser(id, body) {
        try {
            console.log(body)
           return await userModel.update({body},{where: {id: id}});

        }  catch (e) {
            console.log(e)
        }
    }

    async findUser(email) {
        try {
            const user = await userModel.findOne({where: email});
            console.log(user)
            return (user)

        }catch (e) {
            console.log(e)
        }
    }

    async listUser(id) {
        try {
            return await userModel.findByPk(id);

        }catch (e) {
            console.log(e)
        }
    }

    async deleteUser(id) {
        try {
            return await userModel.destroy({where: {id}});

        }catch (e) {
            console.log(e)
        }
    }
}

module.exports = UserRepository;
