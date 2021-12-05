# Update python packages and requirements.txt

[![GitHub Repo stars](https://img.shields.io/github/stars/nizami/vscode-update-python-packages-and-requirements-txt?style=social)](https://github.com/nizami/vscode-update-python-packages-and-requirements-txt)
[![Visual Studio Marketplace](https://vsmarketplacebadge.apphb.com/version/nizami.update-python-packages-and-requirements-txt.svg)](https://marketplace.visualstudio.com/items?itemName=nizami.update-python-packages-and-requirements-txt)

This extension just up to date all your python packages and requirements.txt file by calling only command in a new terminal or an existing one.

Press <kbd>cmd+shift+p</kbd> in mac or <kbd>ctrl+shift+p</kbd> in windows or linux and start typing `update python ...`

![screenshot](https://raw.githubusercontent.com/nizami/vscode-update-python-packages-and-requirements-txt/main/screenshot.png)

Following script will run:

```bash
for i in $(pip list -o | awk 'NR > 2 {print $1}'); do pip install -U $i; done && pip freeze > requirements.txt
```
