/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class DownArrow extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("arrow1-a", "./DownArrow/costumes/arrow1-a.svg", {
        x: 28,
        y: 23,
      }),
      new Costume("arrow1-b", "./DownArrow/costumes/arrow1-b.svg", {
        x: 28,
        y: 23,
      }),
      new Costume("arrow1-c", "./DownArrow/costumes/arrow1-c.svg", {
        x: 23,
        y: 28,
      }),
      new Costume("arrow1-d", "./DownArrow/costumes/arrow1-d.svg", {
        x: 23,
        y: 28,
      }),
    ];

    this.sounds = [new Sound("pop", "./DownArrow/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
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
    while (true) {
      if (this.touching("mouse") && this.mouse.down) {
        yield* this.wait(0.3);
        if (this.toNumber(this.stage.vars.page) === 1) {
          this.broadcast("PAGE 2");
          this.broadcast("BASJETBALLmove(1)");
          yield* this.wait(0.1);
          this.stage.vars.page++;
        } else {
          this.broadcast("Page 3");
        }
      }
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
