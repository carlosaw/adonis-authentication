import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User';

export default class extends BaseSeeder {
  public async run () {
    // Gravar suas consultas de banco de dados dentro do método run
    await User.create({
      email: 'carlos@gmail.com',
      password: '123456'
    })
  }
}
