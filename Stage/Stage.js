/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Main", "./Stage/costumes/Main.svg", {
        x: 368.3367905745938,
        y: 219.27176619780346,
      }),
      new Costume("Info", "./Stage/costumes/Info.svg", {
        x: 204.6289552525903,
        y: 62.249996197803426,
      }),
      new Costume("Cheat activated", "./Stage/costumes/Cheat activated.svg", {
        x: 363.33679218279997,
        y: 214.27176500000002,
      }),
      new Costume("invi", "./Stage/costumes/invi.svg", { x: 0, y: 0 }),
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.autoPerSec = 0;
    this.vars.PerClick = 1;
    this.vars.page = 2;
    this.vars._ = 0;
    this.vars.test = 0;
    this.vars.autoCashPerSecCodeV = 0;
    this.vars.rebirthx = 1;

    this.watchers.autoPerSec = new Watcher({
      label: "Auto $ per sec",
      style: "normal",
      visible: true,
      value: () => this.vars.autoPerSec,
      x: 240,
      y: 140,
    });
    this.watchers.PerClick = new Watcher({
      label: "$ Per click",
      style: "normal",
      visible: true,
      value: () => this.vars.PerClick,
      x: 240,
      y: 160,
    });
    this.watchers._ = new Watcher({
      label: "$",
      style: "normal",
      visible: true,
      value: () => this.vars._,
      x: 240,
      y: 180,
    });
    this.watchers.test = new Watcher({
      label: "test",
      style: "normal",
      visible: true,
      value: () => this.vars.test,
      x: 239,
      y: 119,
    });
  }
}
