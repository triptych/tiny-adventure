<script>
  // let hp = 100;
  // let mana = 100;
  // let gold = 0;
  import { hitpoints } from "../stores/hitpoints.js";
  import { manapoints } from "../stores/manapoints.js";
  import { goldcoins } from "../stores/goldcoins.js";
  let hp;
  let mana;
  let gold;

  const unsubhp = hitpoints.subscribe((value) => {
    hp = value;
  });

  const unsubmana = manapoints.subscribe((value) => {
    mana = value;
  });

  const unsubgold = goldcoins.subscribe((value) => {
    gold = value;
  });
</script>

<style>
  .stats-display {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    border: 1px dotted green;
    padding: 4px;
  }
</style>

<div class="stats-display">
  <div>HP: {hp}</div>
  <div>Mana: {mana}</div>
  <div>Gold: {gold}</div>
</div>
