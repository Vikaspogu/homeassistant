## Home Assistant Configuration :metal:

This is my [Home Assistant](https://www.home-assistant.io/) configuration.

---

My Home Assistant (HA) Test-Machine is an [Raspberry Pi 3 Model B+ *](https://amzn.to/3hJPFWC) with 1GB RAM and [16GB *](https://amzn.to/2KRBXVH) microSDHC in a [Aukru Super 3 in 1 Kit Case *](https://amzn.to/3ne80fx). <br />
It's running with a Pi3 64-bit Image for [Hass.io Install-Info](https://www.home-assistant.io/hassio/installation/).

> Buy the new [Raspberry Pi 4 B](https://www.raspberrypi.org/products/raspberry-pi-4-model-b/) - [Amazon *](https://amzn.to/35aHPjo) with 8GB RAM. :rocket:

---

![HAVERSION](https://img.shields.io/badge/homeassistant-2021.8.x-blue)
![STARS](https://img.shields.io/github/stars/ingeniumdesign/homeassistant?color=yellow&style=flat-square)
![WATCHERS](https://img.shields.io/github/watchers/ingeniumdesign/homeassistant?color=green&style=flat-square)
![ISSUES](https://img.shields.io/github/issues-raw/ingeniumdesign/homeassistant?style=flat-square)
![LASTCOMMIT](https://img.shields.io/github/last-commit/ingeniumdesign/homeassistant?style=flat-square)
![SIZE](https://img.shields.io/github/repo-size/ingeniumdesign/homeassistant?style=flat-square)

## Screenshot

![](https://raw.githubusercontent.com/ingeniumdesign/homeassistant/master/docs/ha-dash.JPG)
_More Screenshot down below._

## Hardware

- Intel NUC i5 [NUC7i5BNB](https://ark.intel.com/content/www/de/de/ark/products/95064/intel-nuc-board-nuc7i5bnb.html) with 16GB RAM and 250GB NVMe SSD [Amazon i5-10 *](https://amzn.to/35e8tYI)
- Raspberry [Pi3 B+](https://www.raspberrypi.org/products/raspberry-pi-3-model-b-plus/) - [Amazon *](https://amzn.to/3hJPFWC) with 1GB RAM and [16GB *](https://amzn.to/2KRBXVH) microSDHC - DEV Server
- AVM [FRITZ!Box 6590 Cable](https://avm.de/produkte/fritzbox/fritzbox-6590-cable/) - [Amazon *](https://amzn.to/359i6YE) // Take the new [6591 Cable](https://avm.de/produkte/fritzbox/fritzbox-6591-cable/)! - [Amazon *](https://amzn.to/3pNbdUU)
- AVM 3x [FRITZ!DECT 301](https://avm.de/produkte/fritzdect/fritzdect-301/) - [Amazon *](https://amzn.to/3pSRUd4)
- AVM 1x [FRITZ!DECT 200](https://avm.de/produkte/fritzdect/fritzdect-200/) - [Amazon *](https://amzn.to/2LnpAQK)
- AVM 1x [FRITZ!Powerline 1260E Set](https://avm.de/produkte/fritzpowerline/fritzpowerline-1260e-wlan-set/) - [Amazon *](https://amzn.to/35a7gSv)
- Phoscon [Conbee II USB](https://phoscon.de/de/conbee2) - [Amazon *](https://amzn.to/3n7jgu0) - for Zigbee using ZHA integration <br />
  _See the Install Pi3 Infos down below: Conbee II USB for the RPi 3B+_
- Z-Wave [RaZberry 2 Modul](https://z-wave.me/products/razberry/) ZMEERAZ2 (only for the Raspberry) - [Amazon *](https://amzn.to/3nchsA1) - for ZWave <br />
  _See the Install Pi3 Infos down below: Z-Wave RaZberry 2 Modul for the RPi 3B+_
- AEOTEC [Z-Stick Gen5+ EU 868.4MHz](https://aeotec.com/z-wave-usb-stick/) ZW090-C - for ZWave <br />
  _For the Intel NUC i5 Upgrade_
- Xiaomi [Roborock S6](https://de.roborock.com/pages/roborock-s6) - [Xiaomi Cloud Tokens Extractor](https://github.com/PiotrMachowski/Xiaomi-cloud-tokens-extractor) - [Amazon *](https://amzn.to/38eLmPX)
- Xiaomi 4x [Door & Window Sensor](https://xiaomi-mi.com/sockets-and-sensors/xiaomi-mi-door-window-sensors/) MCCGQ01LM - [Amazon *](https://amzn.to/2NR1pM0)
- AEOTEC 1x [Plus Multisensor 6 EU 868.4MHz](https://aeotec.com/z-wave-sensor/) ZW100-C - [Amazon *](https://amzn.to/38YJoCm)
- Amazon [FireHD 10 Tablet *](https://amzn.to/3oicZNp) - [Fire Toolbox V11.0](https://forum.xda-developers.com/t/windows-tool-fire-toolbox-v11-0.3889604/)
- Amazon [FireHD 10 Plus Tablet *](https://amzn.to/3iqhlli) - [Fire Toolbox V11.0](https://forum.xda-developers.com/t/windows-tool-fire-toolbox-v11-0.3889604/)
- Amazon 1x [Echo Dot (4. Gen.) *](https://amzn.to/3ncrktE)
- Amazon 1x [Echo Dot (3. Gen.) *](https://amzn.to/3hHu8xz)
- Shelly 2x [2.5](https://shelly.cloud/products/shelly-25-smart-home-automation-relay/) - [Amazon *](https://amzn.to/38W9vuG)
- Shelly 2x [1](https://shelly.cloud/products/shelly-1-smart-home-automation-relay/) - [Amazon *](https://amzn.to/397NDNm)
- Shelly 2x [1L](https://shelly.cloud/products/shelly-1l-single-wire-smart-home-automation-relay/) - [Amazon *](https://amzn.to/3paPwhT)
- Synology [DS713+](https://www.synology.com/de-de/support/download/DS713+#system) - [Amazon *](https://amzn.to/3hHu8xz) // Buy the new [DS720+](https://www.synology.com/de-de/products/DS720+) [Amazon *](https://amzn.to/3rWErT1)
- ZyXEL [GS1900-24E](https://www.zyxel.com/de/de/products_services/8-10-16-24-48-port-GbE-Smart-Managed-Switch-GS1900-Series/) - [Amazon *](https://amzn.to/391vcbR)
- ZyXEL [GS1900-8](https://www.zyxel.com/de/de/products_services/8-10-16-24-48-port-GbE-Smart-Managed-Switch-GS1900-Series/) - [Amazon *](https://amzn.to/357BQMo)
- ZyXEL [GS108B-V3](https://www.zyxel.com/de/de/products_services/8-Port-Desktop-Gigabit-Ethernet-Switch-GS-108B-v3/) - [Amazon *](https://amzn.to/3irRh9k)
- Homematic IP 1x [Access Point](https://www.homematic-ip.com/produkte/detail/home-control-access-point.html) - [Amazon *](https://amzn.to/2MhohDn)
- Homematic IP 1x [Fußbodenheizungsaktor – 12-fach, motorisch](https://www.homematic-ip.com/produkte/detail/homematic-ip-fussbodenheizungsaktor-12-fach-motorisch.html) - [Amazon *](https://amzn.to/3paOJNB)
- Homematic IP 7x [Stellantrieb – motorisch](https://www.homematic-ip.com/produkte/detail/homematic-ip-stellantrieb-motorisch.html) - [Amazon *](https://amzn.to/3p4AVEq)
- Homematic IP 2x [Wandthermostat 240V - 150628A0](https://www.homematic-ip.com/produkte/detail/wandthermostat-mit-schaltausgang-fuer-markenschalter.html) - [Amazon *](https://amzn.to/39lquqC)
- Gardena [Mähroboter smart SILENO city, 250](https://www.gardena.com/de/produkte/rasenpflege/mahroboter/mahroboter-smart-sileno-city-250-m2-set/970450703/) - [Amazon *](https://amzn.to/3fNnVAq)

## Hass.io Addons

![](https://raw.githubusercontent.com/ingeniumdesign/homeassistant/master/docs/ha-logo-small.png)

- Check Home Assistant configuration
- [Visual Studio Code](https://github.com/hassio-addons/addon-vscode)
- [deCONZ](https://www.home-assistant.io/integrations/deconz/) - Conbee II
- [Speedtest.net](https://www.speedtest.net/)
- [MQTT](https://www.home-assistant.io/integrations/mqtt/)

## Custom Components

- [ble monitor](https://github.com/custom-components/ble_monitor/)
- [browser-mod](https://github.com/thomasloven/hass-browser_mod)
- [Frigate](https://github.com/blakeblackshear/frigate-hass-integration)
- [Lovelace Gen](https://github.com/thomasloven/hass-lovelace_gen)

## Lovelace Plugins

- [bar-card](https://github.com/custom-cards/bar-card)
- [button-card](https://github.com/custom-cards/button-card)
- [multiple-entity-row](https://github.com/benct/lovelace-multiple-entity-row)
- [mini-graph-card-bundle](https://github.com/kalkih/mini-graph-card)
- [simple-thermostat](https://github.com/nervetattoo/simple-thermostat)
- [transmission-card](https://github.com/amaximus/transmission-card)
- [vacuum-card](https://github.com/denysdovhan/vacuum-card)
- [vertical-stack-in-card](https://github.com/ofekashery/vertical-stack-in-card)
- [weather-card](https://github.com/bramkragten/weather-card)

### Google Fonts
- **Headlines:** Comfortaa [Google Fonts](https://fonts.google.com/specimen/Comfortaa)
- **Content:** Raleway [Google Fonts](https://fonts.google.com/specimen/Raleway)

### HA

#### Conbee II USB for the RPi 4

1. Plugged it into the USB.
2. Popped out the SD card and used [USB reader *](https://amzn.to/3pOwVI1) to access on another computer.
3. Edited config.txt <br />
   Config Device Pi3B, Pi3B+ or Pi4: <br />
   **Raspberry Pi 3B** or older: <br/>
```yaml
enable_uart=1
dtoverlay=pi3-disable-bt
```
3.  **Raspberry Pi 3B+ or 4** <br/>
```yaml
enable_uart=1
dtoverlay=pi3-miniuart-bt
```
4. Put SD card back in RPi and turned it on.
5. Went to Configuration > deCONZ. <br/>
```yaml
device: >-
  /dev/serial/by-id/usb-dresden_elektronik_ingenieurtechnik_GmbH_ConBee_II_DE2408889-if00
```

### DEBUGGING and Errors :neckbeard:

- [x] **ERROR** ~~vacuum-card/vacuum-card.js Error: Cannot read property 'states' of undefined~~ [~~GitHub #169~~](https://github.com/denysdovhan/vacuum-card/issues/169)
- [ ] **ERROR** synology_dsm dont work. Go in long loading point.
