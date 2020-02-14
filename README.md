# _DoctorDex_

#### _A 'rolodex' for finding doctors, 2/14/2020_

#### By _**Joseph Wangemann**_

## Description

_This site will take user input for a doctor's name or medical condition and return matching doctors from the Portland area_

## Setup/Installation Requirements

* _Setup assumes the use of Git and NPM_
* _Clone from https://github.com/fractalscape13/doctordex_
* _Run 'npm install'_
* _Get API key from https://developer.betterdoctor.com/_
* _Store API key in .env file in main project directory_
* _Run 'npm start' to view page in live server_
* _Open files in text editor to view code_

* _All dependencies are listed in package.json_
* _API key must be stored in .env file in main directory and formatted as:_
        _API_KEY = 'unique key goes here'_

## Specifications

* _A user can enter a condition or doctor's name_
    * _Example: Input: User types "arthritis"_
    * _Output: A list of doctors that treat arthritis is shown_
* _If user submits a blank input, an error is returned_
    * _Example: Input: User submits blank form_
    * _Output: A warning is shown_
* _A user can click on a doctor's name to see more info_
    * _Example: Input: Click on name_
    * _Output: The doctor's name, address, phone number, etc is shown_
* _A user can click a different doctor and see different info_
    * _Example: Input: Click on new doctor's name_
    * _Output: Previous info hides, new info shows_
* _If API call returns nothing, an error message is shown_
    * _Example: Input: Valid form submission, no results_
    * _Output: User is shown a message showing no results were returned_
* _If API call is unsuccessful, an error message is shown_
    * _Example: Input: Valid form submission, no results_
    * _Output: User is shown a message showing something went wrong and prompting user to try again_


## Known Bugs

_No known bugs..._

## Support and contact details

_Contact me at fractalscape13@gmail.com with any comments or questions_

## Technologies Used

_Javascript, JQuery, Node.js, NPM, Webpack, EsLint, Jest, Babel, CSS/Bootstrap, Dotenv, Uglifyjs, BetterDoctor API_

### License

*MIT License*

Copyright (c) 2020 **_Joseph Wangemann_**
