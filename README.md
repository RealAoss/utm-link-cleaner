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

## Limitations

Use the input format shown in the worked example. The transformation runs in browser memory; export the result before closing the tab.

## Development

See [CONTRIBUTING.md](CONTRIBUTING.md) for setup and test commands, and the [changelog](CHANGELOG.md) for project history.

## License

[MIT License](LICENSE). Copyright (c) 2026 utm-link-cleaner contributors.
