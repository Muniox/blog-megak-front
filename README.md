# Blog JS Dose - Your Daily Dose of JS (blog-megak-front)

![image](https://user-images.githubusercontent.com/81775473/230874424-73b87184-489a-4666-81c6-84507945bf46.png)


## Table of content

- [General Info](https://github.com/Muniox/blog-megak-front/blob/develop/README.md#general-info)
- [Demo](https://github.com/Muniox/blog-megak-front/blob/develop/README.md#demo)
- [Technologies/frameworks/libraries used on front-end side of project](https://github.com/Muniox/blog-megak-front/blob/develop/README.md#technologiesframeworkslibraries-used-on-front-end-side-of-project)
- [Figma Layout](https://github.com/Muniox/blog-megak-front/blob/develop/README.md#layout)
- [What has been accomplished on the front-end](https://github.com/Muniox/blog-megak-front/blob/develop/README.md#what-has-been-accomplished-on-the-front-end)
- [What has not been accomplished on the front-end](https://github.com/Muniox/blog-megak-front/blob/develop/README.md#what-has-not-been-accomplished-on-the-front-end)
- [How to run client](https://github.com/Muniox/blog-megak-front/blob/develop/README.md#how-to-run-client)
- [Link to back-end](https://github.com/Muniox/blog-megak-back)

## General info

I created a blog on JavaScript as a project for completion for the following reasons:

- Showcase Skills: Creating a blog about JavaScript allows me to demonstrate my skills and knowledge in JavaScript programming, web development, and related technologies.

- Personal Interest: JavaScript is a popular and widely used programming language for web development, and I have a keen interest in learning and exploring its various aspects.

- Relevance to Course/Subject: The project is relevant to the course or subject for which I am seeking completion, as it aligns with the curriculum or learning objectives related to JavaScript or web development.

- Practical Application: Creating a blog on JavaScript provides a practical application of the concepts and techniques learned during the course, allowing me to apply theoretical knowledge to real-world scenarios.

- Creative Expression: Designing and developing a blog allows me to exercise my creativity and express my ideas, thoughts, and coding skills in a practical and visually appealing manner.

Overall, creating a JavaScript-focused blog as a project for completion allows me to demonstrate my skills, apply theoretical knowledge, and express my creativity, while aligning with the course requirements.

## Demo


**Here is a working live demo: https://blog.truemuniox.usermd.net/**


## Technologies/frameworks/libraries used on front-end side of project

<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" width="36" height="36" alt="TypeScript" /></a> TypeScript

<a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" /></a> React 

<a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss.svg" width="36" height="36" alt="Tailwind" /></a> Tailwind

## Layout

Here is the layout I created in Figma, which has undergone slight modifications during the development of the project.

![image](https://user-images.githubusercontent.com/81775473/230794296-b6e12c09-0525-4d79-a4ba-3a73669d3156.png)

## What has been accomplished on the front-end

- [x] Authentication (React Context)
- [x] Authorization (JWT TOKEN)
- [x] Routing
- [x] Responsive web design (mobile first)
- [x] Fetch posts data and show on Home page
- [x] Filter posts by category on Home page
- [x] Sanitize output from backend on front-end using "dompurify" package
- [x] Integration with simple rich text editor
- [x] User can create post
- [x] User can edit his own post
- [x] User can delete his own post
- [x] Implementation of pages using React and Tailwind (Home, Login, Register, Single, Write)

## What has not been accomplished on the front-end

- [ ] Errors only apper in console (modal should be implemented to show errors)
- [ ] Serch input that should find posts by name not work
- [ ] User can't change avatar (default avatar for all users)
- [ ] There is no implementation of a user interface to edit their own data.
- [ ] There is no implementation of a admin interface to CRUD user data.
- [ ] Implementation of missing pages using React and Tailwind (About, Contact)
- [ ] No loaders
- [ ] No costom 404 page for routing

## How to run client

Clone repository:

```
https://github.com/Muniox/blog-megak-front
```

In order to run the API locally on your PC, the .env.development file should contain the following variable:

```
VITE_PATH='http://localhost:3000/'
```

Then run commands in console:

```
npm i
```

```
npm run dev
```

## Back-end

Here is a back-end repository: https://github.com/Muniox/blog-megak-back








