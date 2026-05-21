const fs = require('fs');
const path = require('path');

console.log('🚀 Running NovaSci Lab Automated Repository Validation...\n');

let failed = false;

function checkFile(filePath, label) {
  if (!fs.existsSync(filePath)) {
    console.error(`❌ [Missing File] ${label} is missing at: ${filePath}`);
    failed = true;
    return null;
  }
  console.log(`✅ [File Found] ${label} successfully verified.`);
  return fs.readFileSync(filePath, 'utf8');
}

// 1. Verify files exist
const htmlContent = checkFile(path.join(__dirname, '../lat (4).html'), 'Main Application (lat (4).html)');
checkFile(path.join(__dirname, '../index.html'), 'Root Entry redirect (index.html)');
checkFile(path.join(__dirname, '../README.md'), 'Repository Documentation (README.md)');
const gitignoreContent = checkFile(path.join(__dirname, '../.gitignore'), 'Git Ignore Rules (.gitignore)');

// 2. Scan for hardcoded secret keys (Security Compliance check)
if (htmlContent) {
  const secretPattern = /gsk_[a-zA-Z0-9]{40,}/;
  if (secretPattern.test(htmlContent)) {
    console.error('❌ [Security Risk] Found active hardcoded Groq API key (gsk_...) inside the main HTML file!');
    failed = true;
  } else {
    console.log('✅ [Security Check] No hardcoded credentials detected in the application code.');
  }

  // 3. Verify screen structural containers exist
  const requiredIds = ['login', 'landing', 'dashboard', 'lab', 'quiz', 'results', 'view-virtual-lab', 'view-ar-vr'];
  requiredIds.forEach(id => {
    if (!htmlContent.includes(`id="${id}"`) && !htmlContent.includes(`id='${id}'`)) {
      console.error(`❌ [DOM Check] Required viewport container ID "${id}" was not found!`);
      failed = true;
    }
  });
  console.log('✅ [DOM Check] All core layout views and screens are structurally valid.');
}

// 4. Ensure config.js is properly ignored
if (gitignoreContent) {
  if (!gitignoreContent.includes('config.js')) {
    console.error('❌ [.gitignore Check] config.js is not ignored! Pushing it to GitHub could expose API secrets.');
    failed = true;
  } else {
    console.log('✅ [.gitignore Check] API config rules are correctly ignored.');
  }
}

if (failed) {
  console.error('\n💥 Automated CI Build Validation Failed! Check the errors above.');
  process.exit(1);
} else {
  console.log('\n🌟 All automated CI/CD checks passed successfully! Ready for production deployment.');
  process.exit(0);
}
