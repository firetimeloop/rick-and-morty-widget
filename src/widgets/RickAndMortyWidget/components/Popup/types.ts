import { Character } from "rickmortyapi/dist/interfaces";

export type Props = Pick<Character, "image" | "name" | "id">;

export type CharacterStatus = Pick<Character, 'status'>