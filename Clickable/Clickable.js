/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Clickable extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("ball-a", "./Clickable/costumes/ball-a.svg", {
        x: 22,
        y: 22,
      }),
      new Costume("ball-b", "./Clickable/costumes/ball-b.svg", {
        x: 22,
        y: 22,
      }),
      new Costume("ball-c", "./Clickable/costumes/ball-c.svg", {
        x: 22,
        y: 22,
      }),
      new Costume("ball-d", "./Clickable/costumes/ball-d.svg", {
        x: 22,
        y: 22,
      }),
      new Costume("ball-e", "./Clickable/costumes/ball-e.svg", {
        x: 22,
        y: 22,
      }),
      new Costume(
        "Screenshot 2024-03-15 2",
        "./Clickable/costumes/Screenshot 2024-03-15 2.png",
        { x: 0, y: 0 }
      ),
      new Costume("Designer", "./Clickable/costumes/Designer.svg", {
        x: 195.840985,
        y: 180,
      }),
    ];

    this.sounds = [
      new Sound("Boing", "./Clickable/sounds/Boing.wav"),
      new Sound("Pop", "./Clickable/sounds/Pop.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
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
      new Trigger(
        Trigger.BROADCAST,
        { name: "RebirthInfoACTIVATE" },
        this.whenIReceiveRebirthinfoactivate2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "RebirthInfoDEACTIVATE" },
        this.whenIReceiveRebirthinfodeactivate2
      ),
    ];
  }

  *whenthisspriteclicked() {
    this.stage.vars._ +=
      this.toNumber(this.stage.vars.PerClick) *
      this.toNumber(this.stage.vars.rebirthx);
  }

  *whenGreenFlagClicked() {
    this.broadcast("STARTED");
    this.stage.vars._ = 0;
    this.stage.vars.PerClick = 1;
    this.stage.vars._ = 0;
    this.stage.vars.page = 1;
  }

  *whenIReceiveMessage1() {}

  *whenGreenFlagClicked2() {
    this.stage.costume = "Main";
    yield* this.wait(1);
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.keyPressed("up arrow")) {
        while (true) {
          if (this.keyPressed("up arrow")) {
            while (true) {
              if (this.keyPressed("down arrow")) {
                while (true) {
                  if (this.keyPressed("down arrow")) {
                    while (true) {
                      if (this.keyPressed("left arrow")) {
                        while (true) {
                          if (this.keyPressed("right arrow")) {
                            while (true) {
                              if (this.keyPressed("left arrow")) {
                                while (true) {
                                  if (this.keyPressed("right arrow")) {
                                    while (true) {
                                      if (this.keyPressed("b")) {
                                        while (true) {
                                          if (this.keyPressed("a")) {
                                            while (true) {
                                              if (this.keyPressed("space")) {
                                                this.stage.vars._ += 50000;
                                                this.stage.costume =
                                                  "Cheat activated";
                                              }
                                              yield;
                                            }
                                          }
                                          yield;
                                        }
                                      }
                                      yield;
                                    }
                                  }
                                  yield;
                                }
                              }
                              yield;
                            }
                          }
                          yield;
                        }
                      }
                      yield;
                    }
                  }
                  yield;
                }
              }
              yield;
            }
          }
          yield;
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {}

  *whenGreenFlagClicked5() {
    while (true) {
      if (this.compare(this.stage.vars.page, 2) > 0) {
        this.stage.vars.page = 2;
      }
      yield;
    }
  }

  *whenGreenFlagClicked6() {
    this.stage.vars.rebirthx = 1;
  }

  *whenGreenFlagClicked7() {
    while (true) {
      if (this.compare(this.stage.vars._, 0) < 0) {
        this.stage.vars._ = 0;
      }
      yield;
    }
  }

  *whenIReceiveRebirthinfoactivate() {
    this.stage.costume = "invi";
  }

  *whenIReceiveRebirthinfodeactivate() {
    this.stage.costume = "Main";
  }

  *whenIReceiveRebirthinfoactivate2() {
    this.visible = false;
  }

  *whenIReceiveRebirthinfodeactivate2() {
    this.visible = true;
  }
}
