import home from './home';
export default [{
  path: '/',
  redirect: {
    name: 'Login'
  }
},
  ...home
];