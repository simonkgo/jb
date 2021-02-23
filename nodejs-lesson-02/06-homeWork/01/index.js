const login = require('./login')
const register = require('./register')



const app = () => {

    register('luffy', 'onePiece')

    login('dluffy', 'onePiece')
}


app()