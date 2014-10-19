# Donation Party!: A flexible framework for implementing event donations

Having people donate their birthday party, wedding registry, or other gifting event to your organization can be a powerful fundraising tool. By having participants ask everyone attending their event to donate to your organization instead of giving a gift, they can raise hundreds or thousands of dollars in one go. Organizations like [charity: water](https://www.charitywater.org/birthdays/) and [NothingButNets](http://nothingbutnets.net/donateyourbirthday/) report average yields in the range of $400-$800 per birthday, with large events or parties generating as much as tens of thousands of dollars.

Implementing a feature on your organization's site to allow for this can be a challenge, however. Without significant development resources, your only option thus far has been to register with a centralized site like [Charity Birthday](http://www.charitybirthday.com/) or [Crowdrise](https://www.crowdrise.com/), which will lead users away from your site, maybe never to return. If you'd prefer a solution that integrates with your existing site, you can use this framework to make building out an event donation portal quick and easy. 

## Getting started

The included components fit into two major categories: the event page creation form, and the resulting event page that your users can share with people.

Use the form widgets to put together your event page creation form, change the form submission parameters as appropriate for your database, redirect users to the event page, and populate the event page with the persisted event information. This might sound complex, but don't worry—it's mostly cut-and-paste. We'll show you where to change things to fit your site.

## Using the widgets

Take a look at **html/widget\_scaffold.html.** There's some code to add to your \<head\> tag and to the bottom of your \<body\>. Use this code on any page where you're using the form widgets. Also, make sure to put the contents of **js** in your script directory.

The widgets make use of a global JS object called **EventDonor** which you may need to make use of, so just keep that in mind.

## Widgets

There are three widgets you can use to build your event page creation form:

### Project selection
**html/donate_form.html**

This widget is an optional component you can use if your site has different causes your users can donate to (as opposed to a single donation stream). It has a button to use if people want to donate to your organization in general, and a filterable list of the different causes available.

To implement this, open **js/projects.json**. Set EventDonor.projectsJson to get a JSON-derived array of causes from your database. Then, open **js/project_selection.js**. You may notice that the code here expects the JS objects generated from your cause table to have four properties: **id**, **logo**, **title**, and **description**. **id** is the unique identifier for the cause in the database, **logo** is a path to the image associated with the cause, **title** is the name of the cause, and **description** is a description of the cause. Feel free to change these as necessary to fit the columns in your table.

## Naming the event
**html/donate\_title\_subtitle.html**

This is a simple form with two text fields for titling and describing the event—i.e. with the title "Kelly's 34th Birthday!".

When the user submits the form, two params will be included in the POST called **title** and **description** containing the values of these fields.

## Notifying friends
**html/donate\_tell\_friends.html**

This is another simple form where your user can supply a list of emails and a message to send out to people they want to notify about their event.

We haven't yet implemented a mailer; if you have a pre-existing one, this component should be straightforward to use.

# Opportunity hack

###Scope:

To facilitate event donation based fundraising by prodividing a drop in widget to encourage friends and well wishers to donate to causes.

###Productivity gains:

The drop in solution cuts down web development time, making it easier for non-profits to focus on their helping people instead of development.

###Innovation:

We are not aware of there existing a current solution for a drop in solution for event based donation. 

The widgets are built using responsive html5 templates and are independent of the backend technologies used.

###Accessible by the Target User Base:

In the particular use case of connecther, the website had the functionality to raise money but not a way for users to donate events. Since users are already familar with donating money, donating events is another natural extension, so it is familiar to the userbase.

###Implementable:
The donating events funtionality is fully operational. We reached out to the developers of connecther during the hackathon and we are hopeful that our changes will make it to the live site.

###Open Source Software: 

####Tech stack
JavaScript, JQuery
Twitter Bootstrap
Zend Framework
LAMP
PayPal merchant sdk
