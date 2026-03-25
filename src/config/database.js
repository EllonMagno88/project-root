require('dotenv').config();

module.exports = {
  dialect: process.env.DB_DIALECT || 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 6543, // Certifique-se de que a porta está correta
  
  logging: false, 
  
  // ADICIONE ESTE BLOCO ABAIXO
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // Isso evita erros de certificado auto-assinado
    }
  },

  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};