import pandas as pd


def clean_df(df):

    clr_df = df

    clr_df.drop(columns =['name', 'platform', 'score', 'date'], inplace=True, axis=1)  # Drop columns that not relevant
    clr_df.rename(columns={'game': 'Game Title', 'review': 'Reviews'}, inplace=True)

    reviews_df = clr_df.copy()
    clr_df.drop_duplicates(subset='Game Title', inplace=True, ignore_index=True)  # Keep one review per game

    return clr_df,reviews_df


def remove_title(row):
    game_title = row['Game Title']
    body_text = row['Reviews']
    new_doc = body_text.replace(game_title, "")
    return new_doc


if __name__ == '__main__':

    df = pd.read_csv("app/df/metacritic_critic_reviews.csv", encoding='utf-8')
    df, df_full_reviews = clean_df(df)

    df['Reviews'] = df.apply(remove_title, axis=1)  # Removing the game title from the users reviews

    df.dropna(inplace=True)  # Drop null values that remind after all the cleaning


    df_full_reviews.to_csv("app/df/df_full_reviews.csv")
    df.to_csv("app/df/clean_df_only_reviews.csv")
