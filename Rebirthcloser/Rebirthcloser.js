/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Rebirthcloser extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Rebirthcloser/costumes/costume1.svg", {
        x: 24.04355000000001,
        y: 83.61093,
      }),
    ];

    this.sounds = [new Sound("pop", "./Rebirthcloser/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "RebirthInfoACTIVATE" },
        this.whenIReceiveRebirthinfoactivate
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "STARTED" },
        this.whenIReceiveStarted
      ),
    ];
  }

  *whenIReceiveRebirthinfoactivate() {
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.visible = false;
    this.broadcast("RebirthInfoDEACTIVATE");
  }

  *whenIReceiveStarted() {
    this.visible = false;
    yield* this.wait(0.01);
    this.visible = false;
  }
}
