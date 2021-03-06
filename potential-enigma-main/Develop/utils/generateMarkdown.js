// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  // write some logic to determine the correct path for rel=
  // const pathToBadge = renderLicenseBadge();

  return `
  [![License: MIT](https://img.shields.io/badge/License-$MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![License: GNU](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
  [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)


  # ${data.title}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution) 
  - [Test Instructions](#test)
  - [License](#license)
  - [Contact](#contact)


  # Description
  ## ${data.description}

  # Installation
  ## ${data.installation}

  # Usage
  ## ${data.usage}

  # Contribution
  ## ${data.contribution}

  # Test Instructions
  ## ${data.test}

  # License
  ## ${data.license}


  # Contact
  ## If you have any questions about the website contact me via email ${data.contact}# Like my work? Check out more on my Github page ${data.github}
`;
}

module.exports = generateMarkdown;
