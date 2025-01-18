/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Ball2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("ball-a", "./Ball2/costumes/ball-a.svg", { x: 22, y: 22 }),
      new Costume("ball-b", "./Ball2/costumes/ball-b.svg", {
        x: 77.099785,
        y: 25.595493133047086,
      }),
      new Costume("ball-c", "./Ball2/costumes/ball-c.svg", { x: 22, y: 22 }),
      new Costume("ball-d", "./Ball2/costumes/ball-d.svg", { x: 22, y: 22 }),
      new Costume("ball-e", "./Ball2/costumes/ball-e.svg", { x: 22, y: 22 }),
    ];

    this.sounds = [
      new Sound("Boing", "./Ball2/sounds/Boing.wav"),
      new Sound("Pop", "./Ball2/sounds/Pop.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
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
    this.goto(127, -30);
    while (true) {
      if (this.compare(this.stage.vars._, 125) < 0) {
        this.effects.ghost = 50;
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.effects.ghost = 50;
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.compare(this.stage.vars._, 124) > 0) {
        this.effects.clear();
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    while (true) {
      if (this.mouse.down && this.touching("mouse")) {
        if (this.compare(this.stage.vars._, 124) < 0) {
          null;
        } else {
          this.stage.vars._ -= 125;
          this.stage.vars.PerClick += 3;
          yield* this.wait(0.1);
        }
      }
      yield;
    }
  }

  *whenIReceivePage2() {
    yield* this.glide(0.5, 127, 30);
  }

  *whenIReceivePage1() {
    yield* this.glide(0.5, 127, -30);
  }

  *whenIReceiveRebirthinfoactivate() {
    this.visible = false;
  }

  *whenIReceiveRebirthinfodeactivate() {
    this.visible = true;
  }
}
