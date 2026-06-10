import net from "net";
import { decode } from "@msgpack/msgpack";
import {HelloPacket} from "../Shared/Interfaces/HelloPacket";

export async function HelloHandler(
    socket: net.Socket,
    payload: Uint8Array)
{
    const hello =
        decode(payload) as HelloPacket;

    console.log(
        hello.Message);
}