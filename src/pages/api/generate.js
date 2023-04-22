import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey:
    process.env.OPENAI_API_KEY ||
    "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",
});
const openai = new OpenAIApi(configuration);
console.log(openai);
export const handler = async (data) => {
  const animal = data;

  if (!configuration.apiKey) {
    return {
      error: {
        message:
          "OpenAI API key not configured, please follow instructions in README.md",
      },
    };
  }

  if (animal.trim().length === 0) {
    return {
      error: {
        message: "Enter valid Search",
      },
    };
  }

  try {
    const topics = ["ml", "ai", "ds"];
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: ` Please provide me with a list of blogs, research papers, and videos related to the topic "${topics}", formatted as a JSON object. The output should follow this exact structure:
  
    json
    Copy code
    {
        "Query Name": {
            "blogs": [
                {
                    "title": "Dummy Blog Title",
                    "url": "Dummy Blog URL"
                }
            ],
            "research_papers": [
                {
                    "title": "Dummy Research Paper Title",
                    "authors": "Dummy Author Names",
                    "url": "Dummy Research Paper URL"
                }
            ],
            "authors": [
                {
                    "name": "Dummy Author Name",
                    "url": "Dummy Author URL"
                }
            ],
            "videos": [
                {
                    "title": "Dummy Video Title",
                    "url": "Dummy Video URL"
                }
            ]
        }
    }`,
        },
      ],
    });
    console.log(completion);

    return {
      body: completion.data.choices[0].message,
    };
  } catch (error) {
    if (error) {
      return error;
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
    }
  }
};
