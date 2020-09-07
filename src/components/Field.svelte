<script>
  import { worldArr } from "../data/world.js";
  import { world } from "../stores/world";

  let loc = {
    x: 1,
    y: 1,
  };
  let text = "loading";
  let err = "";
  let turns = 0;
  const local_world = [
    ["forest", "forest wall", "mountain"],
    ["cliff", "meadow", "spring"],
    ["hut", "fence", "castle"],
  ];

  export let dir;
  $: {
    err = "You continue on your journey";
    turns = dir.split("|")[1] ? dir.split("|")[1] : 0;
    switch (dir.split("|")[0]) {
      case "north":
        if (loc.y > 0) {
          loc.y -= 1;
        } else {
          err = "you can't go any further";
        }
        break;
      case "south":
        if (loc.y < local_world[0].length - 1) {
          loc.y += 1;
        } else {
          err = "you can't go any further";
        }
        break;
      case "west":
        if (loc.x > 0) {
          loc.x -= 1;
        } else {
          err = "you can't go any further";
        }
        break;
      case "east":
        if (loc.x < local_world.length - 1) {
          loc.x += 1;
        } else {
          err = "you can't go any further";
        }
        break;
    }
    showLoc(loc);
  }

  function showLoc(location) {
    //text = world[location.y][location.x];
    console.log("world store: ", $world);
    console.log(typeof $world);
    console.log($world.length);
    for (let x in $world) {
      console.log($world[x]);
    }
    console.log("location.x: ", location.x);
    console.log("location.y: ", location.y);

    randomWorldEffects();
    console.log("world store: ", $world);

    text = "";
    /***
    $world.forEach((ele) => {
      console.log("element:", ele);
      if (ele.trigger.x == location.x && ele.trigger.y == location.y) {
        text += " " + ele.description;
      }
    });**/

    for (let y in $world) {
      console.log("$world[y]: ", $world[y]);
      if (
        $world[y].trigger.x == location.x &&
        $world[y].trigger.y == location.y
      ) {
        text += " " + $world[y].description;
      }
    }
  }

  function randomWorldEffects() {
    // random world effects
    console.log("Random world effects!");
    let randX = Math.floor(Math.random() * 3);
    let randY = Math.floor(Math.random() * 3);
    let tempObj = {
      id: 0,
      description: `Random event ${Math.floor(Math.random() * 100)}`,
      trigger: {
        x: randX,
        y: randY,
      },
      weight: 100,
    };
    //world.update((n) => (n[n.length] = tempObj));
    console.log("$world: ", $world);
    console.log("$world[0]", $world[0]);
    console.log(($world[$world.length] = tempObj));
  }
</script>

<style>
  .field-display {
    width: 1fw;
    height: 100px;
    border: 1px solid black;
  }
</style>

<div class="field-wrapper">
  <div class="field-display">{text}</div>
  <p>Going: {dir.split('|')[0]}. {err}. Turn: {turns}</p>
</div>
