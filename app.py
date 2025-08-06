# app.py
from flask import Flask, request, jsonify, render_template
from llm_wrapper import generate_response

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/generate', methods=['POST'])
def generate():
    data = request.get_json()
    prompt = data.get('prompt', '')
    result = generate_response(prompt)
    return jsonify(result)

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)
