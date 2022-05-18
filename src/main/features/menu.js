const { app, Menu, shell } = require("electron");
const { showOpenURLDialog } = require("../dialogs/openURL");
const { showHotkeysDialog } = require("../dialogs/hotkeys");
const navigation = require("./navigation");
const { showLoader } = require("../index");
const { traySettingsChanged } = require("./dockMenu");
const { locales } = require("./locales");

const menu = Menu.buildFromTemplate([
  {
    label: app.name,
    submenu: [
      { role: "about", label: locales.menu.app.about },
      {
        label: locales.menu.app.website,
        click() {
          shell.openExternal("https://yandex-music.juvs.dev");
        },
      },
      {
        label: locales.menu.app.github,
        click() {
          shell.openExternal("https://github.com/juvirez/yandex-music-app");
        },
      },
      { type: "separator" },
      { role: "services", submenu: [] },
      { type: "separator" },
      { role: "hide", label: locales.menu.app.hide },
      { role: "hideothers" },
      { role: "unhide" },
      { type: "separator" },
      { role: "quit", label: locales.menu.app.quit },
    ],
  },
  {
    role: "editMenu",
  },
  {
    label: locales.menu.view.title,
    submenu: [
      {
        label: locales.menu.view.reload,
        accelerator: "CommandOrControl+R",
        click() {
          showLoader();
          global.mainWindow.reload();
        },
      },
      {
        role: "close",
      },
    ],
  },
  {
    label: locales.menu.navigate.title,
    submenu: [
      {
        label: locales.menu.navigate.back,
        accelerator: "CommandOrControl+[",
        click: navigation.goBack,
      },
      {
        label: locales.menu.navigate.forward,
        accelerator: "CommandOrControl+]",
        click: navigation.goForward,
      },
      {
        type: "separator",
      },
      {
        label: locales.menu.navigate.open_url,
        accelerator: "CommandOrControl+O",
        click: showOpenURLDialog,
      },
    ],
  },
  {
    label: "Settings",
    submenu: [
      {
        label: "Enable notifications",
        type: "checkbox",
        checked: global.store.get("notifications", true),
        click(menuItem) {
          global.store.set("notifications", menuItem.checked);
        },
      },
      {
        label: "Show Menu Bar Icon",
        type: "checkbox",
        checked: global.store.get("tray"),
        click(menuItem) {
          global.store.set("tray", menuItem.checked);
        },
      },
      {
        label: "Global Hotkeys",
        click: showHotkeysDialog,
      },
    ],
  },
  {
    role: "windowMenu",
  },
]);
Menu.setApplicationMenu(menu);
