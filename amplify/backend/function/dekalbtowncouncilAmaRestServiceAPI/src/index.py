import awsgi
from flask_cors import CORS
from flask import Flask, jsonify, request
import boto3
import os
from uuid import uuid4

client = boto3.client("dynamodb")
TABLE = os.environ.get("ama")

app = Flask(__name__)
CORS(app)

BASE_ROUTE = "/message"

@app.route(BASE_ROUTE, methods=['GET'])
def listMessages():
    try:
        response = client.scan(TableName='ama')
        items = response.get('Items', [])
        return jsonify(items), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route(BASE_ROUTE, methods=['POST'])
def createMessage():
    request_json = request.get_json()
    client.put_item(TableName=TABLE, Item={
        'id': { 'S': str(uuid4()) },
        'name': {'S': request_json.get("email")},
        'year': {'S': request_json.get("message")},
        'link': {'S': request_json.get("newsletter")},
    })
    return jsonify(message="item created")

def handler(event, context):
    return awsgi.response(app, event, context)