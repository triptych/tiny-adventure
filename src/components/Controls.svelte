<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  let actionNum = 0;

  function goNorth() {
    console.log("go north");
    actionNum++;
    dispatch("direction", {
      text: "north|" + actionNum,
    });
  }
  function goSouth() {
    console.log("go south");
    actionNum++;
    dispatch("direction", {
      text: "south|" + actionNum,
    });
  }

  function goWest() {
    console.log("go west");
    actionNum++;
    dispatch("direction", {
      text: "west|" + actionNum,
    });
  }

  function goEast() {
    console.log("go east");
    actionNum++;
    dispatch("direction", {
      text: "east|" + actionNum,
    });
  }
</script>

<style>
  .interface {
    display: grid;
    border: 1px solid #2d2d2d;
    border-radius: 2px;
    width: 50vw;
    grid-template-columns: [colleft] auto [colcenter] auto [colright] auto;
    grid-template-rows: [rowtop] auto [rowcenter] auto [rowbottom] auto;
    justify-items: center;
    align-items: center;
  }

  .interface div {
    border: 1px solid tan;
    padding: 2px;
    cursor: pointer;
  }

  .interface div:hover {
    color: white;
    background-color: black;
    border: 1px solid white;
  }

  .north {
    grid-column-start: 2;
  }
  .south {
    grid-column-start: 2;
    grid-row-start: 3;
  }
  .west {
    grid-column-start: 1;
  }
  .east {
    grid-column-start: 3;
  }
</style>

<div class="interface">
  <div class="north" on:click={goNorth}>North</div>
  <div class="south" on:click={goSouth}>South</div>
  <div class="west" on:click={goWest}>West</div>
  <div class="east" on:click={goEast}>East</div>
</div>
