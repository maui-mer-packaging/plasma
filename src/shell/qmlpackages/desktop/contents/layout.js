
var panel = new Panel
panel.screen = 0
panel.location = 'top'
panel.addWidget("org.kde.kickoff")
panel.addWidget("org.kde.windowlist")

for (var i = 0; i < screenCount; ++i) {
    var desktop = new Activity
    desktop.name = i18n("Desktop")
    desktop.screen = i
    desktop.wallpaperPlugin = 'org.kde.image'

    var clock = desktop.addWidget("org.kde.analogclock")
}
