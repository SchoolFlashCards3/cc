/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class RebirthInfo extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Rebirth Info", "./RebirthInfo/costumes/Rebirth Info.svg", {
        x: 131.66854858398438,
        y: 100.23593139648438,
      }),
    ];

    this.sounds = [new Sound("pop", "./RebirthInfo/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "RebirthInfoDEACTIVATE" },
        this.whenIReceiveRebirthinfodeactivate
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "RebirthInfoACTIVATE" },
        this.whenIReceiveRebirthinfoactivate
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.broadcast("RebirthInfoDEACTIVATE");
  }

  *whenIReceiveRebirthinfodeactivate() {
    this.visible = false;
  }

  *whenIReceiveRebirthinfoactivate() {
    this.visible = true;
  }
}
