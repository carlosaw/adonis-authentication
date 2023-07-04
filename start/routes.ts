import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.post('/login', 'AuthController.login');

Route.group(()=>{
  Route.post('/logout', 'AuthController.logout');
  Route.get('/me', 'AuthController.me');
  Route.get('/private', 'AuthController.private');

  Route.resource('categories', 'CategorieController').apiOnly();
  Route.resource('tasks', 'TasksController').apiOnly();

}).middleware('auth');
