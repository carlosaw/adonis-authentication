import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  // Cria o token.
  public async login({ request, auth }: HttpContextContract) {
    const {email, password} = request.all();
    const token = await auth.attempt(email, password, {
      expiresIn: '365 days'
    });

    return token;
  }

  public async logout({ auth }: HttpContextContract) {
    await auth.logout();
  }

  // Pegar o usuário logado e autenticado.
  public async me({auth}: HttpContextContract) {

   // await auth.authenticate();
    
    return {isLoggedIn: auth.user}
  }

  public async private({}) {
    return { route: 'Private' }
  }
}
