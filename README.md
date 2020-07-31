[![](https://vsmarketplacebadge.apphb.com/version/nizami.update-python-packages-and-requirements-txt.svg)](https://marketplace.visualstudio.com/items?itemName=nizami.update-python-packages-and-requirements-txt)

# Update python packages and requirements.txt

This extension just up to date all your python packages and requirements.txt file by calling only command in current terminal or selected if many are opened.

```bash
for i in $(pip list -o | awk 'NR > 2 {print $1}'); do pip install -U $i; done && pip freeze > requirements.txt
```
