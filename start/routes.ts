import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})


Route.post('/login', 'AuthController.login');
Route.post('/logout', 'AuthController.logout');
Route.get('/me', 'AuthController.me').middleware('auth');
Route.get('/private', 'AuthController.private').middleware('auth');