<script>
  import { worldArr } from "../data/world.js";

  let loc = {
    x: 1,
    y: 1,
  };
  let text = "loading";
  let err = "";
  let turns = 0;
  const world = [
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
        if (loc.y < world[0].length - 1) {
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
        if (loc.x < world.length - 1) {
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
    console.log("worldArr: ", worldArr);
    console.log("location.x: ", location.x);
    console.log("location.y: ", location.y);
    text = "";
    worldArr.forEach((ele) => {
      console.log("element:", ele);
      if (ele.trigger.x == location.x && ele.trigger.y == location.y) {
        text += " " + ele.description;
      }
    });
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
