/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class RebirthInfoClicker extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./RebirthInfoClicker/costumes/costume1.svg", {
        x: -56.89366000000001,
        y: 59.41436999999999,
      }),
    ];

    this.sounds = [new Sound("pop", "./RebirthInfoClicker/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.broadcast("RebirthInfoDEACTIVATE");
  }

  *whenthisspriteclicked() {
    this.broadcast("RebirthInfoACTIVATE");
  }
}
