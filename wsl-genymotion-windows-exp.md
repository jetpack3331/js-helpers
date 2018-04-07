# Connect app over exp (android) within wsl into genymotion running on windows

I was solving following problem:
- I'm developing JS apps in WSL system. There is source codes of projects
- Have installed and running Genymotion in Windows
- Still develop source codes in WSL and already been connected into Genymotion

1. Install Genymotion normally on windows
2. Install Android studio (AS) in windows
3. Downlaod SDK and SDK tools in AS
4. Point genymotion SDK path in setting into SDK folder found in AS
5. Run this commands in WSL
```bash
wget https://dl.google.com/android/repository/platform-tools-latest-linux.zip
sudo unzip -d /usr/local/sbin platform-tools-latest-linux.zip
sudo wget -O /usr/local/sbin/adb https://raw.githubusercontent.com/NicolasBernaerts/ubuntu-scripts/master/android/adb
sudo wget -O /usr/local/sbin/fastboot https://raw.githubusercontent.com/NicolasBernaerts/ubuntu-scripts/master/android/fastboot
sudo chmod +x /usr/local/sbin/platform-tools/adb /usr/local/sbin/adb
sudo chmod +x /usr/local/sbin/platform-tools/fastboot /usr/local/sbin/fastboot
```
6. My **.expo/settings.json** is following
```json
{
  "hostType": "lan",
  "lanType": "ip",
  "dev": true,
  "minify": false,
  "urlRandomness": "... some string ..."
}
```

Hope it helps somebody in future...
