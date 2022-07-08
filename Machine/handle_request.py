import uuid
import pandas as pd
import machine_learning
import json


# def request():  # For test

#     input_json = {
#         "user input": {
#             "game_name": "Fifa 15"
#         }
#     }

#     return input_json


def response(request_json):

    df = pd.read_csv("Machine\clean_df_only_reviews.csv", encoding='utf-8')
    df.drop(['Unnamed: 0'], inplace=True, axis=1)  # Drop redundant column

    game_name = request_json["user input"]["game_name"]
    # keyword = request_json["user input"]["keyword"]
    uid = str(uuid.uuid1())

    # Starting the machine learning
    tfidf_df = machine_learning.text_based_similarities(df)
    df_recommend_games = machine_learning.recommend_games(df, tfidf_df, game_name)
    # print(df_recommend_games)

    # Return the answer in json object
    game_list = []
    response_dict = {}

    for game in df_recommend_games.index:
        game_list.append(game)
        
    response_dict['uid'] = uid
    response_dict["recommended games"] = game_list
    response_json = json.dumps(response_dict)

    return response_json


# def main():

#     # request_json = request()
#     print(response(request_json))  # Send to hadas


# if __name__ == '__main__':
#     main()


