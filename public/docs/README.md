# 📁 /public/docs — Place your files here

Drop your actual PDF/ZIP files into this folder with these exact filenames.
React will serve them as static assets, and the Download buttons will link directly to them.

## Documents
- topic-assessment.pdf
- project-proposal.pdf
- progress-presentation-1.pdf
- progress-presentation-2.pdf
- research-paper.pdf
- individual-final-reports.zip   ← zip all 4 individual reports together
- final-report.pdf
- project-poster.pdf             ← add when ready, then set available: true in Downloads.jsx

## Presentation Slides
- slides-proposal.pdf
- slides-progress-1.pdf
- slides-progress-2.pdf
- slides-final.pdf               ← add when ready, then set available: true in Downloads.jsx

## Notes
- Files must be in this exact folder: mindsense/public/docs/
- Filenames must match exactly (case-sensitive on Linux servers)
- After `npm run build`, these files will be copied into the /build/docs/ folder automatically
- For the build folder upload to SLIIT hosting, make sure /build/docs/ contains all files
