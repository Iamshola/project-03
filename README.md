![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png) x <img width="106" alt="Screenshot 2019-09-16 at 18 43 20" src="https://user-images.githubusercontent.com/43203736/64980637-20591c80-d8b2-11e9-9ba3-bda6511b8ed2.png">

# Project 3: Date-a-base
###### View Site Here [Heroku](https://datingexp.herokuapp.com/#/)

### Installation

* Clone or download the repo
* Run `yarn init` in the CLI
* Run `mongod`, `yarn seed`, `yarn serve:backend` and `yarn serve:frontend` in the CLI

### Team
- Daniele Nocito -  [GitHub](https://github.com/danielito76)
- Adesola Oni-Shogbonyo - [GitHub](https://github.com/Iamshola)
- Michael G. Laird - [GitHub](https://github.com/MGL1994)
- Francisco Dias - [GitHub](https://github.com/FranciscoFHDias)

## Overview
Date-a-Base is a virtual community where everyone can find and share advices about beautiful and funny locations in London and surroundings, suitable for a dating. The type of locations meet a wide range of preferences which can be filtered depending on the expectations.
Launch on [Heroku](https://datingexp.herokuapp.com/#/). Check out the [GitHub Repo](https://github.com/Iamshola/Project3)

## Project Brief

### The brief requirements were:
* **Build a full-stack application** by making your own backend and your own front-end
* **Use an Express API** to serve your data from a Mongo database
* **Consume your API with a separate front-end** built with React
* **Be a complete product** which most likely means multiple relationships and CRUD functionality for at least a couple of models
* **Implement thoughtful user stories/wireframes** that are significant enough to help you know which features are core MVP and which you can cut
* **Have a visually impressive design**
* **Have automated tests** for _at least_ one RESTful resource on the back-end. Improve your employability by demonstrating a good understanding of testing principals.
* A **working app** hosted on the internet

## Process
​
We spend the first day exploring ideas and throughly planning our project. This included:

#### Wireframes
![image](https://user-images.githubusercontent.com/43203736/63586388-1a189e80-c599-11e9-8e85-1b00d1e72e14.png)

![image](https://user-images.githubusercontent.com/43203736/63586416-2bfa4180-c599-11e9-96f4-07920abf58d6.png)

#### Trello board
![ezgif com-video-to-gif (1)](https://user-images.githubusercontent.com/43203736/64982277-b2aeef80-d8b5-11e9-8934-8f65b83db216.gif)

​
### Languages and Technologies Used:
* HTML5
* CSS3
* SASS
* JavaScript (ES6)
* Git
* GitHub
* React and React extensions
* Webpack
* Bulma
* Node JS
* Babel
* Insomnia
* External API
* Monogdb
* Express
* Heroku
* Google Fonts

### Timeframe:
7 days

### Features

> **All Features:**

  - Register an account
  - View all locations in  a list view and map view
  - Filter through an index of locations based on date number, type of dating exp and budget.
  - Read About, Contact and Terms and Conditions

> **Registered Users can:**

  - Add more workspaces
  - Update entered workspaces
  - Log in and out
  - View other users profiles
  - Make and delete their comments
  - Like and Dislike locations
  - Create a user profile and update their profile

​
## Wins and Blockers
#### Wins

## FileStack
Date-a-base is a location based site and images are a core part of our site. We decided that we would prefer to use FileStack as an image uploader rather than just using image urls. It looks neater and uploading the image to the page was an extra win. This was achieved by re setting the formData state with the uploaded image.


```JavaScript
<ReactFilestack
  mode="transform"
  apikey={fileloaderKey}
  buttonText="Upload Photo"
  buttonClass="button"
  className="upload-image"
  options={options}
  onSuccess={(result) => this.handleUploadImages(result)}
  preload={true}
/>
{this.state.formData.image && <img src={this.state.formData.image} />}
```


### Navbar
As a team, we wanted our navbar to be visually appealing and have common features such as updating navbars as well as routing. In order to update our users avatar, we took advantage of storing information in local storage and then retrieving the image url.

```JavaScript
  <div className="dropdown-menu" id="dropdown-menu" role="menu">
    <div className="dropdown-content">
      <Link to={`/profiles/${Auth.getUser()._id}`} className="dropdown-item">
      My Profile
      </Link>
      <a className="dropdown-item"  onClick={this.logout}>
      Logout
      </a>
    </div>
  </div>
```

``` JavaScript
static getUser() {
  return JSON.parse(localStorage.getItem('user'))
}
```


### Filters
As our site is about helping users make decisions, we wanted to make filters a big component - hence their placement on the landing page. Aside from using React-Select to format the filter dropdowns, the logic involved getting the data from the dropdowns, storing it in state, then passing this over to the locations index page so that it shows a pre-filtered list of locations. Else the user can go straight to the index page.

``` JavaScript
  <div className="field">
    <label className="label has-text-left">Budget</label>
    <Select
      name="cost"
      className="filter"
      options={budgetOptions}
      defaultValue={budgetOptions[0]}
      onChange={selected => this.handleFilter(selected, 'cost')}
      value={budgetOptions.find(option => option.value === this.state.cost)}
    />
  </div>
```

### Users
We wanted to create an index of user profiles, perhaps more useful in future iterations, but for the purpose of searching other like minded users. On this page we didn’t want the logged in user to see their own profile. This involved using a filter function before mapping over the users to display them.
As part of this, in order to find out more information about the user, we created a page asking for user details after the initial register. We did not make the extra questions required so that we could post the initial register, carry over the form details in state and then combine both form details to update the user.
We also wanted the user to be able to edit their own profile, which we allowed using a function to only show the edit button on a user own profile.

### Styling
Based the style off of an old movie theatre style with neon effects. Used text shadow/box shadow to get a neon effect.



### Contact form
We enabled the Contact Form to send email to a our specific gmail address from the backend.


### Testing



## Blocker

### Future Features
* Address lookup function consuming a public API
* Improving User Experience based on user critic

### Course Curriculum
  Details of my training and links to more projects whilst at General Assembly -  12 Week Immersive.

> **Week 1-3 | Module One - Fundamentals**

  - HTML5
  - CSS3
  - Sass
  - JavaScript


> **Week 4**

  Project 1 : Frogger  | [GitHub](https://github.com/Iamshola/project-01) | [GH-Pages](https://iamshola.github.io/project-01/)

>**Week 5 | Module Two - React**

  - React.js
  - Routing
  - RESTFUL API
  - Third-party APIs

>**Week 6**

  Project 2 : CocktailBored  | [GitHub](https://github.com/Iamshola/Project3) | [GH-Pages](https://iamshola.github.io/Project-2/#/)

>**Week 7-8 | Module Three - Node and Express**

  - RESTFUL Routing
  - Node.js
  - Express
  - Token Authentication & Session Authentication
  - API Creation
  - Mocha and Chai

>**Week 9**

  Project 3 : Date-a-base | [GitHub](https://github.com/Iamshola/Project3) | [Herouku](https://datingexp.herokuapp.com/#/)

>**Week 10-11 | Module Four - Python and Django**

  - Python
  - SQL
  - Django
  - Token Authentication

>**Week 12**

  Project 4 : Space | [GitHub](https://github.com/Iamshola/project-04) | [Herouku](https://date-a-base-aos.herokuapp.com/#/)


  ### Contact
  Adesola Oni-Shogbonyo\
  Email : s.oni-shogbonyo@hotmail.co.uk\
  [Portfolio](https://iamshola.github.io/) | [Linkedin](https://www.linkedin.com/in/adesola-oni-shogbonyo/) | [GitHub](https://github.com/Iamshola)
