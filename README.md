# Tracking Parameter Cleaner

Remove common campaign parameters from HTTP links while preserving the other query parameters.

Open `index.html` in a modern browser. Edit the sample inputs to update the result, then print or download it. Processing stays in the tab.

## Example

Input:

```text
https://example.org/article?id=3&utm_source=news#read
```

Expected output includes:

```text
?id=3#read
```
