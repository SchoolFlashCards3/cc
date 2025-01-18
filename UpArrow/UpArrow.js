/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class UpArrow extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("arrow1-a", "./UpArrow/costumes/arrow1-a.svg", {
        x: 28,
        y: 23,
      }),
      new Costume("arrow1-b", "./UpArrow/costumes/arrow1-b.svg", {
        x: 28,
        y: 23,
      }),
      new Costume("arrow1-c", "./UpArrow/costumes/arrow1-c.svg", {
        x: 23,
        y: 28,
      }),
      new Costume("arrow1-d", "./UpArrow/costumes/arrow1-d.svg", {
        x: 23,
        y: 28,
      }),
    ];

    this.sounds = [new Sound("pop", "./UpArrow/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "PAGE CHECK" },
        this.whenIReceivePageCheck
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
    this.visible = false;
    while (true) {
      if (this.touching("mouse") && this.mouse.down) {
        if (this.toNumber(this.stage.vars.page) === 1) {
          this.visible = false;
        } else {
          this.visible = true;
        }
        yield* this.wait(0.55);
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.toNumber(this.stage.vars.page) === 1) {
        this.visible = false;
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.compare(this.stage.vars.page, 1) > 0) {
        this.visible = true;
      } else {
        this.visible = false;
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    while (true) {
      if (this.compare(this.stage.vars.page, 1) < 0) {
        this.stage.vars.page = 1;
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    while (true) {
      if (this.touching("mouse") && this.mouse.down) {
        while (!!(this.touching("mouse") && this.mouse.down)) {
          if (this.touching("mouse") && this.mouse.down) {
            this.broadcast("PAGE CHECK");
            yield* this.wait(0.05);
            this.stage.vars.page--;
            yield* this.wait(0.3);
          }
          yield;
        }
      }
      yield;
    }
  }

  *whenIReceivePageCheck() {
    if (this.toNumber(this.stage.vars.page) === 2) {
      this.broadcast("PAGE 1");
      this.broadcast("BASKETBALLMOVE(1.5)");
    }
  }

  *whenIReceiveRebirthinfoactivate() {
    this.visible = false;
  }

  *whenIReceiveRebirthinfodeactivate() {
    this.visible = true;
  }
}
