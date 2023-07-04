import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'categories'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title');
      table.string('color',10);

      // Relaciona a categoria ao 'usuário' referencia o 'id' da tabela 'users'. 
      table.integer('user_id').unsigned().references('id').inTable('users');

      table.timestamps(true, true);
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
