import logging
import os
import azure.functions as func
import openai

# Configure OpenAI client with environment variables
openai.api_type = "azure"
openai.api_base = os.getenv("OPENAI_ENDPOINT")
openai.api_key = os.getenv("OPENAI_KEY")
openai.api_version = "2024-02-15-preview"  # adjust if your resource uses a different version

def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    # Get query parameter or request body
    user_input = req.params.get('prompt')
    if not user_input:
        try:
            req_body = req.get_json()
        except ValueError:
            pass
        else:
            user_input = req_body.get('prompt')

    if user_input:
        try:
            response = openai.ChatCompletion.create(
                engine="gpt-35-turbo",  # replace with your Azure OpenAI deployment name
                messages=[{"role": "user", "content": user_input}],
                max_tokens=200
            )
            output = response['choices'][0]['message']['content']
            return func.HttpResponse(output, status_code=200)
        except Exception as e:
            return func.HttpResponse(f"Error: {str(e)}", status_code=500)
    else:
        return func.HttpResponse(
             "Please pass a 'prompt' in the query string or in the request body.",
             status_code=400
        )

