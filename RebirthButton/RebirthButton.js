/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class RebirthButton extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./RebirthButton/costumes/costume1.svg", {
        x: 98.62894991453845,
        y: 66.25001480599062,
      }),
    ];

    this.sounds = [new Sound("pop", "./RebirthButton/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenthisspriteclicked() {}

  *whenGreenFlagClicked() {
    while (true) {
      if (this.touching("mouse") && this.mouse.down) {
        yield* this.wait(0.15);
        if (this.compare(this.stage.vars._, 300000) > 0) {
          this.stage.vars._ -= 300000;
          this.stage.vars.rebirthx += 0.1;
        }
      }
      yield;
    }
  }
}
