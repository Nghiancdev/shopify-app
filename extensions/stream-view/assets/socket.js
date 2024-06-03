const host = "https://socket.api.windoo.vn/socket";
const socket = io(host, {
  extraHeaders: {
    "x-authorization":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NDc0NTE0OTIsImRhdGEiOnsiX2lkIjoiNjY0NDcyNzNkOGYzODQ1ZTIyMzFmYzgxIiwia2V5IjoiMDg0ZWE0NWVhYmRlMWE0ZTJiMmY1OTk5MzM0NTc1NzIiLCJzaWduYXR1cmUiOiI4ZTdhOTkwZmYwOWM5MGUxYjEwZjI2YTQ1N2UxM2IzOCIsInNlc3Npb24iOiI2NjQ2Y2FlNGIxNmM1MGM2NzM2Y2JlNGMifSwiaWF0IjoxNzE1OTE1NDkyfQ.giqLuxunrLHbqbFgSpP01BCTJ9CLZP9zulpblIdglO8",
  },
});
socket.on("connect", () => {
  const roomId = `livestream_6646ce4cb16c50c6736cbe9f`; // Thay roomId bằng roomId bạn nhận được từ server
  console.log("roomId: ", roomId);
  console.log("host: ", host);

  // socket.emit("joinRoom", roomId);
  setTimeout(() => {
    socket.emit("joinRoom", roomId);
  }, 500);

  // joinRoom(roomId);
  console.log("Connected to server");
});

socket.on("livestreamToClient", (datas) => {
  // setData1(datas);
  console.log("🚀 ~ socket.on ~ datas:", datas);
  // setLivestreamData((prevData) => [...prevData, datas]);
});
