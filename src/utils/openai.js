import OpenAI from 'openai';
import {openAI_API} from "./gptConstant"

const openai = new OpenAI({
  apiKey: [openAI_API],
   dangerouslyAllowBrowser: true ,
   // This is the default and can be omitted
});

export default openai;