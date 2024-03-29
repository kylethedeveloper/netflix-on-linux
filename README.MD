# Netflix on Linux :clapper:

This is a project that creates an independent Netflix profile on your Firefox browser and makes it *almost* look like a Netflix app. So, this is **not** an app.

> Also check out my [Prime on Linux](https://github.com/kylethedeveloper/prime-on-linux) project.

### Why I made this?

Because I do not recommend and use [DRM option](https://support.mozilla.org/en-US/kb/enable-drm) on my browser. Because I do not want to involve any plugin or extension or settings that do not respect my privacy. As known, Netflix uses an advanced technology to protect its contents so you gotta compromise your privacy over your browser. Well, no. That's why I created a whole different profile **just to use** Netflix.

## Requirements

To be able to use this on your Linux machine, requirements are:

- sudo privilege
- Firefox Browser
- GNOME Desktop Environment
- xdotool

## Installation

```shell
sudo git clone https://github.com/kylethedeveloper/netflix-on-linux.git /opt/netflix-on-linux
cd /opt/netflix-on-linux
sudo ./install
```

### Installation script steps

`install` script does the following. Examine before running and use at your own risk :warning:

1. Create a new Firefox profile called '**netflixonlinux**'
2. Copy the [profile properties](./properties) that I prepared to the newly created profile.
3. Run 'netflixonlinux' profile for a moment to initialize the profile and close afterwards. (Initialization does not work sometimes)
4. Copy the [netflix.desktop](./netflix.desktop) file to the **/usr/share/applications** directory.
5. Restart GNOME Shell. (equivalent to Alt+F2+'r'+Enter)

## Uninstall

To uninstall netflix-on-linux from your system, go to application directory and run `uninstall` script.

```shell
cd /opt/netflix-on-linux
sudo ./uninstall
```

### Uninstall script steps

`uninstall` script does the following. Examine before running and use at your own risk :warning:

1. Open up Firefox Profile Manager for user to delete **netflixonlinux** profile. At this step, do the following to properly uninstall Firefox profile. This must be done by hand as there is no command for it.
   - Choose **netflixonlinux** from the list.
   - Click **Delete Profile**.
   - Click **Delete Files** to remove all files associated with the profile.
   - Exit.
2. Delete files in `/opt/netflix-on-linux` directory *(except uninstall script)*. If desired, directory must be deleted manually. To do so, run `sudo rm -rvf /opt/netflix-on-linux`.
3. Delete `/usr/share/applications/netflix.desktop` file.

## TODO

- [x] Make `user.js` more privacy friendly.
- [x] Prepare an uninstall script.
- [x] Add xdotool to requirements.

***

![*Netflix in Application Menu*](https://user-images.githubusercontent.com/8023096/104824067-e3af8380-585f-11eb-9fb1-8070c22b6467.png)

![*When opened*](https://user-images.githubusercontent.com/8023096/104824083-00e45200-5860-11eb-9de1-9a8be4772611.gif)

**Note:** Netflix homepage might not load at the first time you click on the icon, which it is supposed to. So the second time and forever will work.
