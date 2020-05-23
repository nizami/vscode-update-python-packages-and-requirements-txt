# Update python packages and requirements.txt

This extension just up to date all your python packages and requirements.txt file by calling only command

```bash
for i in $(pip list -o | awk 'NR > 2 {print $1}'); do pip install -U $i; done && pip freeze > requirements.txt
```
