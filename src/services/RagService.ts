import { PDFLoader } from '@langchain/community/document_loaders/fs/pdf';

interface RagConfig {
  knowledgeBasePath: string;
}

export class RagService {
  private readonly config: RagConfig;

  constructor(config: RagConfig) {
    this.config = config;
  }

  public async initialize() {
    console.log('Inicializando o Service ....');

    const loader = new PDFLoader(this.config.knowledgeBasePath);
    const docs = await loader.load();

    console.log('Documento carregado', docs);
  }
}
