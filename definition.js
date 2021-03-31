Blockly.Blocks['yolobit_neopixel_setup'] = {
  init: function() {
    this.jsonInit({
      "colour": "#bf42bf",
      "nextStatement": null,
      "tooltip":
        Blockly.Msg.YOLOBIT_NEOPIXEL_SETUP_TOOLTIP,
      "previousStatement": null,
      "message0": 
        Blockly.Msg.YOLOBIT_NEOPIXEL_SETUP_MESSAGE0,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "pin",
          "options": [
            ["P6", "12"],
            ["P7", "25"],
            ["P8", "17"],
            ["P9", "16"],
            ["P10", "26"],
            ["P13", "18"],
            ["P14", "19"],
            ["P15", "23"],
            ["P16", "5"],
            ["P19", "22"],
            ["P20", "21"],
          ],
        },
        {
          "type": "input_value",
          "name": "neo"
        },
        { "type": "input_dummy" }
      ],
      "helpUrl": 
        Blockly.Msg.YOLOBIT_NEOPIXEL_SETUP_HELPURL
    });
  }
};

Blockly.Blocks['yolobit_neopixel_color'] = {
  init: function() {
    this.jsonInit({
      "colour": "#bf42bf",
      "nextStatement": null,
      "tooltip":
        Blockly.Msg.YOLOBIT_NEOPIXEL_COLOR_TOOLTIP,
      "previousStatement": null,
      "message0": 
        Blockly.Msg.YOLOBIT_NEOPIXEL_COLOR_MESSAGE0,
      "args0": [
        { "type": "input_value", "name": "COLOR" },
        { "type": "input_dummy" }
      ],
      "helpUrl": 
        Blockly.Msg.YOLOBIT_NEOPIXEL_COLOR_HELPURL
    });
  }
};

Blockly.Blocks["yolobit_neopixel_effect"] = {

  init: function () {
    var options = [
      [
        {
          "src":
            "https://i.ibb.co/B6wRv5d/hand-wiping-with-cloth-vector-icon-on-white-background.jpg",
          "width": 50,
          "height": 50,
          "alt": "wipe",
        },
        "wipe_effect()",
      ],
      [
        {
          "src":
            "https://i.ibb.co/LJR4bXv/2d96a46c07140ae378d5e5b46ce1e2e6d001e598-Convert-Image.png",
          "width": 50,
          "height": 50,
          "alt": "dim",
        },
        "dim_effect()",
      ],
      [
        {
          "src":
            "https://i.ibb.co/drRytxd/Sparkling-and-twinkling-line-outline-icon-isolated-on-white-Festive-twinkle-and-sparkle-element-Star.jpg",
          "width": 50,
          "height": 50,
          "alt": "twinkle",
        },
        "twinkle_effect()",
      ],
      [
        {
          "src":
            "https://i.ibb.co/rtVnnqG/275460466.jpg",
          "width": 50,
          "height": 50,
          "alt": "sparkle",
        },
        "spakle_effect()",
      ],
      [
        {
          "src":
            "https://i.ibb.co/WK2Ghys/theatre-curtain.png",
          "width": 50,
          "height": 50,
          "alt": "thearter",
        },
        "theaterChase_effect()",
      ],
      [
        {
          "src":
            "https://i.ibb.co/GPyyQHJ/image.png",
          "width": 50,
          "height": 50,
          "alt": "bounce",
        },
        "bounce_effect()",
      ],
      [
        {
          "src":
            "https://i.ibb.co/3rf2svt/image.png",
          "width": 50,
          "height": 50,
          "alt": "firework",
        },
        "firework_effect()",
      ],
      [
        {
          "src":
            "https://i.ibb.co/JpJbFSw/image.png",
          "width": 50,
          "height": 50,
          "alt": "rainbow",
        },
        "rainbow_effect()",
      ],
      [
        {
          "type": "field_image",
          "src":
            "https://i.ibb.co/Q6ZbGC0/image.png",
          "width": 50,
          "height": 50,
          "alt": "cycle",
        },
        "cycle_effect()",
      ],
    ];

    this.jsonInit({
      "message0": Blockly.Msg.YOLOBIT_NEOPIXEL_EFFECT_MESSAGE0,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "effect",
          "options": options,
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#bf42bf",
      "tooltip": Blockly.Msg.YOLOBIT_NEOPIXEL_EFFECT_TOOLTIP,
      "helpUrl": Blockly.Msg.YOLOBIT_NEOPIXEL_EFFECT_HELPURL,
    });
  },
};

Blockly.Blocks['yolobit_neopixel_clear'] = {
  init: function() {
    this.jsonInit({
      "colour": "#bf42bf",
      "nextStatement": null,
      "tooltip":
        Blockly.Msg.YOLOBIT_NEOPIXEL_CLEAR_TOOLTIP,
      "previousStatement": null,
      "message0": 
        Blockly.Msg.YOLOBIT_NEOPIXEL_CLEAR_MESSAGE0,
      "args0": [
      ],
      "helpUrl": 
        Blockly.Msg.YOLOBIT_NEOPIXEL_CLEAR_HELPURL
    });
  }
};

// Any imports need to be reserved words
Blockly.Python.addReservedWords('neopixel');
Blockly.Python.addReservedWords('led_strip');
Blockly.Python.addReservedWords('led_strip');

Blockly.Python['yolobit_neopixel_setup'] = function(block) {
  Blockly.Python.definitions_['import_display'] = 'from yolobit import *';
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  Blockly.Python.definitions_['import_led_strip'] = 'import led_strip';
  Blockly.Python.definitions_['import_neopixel'] = 'import neopixel';
  var dropdown_pin = block.getFieldValue('pin');
  var number_neo = Blockly.Python.valueToCode(block, 'neo', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_np'] = 'strips = led_strip.Led_Strip(' + dropdown_pin + "," + number_neo + ")";
  return "";
};

Blockly.Python['yolobit_neopixel_color'] = function(block) {
  var value_color = Blockly.Python.valueToCode(block, 'COLOR', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.

  var code = "strips.set_hex_color(" + value_color + ")\n";
  return code;
};

Blockly.Python['yolobit_neopixel_effect'] = function(block) {
  var dropdown_effect = block.getFieldValue('effect');
  var code = 'strips.' + dropdown_effect + '\n';
return code;
};

Blockly.Python['yolobit_neopixel_clear'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'strips.clear(np)\n';
  return code;
};