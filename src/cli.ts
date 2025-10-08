import { Command } from 'commander';
import { config } from './config';
import { RagService } from './services/RagService';

async function main() {
  const ragService = new RagService(config);
  const program = new Command();

  program
    .name('super-app-rag')
    .version('0.0.1')
    .description('A chatbot CLI designed to answer questions and provide guidance about my react-native project SDK!');

  program
    .command('chat')
    .description('Start an interactive chat session with the RAG system.')
    .action(async () => {
      try {
        console.log('Iniciando o chatbot...');
        await ragService.initialize();
      } catch (error) {
        console.error('Erro ao iniciar o chat', error);
      }
    });

  program.parse(process.argv);
}

main();
