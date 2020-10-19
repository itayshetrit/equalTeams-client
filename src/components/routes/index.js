export const LogAndReg = {
    login: '/login',
    answer: '/answer/:id'
}

export const Client = {
    clients: '/clients',
    tables: '/tables',
    list: '/list'
}
export const Admin = {
    admin: '/admin',
    get_users: '/get_users',
    elections: '/elections',
    add_user: '/add_user'
}
const Routes = {
    LogAndReg,
    Client,
    Admin
}

export default Routes;