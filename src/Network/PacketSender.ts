import net from "net";
import { encode } from "@msgpack/msgpack";

export function SendPacket(
    socket: net.Socket,
    opcode: number,
    payload: unknown)
{
    const packet =
        {
            Opcode: opcode,
            Payload: encode(payload)
        };

    const packetBytes =
        encode(packet);

    const lengthBuffer =
        Buffer.alloc(4);

    lengthBuffer.writeInt32LE(
        packetBytes.length,
        0);

    socket.write(lengthBuffer);
    socket.write(packetBytes);

    console.log(
        `Sent Opcode ${opcode}`);
}