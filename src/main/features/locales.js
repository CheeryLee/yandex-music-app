const { app } = require('electron');
const { I18n } = require('i18n');
const path = require("path");

const i18n = new I18n({
  locales: ['en', 'ru'],
  defaultLocale: 'en',
  directory: path.join(__dirname, '../../../locales'),
  objectNotation: true,
  retryInDefaultLocale: true,
  syncFiles: true
});

i18n.setLocale(app.getLocale().substr(0, 2));

exports.locales = {
  dockMenu: {
    like: i18n.__("dockMenu.like"),
    dislike: i18n.__("dockMenu.dislike"),
    play: i18n.__("dockMenu.play"),
    pause: i18n.__("dockMenu.pause"),
    next: i18n.__("dockMenu.next"),
    previous: i18n.__("dockMenu.previous"),
    now_playing: i18n.__("dockMenu.now_playing"),
    menu_bar_show: i18n.__("dockMenu.menu_bar_show"),
    liked: i18n.__("dockMenu.liked"),
    disliked: i18n.__("dockMenu.disliked"),
    playlist: i18n.__("dockMenu.playlist"),
    quit: i18n.__("dockMenu.quit"),
  },
  menu: {
    app: {
      about: i18n.__("menu.app.about"),
      website: i18n.__("menu.app.website"),
      github: i18n.__("menu.app.github"),
      hide: i18n.__("menu.app.hide"),
      quit: i18n.__("menu.app.quit")
    },
    view: {
      title: i18n.__("menu.view.title"),
      reload: i18n.__("menu.view.reload")
    },
    navigate: {
      title: i18n.__("menu.navigate.title"),
      back: i18n.__("menu.navigate.back"),
      forward: i18n.__("menu.navigate.forward"),
      open_url: i18n.__("menu.navigate.open_url")
    }
  },
  openURL: {
    placeholder: i18n.__("openURL.placeholder")
  },
  settings: {
    show_notifications: i18n.__("settings.show_notifications"),
    show_menu_bar_icon: i18n.__("settings.show_menu_bar_icon"),
    use_global_hotkeys: i18n.__("settings.use_global_hotkeys"),
    language: {
      title: i18n.__("settings.language.title"),
      ru: i18n.__("settings.language.ru"),
      en: i18n.__("settings.language.en")
    }
  }
}