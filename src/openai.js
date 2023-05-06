import axios from 'axios';

export async function generateResponse(prompt) {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/text-davinci-002/completions',
      {
        prompt: `${prompt}\n\n1. `,
        max_tokens: 10,
        n: 3,
        stop: ['\n\n1. ', '\n\n2. ', '\n\n3. '],
        temperature: 0.7,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        },
      }
    );

    return response.data.choices.map((choice) => choice.text.trim());
  } catch (error) {
    console.error('Error generating response:', error);
    return ['Error generating response'];
  }
}
