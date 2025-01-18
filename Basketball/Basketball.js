/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Basketball extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("basketball", "./Basketball/costumes/basketball.svg", {
        x: 80.794514975363,
        y: 34.906045667954174,
      }),
    ];

    this.sounds = [
      new Sound("pop", "./Basketball/sounds/pop.wav"),
      new Sound(
        "basketball bounce",
        "./Basketball/sounds/basketball bounce.wav"
      ),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(
        Trigger.BROADCAST,
        { name: "PAGE 2" },
        this.whenIReceivePage2
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(
        Trigger.BROADCAST,
        { name: "PAGE 1" },
        this.whenIReceivePage1
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked6),
      new Trigger(
        Trigger.BROADCAST,
        { name: "PAGE 2" },
        this.whenIReceivePage3
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked7),
      new Trigger(
        Trigger.BROADCAST,
        { name: "BASKETBALLMOVE(1.5)" },
        this.whenIReceiveBasketballmove15
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "PAGE 1" },
        this.whenIReceivePage4
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
    this.stage.vars.autoPerSec = 0;
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
    this.goto(129, 95);
  }

  *whenthisspriteclicked() {
    while (true) {
      if (this.mouse.down && this.touching("mouse")) {
        if (this.compare(this.stage.vars._, 49) < 0) {
          null;
        } else {
          this.stage.vars._ -= 50;
          this.stage.vars.autoPerSec++;
          yield* this.wait(0.1);
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    while (true) {
      if (this.compare(this.stage.vars._, 49) > 0) {
        this.effects.clear();
      }
      yield;
    }
  }

  *whenIReceivePage2() {
    this.goto(303, 99999);
  }

  *whenGreenFlagClicked5() {
    while (true) {
      null;
      yield;
    }
  }

  *whenIReceivePage1() {
    this.goto(129, 148);
    yield* this.glide(0.5, 129, 95);
  }

  *whenGreenFlagClicked6() {}

  *whenIReceivePage3() {
    this.visible = false;
  }

  *whenGreenFlagClicked7() {
    this.visible = true;
    this.goto(129, 95);
  }

  *whenIReceiveBasketballmove15() {
    yield* this.wait(0.2);
  }

  *whenIReceivePage4() {
    this.visible = true;
    this.goto(129, 135);
    yield* this.glide(0.4, 129, 95);
  }

  *whenIReceiveRebirthinfoactivate() {
    this.visible = false;
  }

  *whenIReceiveRebirthinfodeactivate() {
    this.visible = true;
  }
}
