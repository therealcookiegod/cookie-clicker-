Game.LoadMod({
  name: "billion clicks",
  version: "2.058",
  onTick: function() {
    Game.cookies += 1e9
  }
});