# Home Assistant Configuration

This is my [Home Assistant](https://www.home-assistant.io/) configuration.

## Screenshot

![screenshot](./docs/hass_dash.png)

## Hass.io Addons

![logo](https://raw.githubusercontent.com/ingeniumdesign/homeassistant/master/docs/ha-logo-small.png)

- Roomba
- Internet Printing Protocol
- Nest
- TP Link Smart Home
- Transmission
- [Speedtest.net](https://www.speedtest.net/)
- [MQTT](https://www.home-assistant.io/integrations/mqtt/)

## Custom Components

- [ble monitor](https://github.com/custom-components/ble_monitor/)
- [browser-mod](https://github.com/thomasloven/hass-browser_mod)
- [Frigate](https://github.com/blakeblackshear/frigate-hass-integration)
- [Lovelace Gen](https://github.com/thomasloven/hass-lovelace_gen)
- [Plex recently added](https://github.com/custom-components/sensor.plex_recently_added)
- [Scheduler](https://github.com/nielsfaber/scheduler-component.git)
- [Sonarr upcoming media](https://github.com/custom-components/sensor.sonarr_upcoming_media)

## Lovelace Plugins

- [bar-card](https://github.com/custom-cards/bar-card)
- [button-card](https://github.com/custom-cards/button-card)
- [card-mod](https://github.com/thomasloven/lovelace-card-mod)
- [card-tools](https://github.com/thomasloven/lovelace-card-tools)
- [multiple-entity-row](https://github.com/benct/lovelace-multiple-entity-row)
- [mini-graph-card-bundle](https://github.com/kalkih/mini-graph-card)
- [simple-thermostat](https://github.com/nervetattoo/simple-thermostat)
- [transmission-card](https://github.com/amaximus/transmission-card)
- [upcoming-media-card](https://github.com/custom-cards/upcoming-media-card/)
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
3. Edited config.txt
   Config Device Pi3B, Pi3B+ or Pi4:
   **Raspberry Pi 3B** or older:

    ```yaml
    enable_uart=1
    dtoverlay=pi3-disable-bt
    ```

4. **Raspberry Pi 3B+ or 4**

    ```yaml
    enable_uart=1
    dtoverlay=pi3-miniuart-bt
    ```

5. Put SD card back in RPi and turned it on.
6. Went to Configuration > deCONZ.

    ```yaml
    device: >-
      /dev/serial/by-id/usb-dresden_elektronik_ingenieurtechnik_GmbH_ConBee_II_DE2408889-if00
    ```

### DEBUGGING and Errors

- [x] **ERROR** ~~vacuum-card/vacuum-card.js Error: Cannot read property 'states' of undefined~~ [~~GitHub #169~~](https://github.com/denysdovhan/vacuum-card/issues/169)
- [ ] **ERROR** synology_dsm dont work. Go in long loading point.
