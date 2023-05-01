import requests
import zipfile
import pandas as pd
import pyproj
import io
import os

# Download the ZIP file from the URL
url = 'https://coast.noaa.gov/htdata/CMSP/AISDataHandler/2022/AIS_2022_01_02.zip'
response = requests.get(url)

# Extract the contents of the ZIP file
with zipfile.ZipFile(io.BytesIO(response.content)) as zip_ref:
    zip_ref.extractall()

# Read in your CSV data into a Pandas DataFrame
split_string = url.split("/")[-1].split(".")[0]
file_name = split_string + ".csv"
df = pd.read_csv(file_name)

# drop all columns except LAT and LON
df.drop(df.columns.difference(['LAT', 'LON']), axis=1, inplace=True)

# Define the projection you want to convert from (LAT/LON)
in_proj = pyproj.Proj('epsg:4269')

# Define the projection you want to convert to (EPSG 3857)
out_proj = pyproj.Proj('epsg:3857')

# Use PyProj to convert the LAT/LON coordinates to EPSG 3857
x, y = pyproj.transform(in_proj, out_proj, df['LAT'].values, df['LON'].values)

# Add the new x and y columns to your DataFrame
df['LAT'] = x
df['LON'] = y
df.rename(columns={'LAT': 'X', 'LON': 'Y'}, inplace=True)

# Save the updated DataFrame to a new CSV file
final_file = file_name + "_cleaned.csv"
df.to_csv(final_file, index=False)

# Remove old CSV file
os.remove(file_name)