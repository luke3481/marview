# import asyncio
# import websockets
# import json
# from datetime import datetime, timezone

# async def connect_ais_stream():

#     async with websockets.connect("wss://stream.aisstream.io/v0/stream") as websocket:
#         # subscribe_message = {"APIKey": "c61e2608de7dbcb16dea22ab0f639d02167af713", "BoundingBoxes": [[[31, -98], [18, -80]]]}
#         subscribe_message = {"APIKey": "c61e2608de7dbcb16dea22ab0f639d02167af713", "BoundingBoxes": [[[31, -98], [28, -95]]]}

#         subscribe_message_json = json.dumps(subscribe_message)
#         await websocket.send(subscribe_message_json)

#         async for message_json in websocket:
#             message = json.loads(message_json)
#             message_type = message["MessageType"]

#             if message_type == "PositionReport":
#                 # the message parameter contains a key of the message type which contains the message itself
#                 ais_message = message['Message']['PositionReport']
#                 print(json.dumps(ais_message))
#                 # print(f"Latitude: {ais_message['Latitude']}, Longitude: {ais_message['Longitude']}, Heading: {ais_message['TrueHeading']}")

import asyncio
import websockets
import json
from datetime import datetime, timezone

async def connect_ais_stream():

    async with websockets.connect("wss://stream.aisstream.io/v0/stream") as websocket:
        subscribe_message = {"APIKey": "c61e2608de7dbcb16dea22ab0f639d02167af713", "BoundingBoxes": [[[31, -98], [18, -80]]]}
        subscribe_message_json = json.dumps(subscribe_message)
        await websocket.send(subscribe_message_json)

        with open("ais_messages.json", "w") as f:
            f.write("[\n")
            first_message = True
            try:
                while True:
                    message_json = await websocket.recv()
                    message = json.loads(message_json)
                    message_type = message["MessageType"]

                    if message_type == "PositionReport":
                        ais_message = message['Message']['PositionReport']
                        ais_message_json = json.dumps({
                            "latitude": ais_message["Latitude"],
                            "longitude": ais_message["Longitude"],
                            "heading": ais_message["TrueHeading"]
                        })
                        if not first_message:
                            f.write(",\n")
                        f.write(ais_message_json)
                        first_message = False
            finally:
                f.write("]\n")

if __name__ == "__main__":
    asyncio.run(connect_ais_stream())