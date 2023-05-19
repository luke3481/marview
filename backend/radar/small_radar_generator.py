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