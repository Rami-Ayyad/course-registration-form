# Analysis Chart App :
#### Basic Usage :
- A registratoin form that allows the student to choose a desired course after filling the form with correct data either manually or by Google / Facebook acount ,
The from sends validation code via SMS to student's phone for authentication.
#### installation :
- Start by installing all the dependenties by running `npm install`
- Launching the app on a local server by running `npm start`

## Technologies and Libraries :
- HTML5,   CSS3,  JavaScript
- ReactJS, Context API,  React-Router v6,
- Formik, Yup, React-icons, Firebase

## Live Demo :
## https://courses-registration-form.netlify.app/

## Features :
- Ability to fill form by Google / Facebook accuonts.
- Validation on all fields.
- informative plcadeholders that guide users to the correct format of inputs.
- Error messages to inform user incase if wrong or invalid data input.
- Loading message to inform user while sending/retrieving data from data base.
- Submit buttons are disabled during loading phases.
- User isn't added to database untill he enters the correct code sent via SMS to his phone.
- User have the option to checkout other students courses after registration is complete (the purpose to showing data from data base).

 ## Notes :
- Firebase has a limit for requests per minute, after that it throws an error, if such case happened please wait an hour or so and try again.
- The context API was used to manage the application state.
- A combination of 'Formik' and 'Yup' was used to handle from input and validation.
- UI is not fully responsive as it wasn't my main focus.
- 'Prettier' was used for code formating.
- Background image is a freestock image form 'Google Images'.
- Design and colors of applicatoin wasn't copied (improvised by me).
- When fill from by Google/Facebook, not all field are filled with retrieved data and some fields are left empty for user to manually fill.


