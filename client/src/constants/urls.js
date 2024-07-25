const PORT = 3000;
const URL_BASE = `http://localhost:${PORT}/`;
const REGISTER_USER = URL_BASE + 'auth/register';
const LOGIN_USER = URL_BASE + 'auth/login';
const VERIFY_TOKEN = URL_BASE + 'auth/verify-token';

export const URLS = { REGISTER_USER, LOGIN_USER, VERIFY_TOKEN };
