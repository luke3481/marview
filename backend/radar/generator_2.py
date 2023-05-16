# import random
# import pandas as pd
# from global_land_mask import globe

# P = 0.7
# U = 0.95

# cadastre = pd.read_csv("marine_cadastre_sample_data.csv")

# lat, lon = [], []
# while len(lat) < 2500:

#     # With probability P sample points from the AIS data and add some noise
#     if random.uniform(0, 1) <= P:

#         # Sample points from the AIS data and add noise
#         ais_point = cadastre.sample(1)
#         ais_lat, ais_lon = ais_point.iloc[0, 0], ais_point.iloc[0, 1]
#         ais_lat += random.uniform(-1, 1) * 0.0001
#         ais_lon += random.uniform(-1, 1) * 0.0001
    
#     # With probability P sample a random point between -70 and 70 latitude
#     # With probability 0.5(1 - P) sample a random point between -70 and -90 latitude
#     # With probability 0.5(1 - P) sample a random point between 70 and 90 latitude
#     else:
#         if random.uniform(0, 1) <= U:
#             ais_lat, ais_lon = random.uniform(-58, 68), random.uniform(-180, 180)
#         elif random.uniform(0, 1) <= 0.5:
#             ais_lat, ais_lon = random.uniform(-58, -65), random.uniform(-180, 180)
#         else:
#             ais_lat, ais_lon = random.uniform(68, 73), random.uniform(-180, 180)

#     # Make sure the simulated point is not on land
#     if not globe.is_land(ais_lat, ais_lon):
#         lat.append(ais_lat)
#         lon.append(ais_lon)

# sample_points = pd.DataFrame({'latitude': lat, 'longitude': lon})

# sample_points.to_json("water_points.json", orient="records")

# import random
# from geopy import Point
# from geopy.distance import distance
# from geopy.exc import GeopyError
# from geopy.geocoders import Nominatim
# from geopy.extra import rate_limiter
# from geopy import exc as geopy_exc
# from geopy import distance as geopy_distance
# from geopy import location as geopy_location
# from geopy.geocoders import Nominatim
# from geopy.extra.rate_limiter import RateLimiter
# import math
# from global_land_mask import globe

# # Define the center of the port of New Orleans
# port_of_no = Point(29.9511, -90.0715)

# # Define the maximum distance from the center for a valid point
# max_distance = 300 # in kilometers

# # Generate 100 random points within the maximum distance
# points = []
# for i in range(1000):
#     valid_point = False
#     while not valid_point:
#         # Generate a random point within the maximum distance
#         lat = random.uniform(port_of_no.latitude - math.degrees(max_distance / 6371), 
#                              port_of_no.latitude + math.degrees(max_distance / 6371))
#         lon = random.uniform(port_of_no.longitude - math.degrees(max_distance / 6371 / math.cos(math.radians(port_of_no.latitude))), 
#                              port_of_no.longitude + math.degrees(max_distance / 6371 / math.cos(math.radians(port_of_no.latitude))))
#         point = Point(lat, lon)

#         # Check if the point is within the maximum distance and within the Gulf of Mexico
#         if (distance(point, port_of_no).km <= max_distance) and not globe.is_land(lat, lon):
#             points.append({"latitude": round(lat, 10), "longitude": round(lon, 10)})
#             valid_point = True

# # Print the points
# print(points)

import random

center_lat = 21.560963
center_lon = -85.496176

radius = 0.35 # adjust this to change the radius of the cluster

coordinates = []
for i in range(75):
    lat = random.uniform(center_lat - radius, center_lat + radius)
    lon = random.uniform(center_lon - radius, center_lon + radius)
    coordinates.append({"latitude": lat, "longitude": lon})

print(coordinates)