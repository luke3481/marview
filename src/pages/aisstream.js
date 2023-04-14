const WebSocket = require("ws");
const socket = new WebSocket("wss://stream.aisstream.io/v0/stream");

socket.onopen = function (_) {
  let subscriptionMessage = {
    Apikey: "c61e2608de7dbcb16dea22ab0f639d02167af713",
    BoundingBoxes: [
      [
        [-180, -90],
        [180, 90],
      ],
    ],
  };
  socket.send(JSON.stringify(subscriptionMessage));
};

socket.onmessage = function (event) {
  let aisMessage = JSON.parse(event.data);
  if (aisMessage["MessageType"] === "PositionReport") {
    let positionReport = aisMessage["Message"]["PositionReport"];
    console.log(
      `ShipId: ${positionReport["UserID"]} Latitude: ${positionReport["Latitude"]} Latitude: ${positionReport["Longitude"]}`
    );
  }
};

console.log(socket.onmessage);
