# Security Policy

## Supported Versions

The following versions of NovaSci Lab receive active security updates:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0.0 | :x:                |

## Reporting a Vulnerability

We take the security of NovaSci Lab and our users seriously. If you believe you have found a security vulnerability or credential exposure, please do not open a public GitHub issue. 

Instead, report it securely by following these steps:
1. Email your findings directly to the development team at `security@novasci.edu`.
2. Provide a detailed summary of the vulnerability, including step-by-step reproduction instructions and any potential impact vectors.
3. Allow up to 48 hours for the core team to validate the report and schedule a patch.

## Telephony & Voice Isolation Security

Our interactive voice tutoring portals utilize Retell AI's secure telephony interface under strict sandbox isolation rules:
- **E.164 Strict Formats:** All input phone parameters are dynamically scrubbed and formatted client-side to mitigate injection attempts.
- **Key Isolation:** API credentials are held strictly in private local environments (`config.js`) and excluded from all repository pushes via robust Git ignore patterns.
- **Dynamic Variable Filtering:** Custom parameters passed to our outbound agent LLMs undergo real-time sanitize sweeps before API submission.
