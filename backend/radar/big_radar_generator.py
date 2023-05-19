import random
import json
import geopandas as gpd

# Load the Natural Earth dataset of land polygons
land = gpd.read_file(gpd.datasets.get_path('naturalearth_lowres')).loc[
    lambda df: df['geometry'].type == 'Polygon'
]

points = []
while len(points) < 10000:
    # Generate random coordinates within a rectangular region
    lat = random.uniform(-70, 80)
    lon = random.uniform(-180, 180)
    # Check if point falls within any of the land polygons
    is_within_land = False
    for _, row in land.iterrows():
        if row['geometry'].contains(gpd.points_from_xy([lon], [lat])[0]):
            # Mark the point as within a land polygon and exit the loop
            is_within_land = True
            break
    # Add point to list if it's not within a land polygon
    if not is_within_land:
        points.append({"latitude": lat, "longitude": lon})

# Save points to a JSON file
with open('water_points.json', 'w') as outfile:
    json.dump(points, outfile)