import net from "net";
import { encode, decode } from "@msgpack/msgpack";
import { db } from "../Database";
import { PersistenceOpcode } from "../Shared/PersistenceOpcode";
import {CharacterLoadResponse} from "../Shared/Packets/CharacterLoadResponse";
import {CharacterLoadRequest} from "../Shared/Packets/CharacterLoadRequest";
import {CharacterRow} from "../Shared/Interfaces/CharacterRow";
import {SendPacket} from "../Network/PacketSender";

export async function CharacterLoadHandler(
    socket: net.Socket,
    payload: Uint8Array)
{
    const request =
        decode(payload) as CharacterLoadRequest;

    const row =
        db.prepare(`
            SELECT *
            FROM characters
            WHERE character_id = ?
        `).get(
            request.CharacterId) as CharacterRow;

    if(!row)
    {
        console.log(
            `Character ${request.CharacterId} not found`);

        return;
    }

    const response:CharacterLoadResponse =
        {
            CharacterId: row.character_id,
            Name: row.name,
            Level: row.level,
            X: row.pos_x,
            Y: row.pos_y,
            Z: row.pos_z
        };

    SendPacket(
        socket,
        PersistenceOpcode.CharacterLoad,
        response);

    console.log(
        `Loaded ${response.Name}`);
    console.log(
        `Loaded ${response.Name}`);
}