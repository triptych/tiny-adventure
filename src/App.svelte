<script>
  import TailwindStyles from "./TailwindStyles.svelte";
  import Field from "./components/Field.svelte";
  import Controls from "./components/Controls.svelte";
  import Stats from "./components/Stats.svelte";
  import Row from "./components/Row.svelte";
  import Inventory from "./components/Inventory.svelte";

  import { goldcoins } from "./stores/goldcoins.js";

  let name = "Barry The Barbarian";
  let ran = ["A giant monster", "A treasure", "A friend"];

  let txt = "loading...";

  function updateMessage() {
    // let num = Math.floor(Math.random() * random.length);
    // console.log("updatemessge: " + num);
    // name = ran[num];
    // console.log("name:" + name);
    console.log("hi");
    let num = Math.floor(Math.random() * ran.length);
    //name = ran[0];
    console.log("num:" + num);
    console.log("updatemessge: " + num);
    name = ran[num];
    goldcoins.update((n) => Math.floor(Math.random() * 10));
  }

  function handleDirection(event) {
    console.log("handleDirection:", event.detail.text);
    txt = event.detail.text;
    //temp to test subscriptions
    goldcoins.update((n) => Math.floor(Math.random() * 10));
  }
</script>

<style>
  .App-logo {
    animation: App-logo-scale infinite 1.6s ease-in-out alternate;
  }
  @keyframes App-logo-scale {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.06);
    }
  }
</style>

<div class="text-center font-serif bg-yellow-600 w-screen h-screen">
  <!--
	<header class="bg-gray-100 h-screen flex justify-center items-center flex-col text-3xl">
		<img src="/logo.svg" class="App-logo pointer-events-none m-4 h-64" alt="logo" />
		<p>
			Edit <code>src/App.svelte</code> and save to reload.
		</p>
		<a
			class="text-orange-500"
			href="https://svelte.dev"
			target="_blank"
			rel="noopener noreferrer"
		>
			{message}
		</a>
	</header>
	-->
  <header>
    <h1>A Tiny Adventure</h1>
  </header>
  <main>
    <!--<Button></Button> -->
    <Field dir={txt} />

    <Row>
      <div slot="left">
        <Controls on:direction={handleDirection} />
      </div>
      <div slot="right">
        <Stats />
      </div>
    </Row>
    <Row>
      <div slot="left">
        <Inventory />
      </div>
      <div slot="right" />
    </Row>
  </main>
  <footer><small>By Andrew Wooldridge</small></footer>
</div>
