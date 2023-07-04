import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Categorie from 'App/Models/Categorie';

export default class CategoriesController {
  public async index({}: HttpContextContract) {
    //Exibe todas as categorias
    let categories = await Categorie.all();
    return categories;
  }

  //public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {
    // Cria uma categoria
  }

  public async show({}: HttpContextContract) {
    // Exibe informações de uma categoria específica.

  }

  //public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {
    // Altera uma categoria

  }

  public async destroy({}: HttpContextContract) {
    // Deleta uma categoria

  }
}
