from flask import Flask, request
from flask_cors import CORS
import pandas as pd

import handle_request
import json

app = Flask(__name__)
CORS(app)

#Create the receiver API POST endpoint:
@app.route("/responer", methods=["POST","GET"])
def postME():
   request_data = request.get_json()
   print("data recived: " + str(request_data))

   game_name = request_data["user input"]["game_name"].lower()
   data = pd.read_csv("machine_learning\df\clean_df_only_reviews.csv", encoding='utf-8')
   gameNames = data['Game Title'].to_list()
   gameNamesLowerCase = [x.lower() for x in gameNames]
   res = any(game_name in string for string in gameNamesLowerCase)
   if(res):
      res_data = handle_request.response(request_data) #method that returns the response json
   else:
      res_data = -1


   # res_data = handle_request.response(request_data) #method that returns the response json

   response = app.response_class(
      response=json.dumps(res_data),
      status=200,
      mimetype='application/json'
   )

   return response


if __name__ == "__main__":
   app.run(debug=True)

