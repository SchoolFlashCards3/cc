/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Ball3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("ball-a", "./Ball3/costumes/ball-a.svg", {
        x: 74.28406904624097,
        y: 23.460537136572157,
      }),
      new Costume("ball-b", "./Ball3/costumes/ball-b.svg", { x: 22, y: 22 }),
      new Costume("ball-c", "./Ball3/costumes/ball-c.svg", { x: 22, y: 22 }),
      new Costume("ball-d", "./Ball3/costumes/ball-d.svg", { x: 22, y: 22 }),
      new Costume("ball-e", "./Ball3/costumes/ball-e.svg", { x: 22, y: 22 }),
    ];

    this.sounds = [
      new Sound("Boing", "./Ball3/sounds/Boing.wav"),
      new Sound("Pop", "./Ball3/sounds/Pop.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "PAGE 2" },
        this.whenIReceivePage2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "PAGE 1" },
        this.whenIReceivePage1
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked6),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked7),
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

  *whenGreenFlagClicked() {
    this.effects.ghost = 50;
  }

  *whenGreenFlagClicked2() {
    this.stage.vars.autoPerSec = 0;
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.compare(this.stage.vars._, 200) < 0) {
        this.effects.ghost = 50;
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    while (true) {
      if (this.compare(this.stage.vars._, 199) > 0) {
        this.effects.clear();
      }
      yield;
    }
  }

  *whenGreenFlagClicked5() {
    this.goto(126, -94);
    while (true) {
      yield* this.wait(0.1);
      this.stage.vars._ += this.toNumber(this.stage.vars.autoCashPerSecCodeV);
      yield;
    }
  }

  *whenthisspriteclicked() {
    while (true) {
      if (this.mouse.down && this.touching("mouse")) {
        if (this.compare(this.stage.vars._, 199) < 0) {
          null;
        } else {
          this.stage.vars._ -= 200;
          this.stage.vars.autoPerSec += 5;
          yield* this.wait(0.1);
        }
      }
      yield;
    }
  }

  *whenIReceivePage2() {
    yield* this.glide(0.5, 125, -34);
  }

  *whenIReceivePage1() {
    yield* this.glide(0.5, 126, -94);
  }

  *whenGreenFlagClicked6() {}

  *whenGreenFlagClicked7() {
    while (true) {
      this.stage.vars.autoCashPerSecCodeV =
        this.toNumber(this.stage.vars.autoPerSec) * 0.1;
      yield;
    }
  }

  *whenIReceiveRebirthinfoactivate() {
    this.visible = false;
  }

  *whenIReceiveRebirthinfodeactivate() {
    this.visible = true;
  }
}
