<script>
  import { items } from "../stores/items";
  let show = false;
  /**
  let items = [
    { id: "sword", desc: "Sword" },
    { id: "shield", desc: "Shield" },
    { id: "boots", desc: "Boots" },
  ];
**/
  function toggleShow() {
    show = !show;
  }
</script>

<style>
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  li {
    border: 1px solid grey;
    padding: 4px;
  }
</style>

<div class="inventory-wrapper">
  <div>Inventory</div>
  <button on:click={toggleShow}>Toggle</button>
  {#if show}
    <ul>
      <!-- <li>Sword</li>
		<li>Shield</li>
		<li>Boots</li> -->
      {#each $items as item, i (item.id)}
        <li>({i + 1}) {item.desc}</li>
      {/each}
    </ul>
  {/if}
</div>
