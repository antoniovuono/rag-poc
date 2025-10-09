import { PDFLoader } from '@langchain/community/document_loaders/fs/pdf';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';

interface RagConfig {
  knowledgeBasePath: string;
  textSplitter: {
    chunkSize: number;
    chunkOverlap: number;
  };
}

export class RagService {
  private readonly config: RagConfig;

  constructor(config: RagConfig) {
    this.config = config;
  }

  public async initialize() {
    console.log('Inicializando o Service ....');

    // 1. Load document (pdf)
    const loader = new PDFLoader(this.config.knowledgeBasePath);
    const docs = await loader.load();

    // 2. Split document
    const splitter = new RecursiveCharacterTextSplitter(this.config.textSplitter);

    const splitDocs = await splitter.splitDocuments(docs);

    console.log('documento dividido!', splitDocs);
  }
}
