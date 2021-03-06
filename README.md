# ny-art-beat-app
an app built in react using the NY Art Beat API
http://www.nyartbeat.com/resources/doc/api

Live preview:
http://ny-art-beat-react.surge.sh/

## Objective
The app is intended to view ongoing and upcoming events listed in the NY Art Beat API. The events should be searchable and sortable by a varitey of criteria such as free or paid, city burough and popularity. The events should be able to be veiwed in detail displaying all the information made available by the API.

## Problems

The Api delivers its data in an XML format. I have found a library which allows for the easy conversion of xml to javascript objects, however the data does seem to be rather clunky to use regardless. The biggest problems I forsee come from sorting this data, however much of that difficultly can be handled post mvp as the API has well defined endpoints for a variety of search methods.
library:
https://www.npmjs.com/package/xml-js

## MVP
- search form can trigger a varitey of api end points to generate lists of events displayed in main by EventList
- Eventlist lists the events
    * expandable with basic info
    * link to event detail
- EventDetail displays the events detailed information
- good style
- clear layout using react-flexbox-grid: http://roylee0704.github.io/react-flexbox-grid/

## post MVP
- sort returned events
- add location search, may need to hit another api to integrate this well

## Code snippet

## User stories
- user goes to home page
- user browses event list
- user navigates to an event detail page
- user can bookmark detail page, page will work even when accessed via url

