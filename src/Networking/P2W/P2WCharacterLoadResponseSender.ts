import net from "net";

import { SendPacket }
    from "../lib/PacketSender";

import { ProtocolPersistence }
    from "../../Shared/protocol.persistence";

import { P2WCharacterLoadResponse }
    from "../../Shared/Packets/Response/P2WCharacterLoadResponse";

export function SendP2WCharacterLoadResponse(
    socket: net.Socket,
    response: P2WCharacterLoadResponse)
{
    SendPacket(
        socket,
        ProtocolPersistence.CharacterLoad,
        response);

    console.log(
        `Loaded ${response.Name}`);
}