const addUser = require('./users')
const usersModule = require('./users')

const init = async () => {
    const user = { firstname: 'Luffy', lastname: 'Monkey.D' }
    await usersModule.addUser(user)
    const result = await usersModule.getUser()
    console.log('result:', result);
}

init()