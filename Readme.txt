1. When I started creating new frame work the first problme I face on executing the 
spec file under src/test - NO test found , it is because, in playwright.config.ts file
i have  testDir as => ' testDir: './tests''
i changed the testDir path => testDir: './src/test'

2. After changing the 'testDir' path i got an issue with browers
"Error: browserContext.newPage: Executable doesn't exist at /Users/rajasekhar/Library/Caches/ms-playw"
it is because 
macOS does not allow writing to system locations easily,so at the time of installation browser are installed in 
'~/Library/Caches/ms-playwright/' if you clear chache browsers will get delete

so to solve this you need to reinstall everytime on clearing the cache
or 
You can force Playwright to store browsers inside your project instead of cache.
Add this to your shell (.zshrc or .bashrc):
export PLAYWRIGHT_BROWSERS_PATH=0
then re install browsers 
npx playwright install

How to add .zshrc?
echo $SHELL - check which sheel your are using ; out put must be /bin/zsh
open ~/.zshrc - it open your sheel if your file not exist 'touch ~/.zshrc' to create your sheel and open 
export PLAYWRIGHT_BROWSERS_PATH=0 - add this line and save the text file and close 
source ~/.zshrc - reload your sheel configuration 
echo $PLAYWRIGHT_BROWSERS_PATH - verify it worked you should see ' 0 '


