import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message:
          "OpenAI API key not configured, please follow instructions in README.md",
      },
    });
    return;
  }

  const animal = req.body.animal || "";
  if (animal.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid animal",
      },
    });
    return;
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

    res.status(200).json({ result: completion.data.choices[0].text });

    console.log(completion.data.choices);

    /**
     *
     * {
     *
     *  "blogs": [],
     *  "research_papers": [],
     *  "authors": [],
     *  "vidoes": [],
     *
     * }
     *
     */
  } catch (error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: "An error occurred during your request.",
        },
      });
    }
  }
}
