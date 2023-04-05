import numpy as np
import pandas as pd 

data = './marine_cadastre_sample_data.csv'

df = pd.read_csv(data)

# # see the size of the data
# print(df.shape)

# check data attributes such as memory usage
print(df.info())

# # check for missing values
# print(df.isnull().sum())

# # remove rows where lat and/or long are null
#df.dropna(axis=0,how='any',subset=['LAT','LON'],inplace=True)

# preview the data set
print(df.head())

