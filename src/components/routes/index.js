export const LogAndReg = {
    login: '/login',
    register: '/register'
}

export const Admin = {
    admin: '/admin',
    team_page: '/team_page/:team',
    get_users: '/get_users',
    elections: '/elections/:team',
    add_user: '/add_user'
}
const Routes = {
    LogAndReg,
    Admin
}

export default Routes;