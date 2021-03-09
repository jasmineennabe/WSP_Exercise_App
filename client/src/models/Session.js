

const Session = {
    user: null,
    message: []
}
export default Session;

export function Login() {
    Session.user = { name: 'Jasmine', handle: '@jas' }
}
export function Logout() {
    Session.user = null
}