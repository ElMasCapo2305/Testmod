const speeds = [0.5, 1, 2, 4, 8];
let idx = 1;
let speed = 1;

Events.on(ClientLoadEvent, () => {
  Time.setDeltaProvider(() => {
    let r = Core.graphics.getDeltaTime() * 60;
    if (isNaN(r) || !isFinite(r)) r = 1;
    r = Math.min(Math.max(r, 0.0001), 6);
    return r * speed;
  });

  Vars.ui.hudGroup.fill(t => {
    t.top().left();
    t.marginTop(140);
    const btn = t.button("x1", () => {
      idx = (idx + 1) % speeds.length;
      speed = speeds[idx];
    }).size(80, 50).get();
    btn.update(() => btn.setText("x" + speed));
  });
});
