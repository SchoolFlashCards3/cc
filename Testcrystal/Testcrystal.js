/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Testcrystal extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("crystal-a", "./Testcrystal/costumes/crystal-a.svg", {
        x: 37.411773921926255,
        y: 13.213518282664126,
      }),
      new Costume("crystal-b", "./Testcrystal/costumes/crystal-b.svg", {
        x: 12,
        y: 24,
      }),
    ];

    this.sounds = [
      new Sound("Magic Spell", "./Testcrystal/sounds/Magic Spell.wav"),
      new Sound("collect", "./Testcrystal/sounds/collect.wav"),
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "PAGE 2" },
        this.whenIReceivePage2
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "PAGE 1" },
        this.whenIReceivePage1
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
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
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked6),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked7),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked8),
    ];
  }

  *whenIReceivePage2() {
    if (this.compare(this.stage.vars.page, 1) > 0) {
      this.goto(127, -150);
      this.visible = true;
      yield* this.glide(0.5, 127, -99);
    } else {
      null;
    }
  }

  *whenGreenFlagClicked() {
    this.goto(303, 128);
    this.visible = false;
  }

  *whenIReceivePage1() {
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.compare(this.stage.vars._, 575) < 0) {
        this.effects.ghost = 50;
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.compare(this.stage.vars._, 574) > 0) {
        this.effects.clear();
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    while (true) {
      yield* this.wait(0.1);
      if (this.touching("mouse") && this.mouse.down) {
        if (this.compare(this.stage.vars._, 574) > 0) {
          this.stage.vars._ -= 575;
          this.stage.vars.PerClick += 15;
        }
      }
      yield;
    }
  }

  *whenIReceiveRebirthinfoactivate() {
    this.visible = false;
    this.stage.watchers._.visible = false;
    this.stage.watchers.PerClick.visible = false;
    this.stage.watchers.autoPerSec.visible = false;
    this.stage.watchers.test.visible = false;
  }

  *whenIReceiveRebirthinfodeactivate() {
    this.visible = true;
    this.stage.watchers._.visible = true;
    this.stage.watchers.PerClick.visible = true;
    this.stage.watchers.autoPerSec.visible = true;
    this.stage.watchers.test.visible = true;
  }

  *whenGreenFlagClicked5() {
    yield* this.wait(0.01);
    this.visible = false;
  }

  *whenGreenFlagClicked6() {
    while (true) {
      if (this.toNumber(this.stage.vars.page) === 1) {
        this.visible = false;
      }
      yield;
    }
  }

  *whenGreenFlagClicked7() {
    while (true) {
      if (this.toNumber(this.stage.vars.page) === 2) {
        this.visible = true;
      }
      yield;
    }
  }

  *whenGreenFlagClicked8() {}
}
