<script>
  let count = 0;

  let handleClick = () => {
    count += 1;
  };
</script>

<style>
  button {
    background: red;
    color: black;
    border: none;
    padding: 8px 12px;
    border-radius: 2px;
  }
</style>

<button on:click={handleClick}>
  Clicked {count}
  {count === 1 ? 'time' : 'times'}
</button>

<span class="text-purple-500"> This is a line of text</span>
