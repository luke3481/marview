import numpy as np
import pandas as pd 

data = './marine_cadastre_sample_data.csv'

df = pd.read_csv(data)

# # see the size of the data
# print(df.shape)

# # check data attributes such as memory usage
# print(df.info())

# # check for missing values
# print(df.isnull().sum())

# preview the data set
print(df.head())

# check for number of repeats
print(len(df.unique()))
