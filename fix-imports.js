const { execSync } = require('child_process')
const fs = require('fs')

const filesToCheck = [
  './src/components/List.tsx',
  './src/components/PageIntro.tsx',
  './src/components/PageLinks.tsx',
  './src/components/SectionIntro.tsx',
  './src/components/SocialMedia.tsx',
  './src/components/StatList.tsx',
  './src/components/TagList.tsx',
  './src/components/Testimonial.tsx',
]

filesToCheck.forEach((fileName) => {
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading ${fileName}: ${err}`)
      return
    }

    if (!data.includes('import React from "react";')) {
      const newData = `import React from "react";\n${data}`
      fs.writeFile(fileName, newData, (err) => {
        if (err) {
          console.error(`Error writing to ${fileName}: ${err}`)
        } else {
          console.log(`Added import React to ${fileName}`)
        }
      })
    }
  })
})
