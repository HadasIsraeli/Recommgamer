import fuzzywuzzy as fuzzywuzzy
import pandas as pd
from fuzzywuzzy import fuzz
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

def text_based_similarities(df):
    # Instantiate the vectorizer object to the vectorizer variable
    # Minimum word count 2 to be included, words that appear in over 70% of docs should not be included
    vectorizer = TfidfVectorizer(min_df=2, max_df=0.7)

    vectorized_data = vectorizer.fit_transform(df['Reviews'])  # Fit and transform the plot column

    tfidf_df = pd.DataFrame(vectorized_data.toarray(), columns=vectorizer.get_feature_names_out())  # Create Dataframe from TF-IDFarray

    # Assign the game titles to the index
    tfidf_df.index = df['Game Title']
    return tfidf_df
    
# create a function to find the closest title
def matching_score(a,b):
   return fuzz.ratio(a,b)


def get_title_from_index(df, index): # Convert index to title_year
   return df[df.index == index]['Game Title'].values[0]


# A function to return the most similar title to the words a user type
# Without this, the recommender only works when a user enters the exact title which the data has.

def find_closest_title(df, title):
   leven_scores = list(enumerate(df['Game Title'].apply(matching_score, b=title))) #[(0, 30), (1,95), (2, 19)~~] A tuple of distances per index
   sorted_leven_scores = sorted(leven_scores, key=lambda x: x[1], reverse=True) #Sorts list of tuples by distance [(1, 95), (3, 49), (0, 30)~~]
   closest_title = get_title_from_index(df, sorted_leven_scores[0][0])
   distance_score = sorted_leven_scores[0][1]
   return closest_title, distance_score


def recommend_games(df, tfidf_df, title):
    # Insert closest title here
    title, distance_score = find_closest_title(df, title)
    list_of_games_enjoyed = [title]
    games_enjoyed_df = tfidf_df.reindex(list_of_games_enjoyed)
    user_prof = games_enjoyed_df.mean()
    tfidf_subset_df = tfidf_df.drop([title], axis=0)
    similarity_array = cosine_similarity(user_prof.values.reshape(1, -1), tfidf_subset_df)
    similarity_df = pd.DataFrame(similarity_array.T, index=tfidf_subset_df.index, columns=["similarity_score"])
    # Sort the values from high to low by the values in the similarity_score
    sorted_similarity_df = similarity_df.sort_values(by="similarity_score", ascending=False)
    return sorted_similarity_df.head()
