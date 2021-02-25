# Update python packages and requirements.txt

[![GitHub Repo stars](https://img.shields.io/github/stars/nizami/vscode-update-python-packages-and-requirements-txt?style=social)](https://github.com/nizami/vscode-update-python-packages-and-requirements-txt)
[![Visual Studio Marketplace](https://vsmarketplacebadge.apphb.com/version/nizami.update-python-packages-and-requirements-txt.svg)](https://marketplace.visualstudio.com/items?itemName=nizami.update-python-packages-and-requirements-txt)

This extension just up to date all your python packages and requirements.txt file by calling only command in current terminal or selected if many are opened.

```bash
for i in $(pip list -o | awk 'NR > 2 {print $1}'); do pip install -U $i; done && pip freeze > requirements.txt
```

---

Icon made by `Freepik` from [Flaticon](https://www.flaticon.com/)
