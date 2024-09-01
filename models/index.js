const mongoose = require('mongoose');
require('dotenv').config();

const connectionString = `mongodb+srv://${process.env.DB_LOGIN}:${process.env.DB_PASS}@ect-contabil.vykg1.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=${process.env.DB_APP_NAME}`;

mongoose.connect(connectionString, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));


// Modelo de Agendamento
const AgendamentoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
});

const Agendamento = mongoose.model('Agendamento', AgendamentoSchema);

module.exports = { Agendamento };
