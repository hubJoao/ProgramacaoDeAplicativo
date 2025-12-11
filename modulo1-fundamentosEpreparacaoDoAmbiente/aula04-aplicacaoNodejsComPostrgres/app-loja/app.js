
const { Client } = require('pg');
require('dotenv').config(); // garante leitura do .env

const config = {
  user: process.env.DB_USER || 'admin',
  password: process.env.DB_PASSWORD || 'senha123',
  host: process.env.DB_HOST || '127.0.0.1',
  port: Number(process.env.DB_PORT || 5432),
  database: process.env.DB_NAME || 'aula_node_postgres',
};

// Diagnóstico: veja o usuário/host/porta que estão sendo usados
console.log('🔧 Configuração de conexão:', {
  user: config.user,
  host: config.host,
  port: config.port,
  database: config.database,
});

const client = new Client(config);

async function conectar() {
  try {
    await client.connect();
    console.log('✅ Conectado ao PostgreSQL com sucesso!');
    const { rows } = await client.query('SELECT NOW() AS agora;');
    console.log('🕒 Servidor:', rows[0].agora);
  } catch (erro) {
    console.error('❌ Erro ao conectar:', erro.message);
    console.error('ℹ️ Dica: se o usuário/senha estiverem corretos no .env e ainda falhar, pode ser um volume antigo com credenciais diferentes.');
  } finally {
    await client.end();
    console.log('🔌 Conexão encerrada.');
  }
}

conectar();
