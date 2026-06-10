import { RegisterHandler }
    from "./PacketDispatcher";

import { PersistenceOpcode }
    from "../Shared/PersistenceOpcode";

import { HelloHandler }
    from "../Handlers/HelloHandler";

import { CharacterSaveHandler }
    from "../Handlers/CharacterSaveHandler";

import { CharacterLoadHandler }
    from "../Handlers/CharacterLoadHandler";

export function RegisterHandlers()
{
    RegisterHandler(
        PersistenceOpcode.Hello,
        HelloHandler);

    RegisterHandler(
        PersistenceOpcode.CharacterSave,
        CharacterSaveHandler);

    RegisterHandler(
        PersistenceOpcode.CharacterLoad,
        CharacterLoadHandler);
}