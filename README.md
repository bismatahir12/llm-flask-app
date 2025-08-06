
# LLM-Powered Flask Microservice 

This project is a modular Flask API integrated with OpenAI's GPT model. It takes a prompt, returns a generated response, and includes a basic HTML+JS client.

##  Live App
 https://llm-flask-render.onrender.com

##  Features
- LLM wrapper in `llm_wrapper.py`
- Flask microservice at `/generate`
- .env for API key
- Client interface (HTML + JS)
- JSON response with status, message, and data

##  Example Request (POST /generate)
```json
{
  "prompt": "What is AI?"
}
