# ScrubIn WA — Washington State Clinical, Hospital & Research Volunteer Platform

**ScrubIn WA** is a consolidated pre-med and pre-health volunteer discovery platform for Washington State (`980xx`–`994xx`).

## Key Features
- **WA ZIP Code & Distance Engine (`980xx`–`994xx`)**: Haversine distance sorting across Seattle, Bellevue/Eastside, Tacoma, Spokane, Yakima, Bellingham, and Vancouver.
- **22 Deep Verified WA Institutional Programs**: UW Medicine (Montlake & Northwest), Harborview Level-1 Trauma, UW WISH Clinical Simulation, Seattle Children's, Fred Hutch SURP, Swedish, Overlake, EvergreenHealth Hospice, ICHS, Sea Mar (30+ clinics), Lahai Health, Seattle Roots, MultiCare (Hospital, Research & M.A.S.H. Camp), VMFH, Providence Sacred Heart Spokane, YVFWC (24-hr shadowing), PeaceHealth, and Bloodworks NW.
- **24-Hour Automated NIH ClinicalTrials.gov v2 Sync (`server.py`)**: Automatically pulls actively recruiting UW Medicine and Fred Hutchinson Cancer Center clinical studies in Washington State with verified Principal Investigators and `@uw.edu` / `@fredhutch.org` coordinator emails.
- **12 Live WA Opportunity Discovery Portals, Seasonal Calendar, WA Readiness Checklist & Cold-Email Generator**.
- **AMCAS / UWSOM Clinical, Research & Shadowing Hours Logger** with 1-click CSV export.

## Quick Local Run
```bash
python3 server.py
# Open http://localhost:8080
```

## Public Deployment (Render.com / Railway.app)
This repository includes a production `Dockerfile` and `render.yaml` Blueprint configured for port `8080` and `/api/health`.
