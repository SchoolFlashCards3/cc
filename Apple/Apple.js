/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Apple extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("apple", "./Apple/costumes/apple.svg", {
        x: 112.31967980250833,
        y: 31.526130431443022,
      }),
    ];

    this.sounds = [new Sound("Chomp", "./Apple/sounds/Chomp.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(
        Trigger.BROADCAST,
        { name: "PAGE 2" },
        this.whenIReceivePage2
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(
        Trigger.BROADCAST,
        { name: "PAGE 1" },
        this.whenIReceivePage1
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "RebirthInfoACTIVATE" },
        this.whenIReceiveRebirthinfoactivate
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "RebirthInfoDEACTIVATE" },
        this.whenIReceiveRebirthinfodeactivate
      ),
    ];
  }

  *whenthisspriteclicked() {
    while (true) {
      if (this.mouse.down && this.touching("mouse")) {
        if (this.compare(this.stage.vars._, 49) < 0) {
          null;
        } else {
          this.stage.vars._ -= 50;
          this.stage.vars.PerClick++;
          yield* this.wait(0.1);
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.goto(129, 37);
    this.goto(129, 37);
    this.goto(129, 37);
    while (true) {
      if (this.compare(this.stage.vars._, 49) > 0) {
        this.effects.clear();
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.compare(this.stage.vars._, 50) < 0) {
        this.effects.ghost = 50;
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    this.effects.ghost = 50;
  }

  *whenIReceivePage2() {
    yield* this.glide(0.5, 129, 91);
  }

  *whenGreenFlagClicked4() {
    this.goto(129, 37);
  }

  *whenGreenFlagClicked5() {
    for (let i = 0; i < 10; i++) {
      this.goto(129, 37);
      yield;
    }
  }

  *whenIReceivePage1() {
    yield* this.glide(0.5, 129, 37);
  }

  *whenIReceiveRebirthinfoactivate() {
    this.visible = false;
  }

  *whenIReceiveRebirthinfodeactivate() {
    this.visible = true;
  }
}
