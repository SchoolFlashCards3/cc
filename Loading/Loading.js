/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Loading extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Loading/costumes/costume1.svg", {
        x: 358.4902041725521,
        y: 270.673140700515,
      }),
    ];

    this.sounds = [new Sound("pop", "./Loading/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.goto(0, 0);
    yield* this.wait(1);
    this.effects.ghost = 10;
    yield* this.wait(0.1);
    this.effects.ghost = 20;
    yield* this.wait(0.1);
    this.effects.ghost = 30;
    yield* this.wait(0.1);
    this.effects.ghost = 40;
    yield* this.wait(0.1);
    this.effects.ghost = 50;
    yield* this.wait(0.1);
    this.effects.ghost = 60;
    yield* this.wait(0.1);
    this.effects.ghost = 70;
    yield* this.wait(0.1);
    this.effects.ghost = 80;
    yield* this.wait(0.1);
    this.effects.ghost = 90;
    yield* this.wait(0.1);
    this.effects.ghost = 0;
    this.visible = false;
  }
}
