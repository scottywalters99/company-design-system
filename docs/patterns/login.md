---
title: Login
description: Login pattern guidelines
sidebarDepth: 0
---

# Login

Login is often the first interaction a user has with your product. The login experience is essential in establishing your product’s brand and sets the tone for their overall experience with the product.

[[toc]]

## Anatomy

![login page anatomy](/images/guide/patterns/login/login-page-anatomy.png)

1. **Title:** Located at the top of the login form. **_Login_**, spelled as one word, is a noun or an adjective. For example, the information you use to sign in to your email is your login (noun), and the page where you sign in is the login page (adjective). **Log in** is two words when it functions as a verb. For example, you **log in** with your login information.
2. **Required field:** Email address
3. **Required field:** Password
4. **Button:** Login with email. This button will initiate the standard login flow. Validation errors will be deferred until this button is clicked.
5. **Checkbox:** Keeps the user logged in for 48 hours.
6. **Alternative Login:** This button will initiate the Microsoft sign in flow.
7. **Label:** Company release number

## Behavior <Badge type="warning" text="Needs contribution: NPW-110" vertical="middle" />

### Email & password

### Alternative authentication methods

![Sign in with Microsoft button design](/images/guide/patterns/login/ms-symbollockup_signin_light.svg)

![Microsoft login example](/images/guide/patterns/login/microsoft-login-example.png)

## Design and layout

### Login form design

![login form design](/images/guide/patterns/login/login-form-design.svg)

### Login page design

![login page layout](/images/guide/patterns/login/login-page-design.png)

## Accessibility

Make sure users can tab through the login form and navigate the page using only a keyboard. Use landmark regions to designate the login region and allow screen readers to skip directly to the input fields.

## References

Log in vs. login, [Grammarist.com](https://grammarist.com/spelling/log-in-login/)

Dictionary.com, [Login Definition & Meaning](https://www.dictionary.com/browse/login)

Nielsen Norman Group, [Marking Required Fields in Forms](https://www.nngroup.com/articles/required-fields/)

W3C, [Using AIRA landmarks to identify regions of a page](https://www.w3.org/TR/WCAG20-TECHS/ARIA11.html)

Sign in with Microsoft: [Branding guidelines for applications](https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-add-branding-in-azure-ad-apps)
