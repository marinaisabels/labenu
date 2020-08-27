import express from "express";
import {AddressInfo} from "net";
import dotenv from "dotenv";
import { userRouter } from "./router/UserRouter";
import { bandRouter } from "./router/BandRouter";
dotenv.config();

const app = express();
app.use(express.json());

app.use("/users/", userRouter);
app.use("/bands", bandRouter);

// app.use("/music")
// app.use("/album")



const server = app.listen(3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando em http://localhost:${address.port}`);
  } else {
    console.error(`Falha ao rodar o servidor.`);
  }
});