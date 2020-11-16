# Netflix on Linux :clapper:

This is a project that creates an independent Netflix profile on your Firefox browser and makes it *almost* look like a Netflix app. So, this is **not** an app.

### Why I made this?

Because I do not recommend and use [DRM option](https://support.mozilla.org/en-US/kb/enable-drm) on my browser. Because I do not want to involve any plugin or extension or settings that do not respect my privacy. As known, Netflix uses an advanced technology to protect its contents so you gotta compromise your privacy over your browser. Well, no. That's why I created a whole different profile **just to use** Netflix.

## Requirements

To be able to use this on your Linux machine, requirements are:

- sudo privilege
- Firefox Browser
- GNOME Desktop Environment

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

***

![*Netflix in Application Menu*](https://a.uguu.se/dwrit.png)

![*When opened*](https://a.uguu.se/yodx.gif)

**Note:** Netflix homepage might not load at the first time you click on the icon, which it is supposed to. So the second time and forever will work.
