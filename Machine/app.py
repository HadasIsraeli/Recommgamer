# from urllib import response
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS

import handle_request
import json

app = Flask(__name__)
CORS(app)

#Create the receiver API POST endpoint:
@app.route("/responer", methods=["POST","GET"])
def postME():
   request_data = request.get_json()
   print("data recived: " + str(request_data))

   res_data = handle_request.response(request_data) #method that returns the response json

   response = app.response_class(
      response=json.dumps(res_data),
      status=200,
      mimetype='application/json'
   )

   # response = jsonify({"message":"recived"})

   return response


if __name__ == "__main__":
   app.run(debug=True)

