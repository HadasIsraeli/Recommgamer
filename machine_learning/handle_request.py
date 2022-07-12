import uuid
import pandas as pd
import machine_learning
import json


def response(request_json):

    df = pd.read_csv("myapp\machine_learning\df\clean_df_only_reviews.csv", encoding='utf-8')
    df_full_reviews = pd.read_csv("myapp\machine_learning\df\df_full_reviews.csv", encoding='utf-8').reset_index()

    df.drop(['Unnamed: 0'], inplace=True, axis=1)  # Drop redundant column

    game_name = request_json["user input"]["game_name"]
    uid = str(uuid.uuid1())

    # Starting the machine learning
    tfidf_df = machine_learning.text_based_similarities(df)
    df_recommend_games = machine_learning.recommend_games(df, tfidf_df, game_name)
    # print(df_recommend_games)

    # Return the answer in json object
    games_reviews_list = [] # temp list of games reviews
    games_reviews = {} # all the games and they reviews
    response_dict = {} #the response dictionary with all the results from the model

    for game in df_recommend_games.index:
        for index, row in df_full_reviews.iterrows():
            if row["Game Title"] == str(game): # get reviews by the name of the game
                games_reviews_list.append(str(row["Reviews"])) # list of all the reviews for the game

        games_reviews[str(game)] = games_reviews_list # append the reviews as values to the game name as the key
        games_reviews_list = []


    response_dict['uid'] = uid
    response_dict["recommended games"] = games_reviews
    response_json = json.dumps(response_dict)

    return response_json
