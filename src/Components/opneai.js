import OpenAI from 'openai';
import { GPT_KEY } from '../utils/constants';

const openai = new OpenAI({
    apiKey: GPT_KEY,
    dangerouslyAllowBrowser: true
});

export default openai;