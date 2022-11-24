const UserRepository = require('../repositories/user.repository')
const BadRequestError = require ('bad-request-error') ;
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")


const authConfig = require('./auth.json')


const generateToken = (user = {})=> {

    return jwt.sign({
        id: user.id,
        name: user.name
    },authConfig.secret ,{
        expiresIn: 86400
    })
}

class AuthService {

        async registerUser(body) {
            //await findUser(email);
            const user = setUser(body)
            await new UserRepository().createUser(user);

            user.password = undefined

            return JSON.stringify({
                user,
                token: generateToken(user)
            })
        }

        async authUser(body) {

            const {email, password} = body

            //const user = await findUser(email);
            const user = await new UserRepository().authUser(body);
                //await userModel.findOne({email}).select("+password");

            // if(!user){
            //     return Error ("asdsadsad")
            // }

            if(!await bcrypt.compare(password, user.body.password)){
                throw new BadRequestError ("Incorrect password")
            }

            //user.password = undefined;

            return JSON.stringify({user, token: generateToken(user)})

        }

        async authLegal(req, res){
            console.log("Logado")
            return res.json({msg: "logado"})
        }
    }

// if(await userModel.findOne({email})){
//     return res.status(400).json({
//         error:true,
//         message: "Usuario ja cadastrado"
//     })
// }

async function findUser(email) {

    const user = await new UserRepository().findUser(email)
    if(user) return new Error(" Usuário nao encontrado")
}

function setUser(body) {
    return {
        name: body.name,
        email: body.email,
        password: body.password,
        cpf: body.cpf,
        cep: body.endereco.cep,
        street: body.endereco.street,
        district: body.endereco.district,
        locality: body.endereco.locality,
        UF: body.endereco.UF

    }
}

module.exports = AuthService;
