# Preserve CNAME and .nojekyll
Copy-Item docs\CNAME CNAME.tmp -ErrorAction SilentlyContinue
Copy-Item docs\.nojekyll nojekyll.tmp -ErrorAction SilentlyContinue

# Clear docs and move new build
Remove-Item docs\* -Recurse -Force
Move-Item dist\* docs\
Remove-Item dist -Recurse -Force

# Restore preserved files
Move-Item CNAME.tmp docs\CNAME -Force -ErrorAction SilentlyContinue
Move-Item nojekyll.tmp docs\.nojekyll -Force -ErrorAction SilentlyContinue
