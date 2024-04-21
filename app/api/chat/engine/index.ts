import {
  CondenseQuestionChatEngine,
  ContextChatEngine,
  LLM,
  serviceContextFromDefaults,
  SimpleDocumentStore,
  storageContextFromDefaults,
  VectorStoreIndex,
} from "llamaindex";
import { CHUNK_OVERLAP, CHUNK_SIZE, STORAGE_CACHE_DIR } from "./constants.mjs";

async function getDataSource(llm: LLM) {
  const serviceContext = serviceContextFromDefaults({
    llm,
    chunkSize: CHUNK_SIZE,
    chunkOverlap: CHUNK_OVERLAP,
  });
  let storageContext = await storageContextFromDefaults({
    persistDir: `${STORAGE_CACHE_DIR}`,
  });

  const numberOfDocs = Object.keys(
    (storageContext.docStore as SimpleDocumentStore).toDict(),
  ).length;
  if (numberOfDocs === 0) {
    throw new Error(
      `StorageContext is empty - call 'npm run generate' to generate the storage first`,
    );
  }
  return await VectorStoreIndex.init({
    storageContext,
    serviceContext,
  });
}

export async function createChatEngine(llm: LLM) {
  const index = await getDataSource(llm);
  const retriever = index.asRetriever();
  retriever.similarityTopK = 10;

  return new ContextChatEngine({
    chatModel: llm,
    retriever,
  });
}





export async function createCondenseQuestionChatEngine(llm: LLM) {
  // Reuse getDataSource to initialize the query engine
  const index = await getDataSource(llm);

  // Assuming the CondenseQuestionChatEngine constructor expects similar parameters to ContextChatEngine
  // Note: The actual parameters will depend on your CondenseQuestionChatEngine implementation details
  const chatEngine = new CondenseQuestionChatEngine({
    queryEngine: index, // Your initialized VectorStoreIndex or similar
    chatHistory: [], // Initially empty, assuming your implementation does not require pre-existing history
    serviceContext: serviceContextFromDefaults({
      llm, // Pass the LLM instance
      // Include any other relevant service context configurations here
    }),
    // If your CondenseQuestionChatEngine requires a condenseMessagePrompt, define it here
    // For simplicity, this example does not include a custom condenseMessagePrompt implementation
  });

  return chatEngine;
}
