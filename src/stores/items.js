import { writable } from "svelte/store";

export const items = writable([
  {
    id: "sword",
    type: "weapon",
    desc: "Sword",
  },
  { id: "shield", type: "shield", desc: "Shield" },
  { id: "boots", type: "clothing", desc: "Boots" },
]);
