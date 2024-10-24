const Ai = require('./aiclass');
const stream=require('./streming')
const api_key="AIzaSyATDso-pnEujL10NYz51o-xjvWOB6BbRUM"
const myAi = new Ai((provider = "google"), api_key, "You are a helpfull ai bot");
const {z, Schema} = require("zod");

async function generateText(prompt) {
  const result = await myAi.generatingtext("gemini-1.5-flash", [
    { role: "user", content: prompt },
  ]);
  console.log( result);
}
async function streamText(prompt) {
    const result = await myAi.streamingtext("gemini-1.5-flash", [
      { role: "user", content: prompt },
    ]);
    const streaming=new stream(result,300)
    streaming.stream()
  }
  async function generateObj(prompt) {
    
    const result = await myAi.generatingobj("gemini-1.5-flash", [
      { role: "user", content: prompt }],z.object({
       explaination:z.array(z.string())
      }),
    );
    console.log( result);
  }
  async function streamObj(prompt) {
    const result = await myAi.streamingobj("gemini-1.5-flash",[{role:"user",content:prompt}], z.object({
        
        expansion: z.string(),
        howitworks: z.array(z.string()),
        examples: z.array(z.string()),
        
      }));

      
        const streaming=new stream(JSON.stringify(result),5)
        streaming.stream()
      
    }

  

streamText("what is ai")
