declare module '@apiverve/paraphrase' {
  export interface paraphraseOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface paraphraseResponse {
    status: string;
    error: string | null;
    data: ParaphraseData;
    code?: number;
  }


  interface ParaphraseData {
      original:         string;
      paraphrased:      string;
      style:            string;
      originalWords:    number;
      paraphrasedWords: number;
  }

  export default class paraphraseWrapper {
    constructor(options: paraphraseOptions);

    execute(callback: (error: any, data: paraphraseResponse | null) => void): Promise<paraphraseResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: paraphraseResponse | null) => void): Promise<paraphraseResponse>;
    execute(query?: Record<string, any>): Promise<paraphraseResponse>;
  }
}
