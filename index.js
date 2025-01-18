import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Basketball from "./Basketball/Basketball.js";
import Apple from "./Apple/Apple.js";
import Ball2 from "./Ball2/Ball2.js";
import Ball3 from "./Ball3/Ball3.js";
import UpArrow from "./UpArrow/UpArrow.js";
import DownArrow from "./DownArrow/DownArrow.js";
import RebirthButton from "./RebirthButton/RebirthButton.js";
import Testcrystal from "./Testcrystal/Testcrystal.js";
import RebirthInfo from "./RebirthInfo/RebirthInfo.js";
import RebirthInfoClicker from "./RebirthInfoClicker/RebirthInfoClicker.js";
import Rebirthcloser from "./Rebirthcloser/Rebirthcloser.js";
import Clickable from "./Clickable/Clickable.js";
import Loading from "./Loading/Loading.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  Basketball: new Basketball({
    x: 303,
    y: 189,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 11,
  }),
  Apple: new Apple({
    x: 129,
    y: 91,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 70,
    visible: true,
    layerOrder: 4,
  }),
  Ball2: new Ball2({
    x: 127,
    y: 30,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 100,
    visible: true,
    layerOrder: 1,
  }),
  Ball3: new Ball3({
    x: 125,
    y: -34,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3,
  }),
  UpArrow: new UpArrow({
    x: 129,
    y: 146,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 4,
    size: 70,
    visible: true,
    layerOrder: 2,
  }),
  DownArrow: new DownArrow({
    x: 122.5220947265625,
    y: -155.25616455078125,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 3,
    size: 70,
    visible: true,
    layerOrder: 5,
  }),
  RebirthButton: new RebirthButton({
    x: -132.7830810546875,
    y: -201.2314453125,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 6,
  }),
  Testcrystal: new Testcrystal({
    x: 295.9999706265435,
    y: 130.00005205077952,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 200,
    visible: true,
    layerOrder: 13,
  }),
  RebirthInfo: new RebirthInfo({
    x: -17.00033696706751,
    y: 5.999330457868325,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 9,
  }),
  RebirthInfoClicker: new RebirthInfoClicker({
    x: -119.87330546891192,
    y: -205.07221755355002,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 10,
  }),
  Rebirthcloser: new Rebirthcloser({
    x: 93.0003623985443,
    y: 20,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 7,
  }),
  Clickable: new Clickable({
    x: -122.49810440116241,
    y: -3.2568615229539546,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 7,
    size: 50,
    visible: true,
    layerOrder: 8,
  }),
  Loading: new Loading({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 12,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 60, // Set to 60 to make your project run faster
});
export default project;
