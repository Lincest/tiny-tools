call npx ng build --prod --base-href "https://tools.roccoshi.top/"
@REM http-server -p 8080 -c-1 dist/tiny-tools
@REM call echo tools.roccoshi.top > ./dist/tiny-tools/CNAME
call npx gh-pages -d dist/tiny-tools/browser
pause
