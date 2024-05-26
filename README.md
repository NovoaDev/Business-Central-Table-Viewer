# Business Central Table Viewer Extension

## Overview

The Business Central Table Viewer Extension is a simple browser extension for Microsoft Edge that allows users to quickly view data from tables in Dynamics 365 Business Central. By entering the table ID, users can open a new tab with the table's information.

This code is inspired/copied from the https://github.com/StefanMaron/OpenPageInspection repository, specifically from this pull request
https://github.com/StefanMaron/OpenPageInspection/pull/1 with some modifications.

Since it is something that I use in my day to day I decided to take it out to a separate extension that contains that unique functionality, I share it in case it is useful to someone else.

## Use case

Many times, I need to see all the information contained in a table. Before, I used to do it by manually modifying the url, adding "table=" followed by the table ID.
Now with this small extension we only have to indicate the table id and click on a button.

## Installation

At the moment the installation is manual :).
1. Clone or download this repository to your local machine.

    ![Install1](/Res/Install1.png)
2. Open Microsoft Edge and navigate to `edge://extensions/`.
   
    ![Install2](/Res/Install2.png)
3. Enable "Developer mode" using the toggle switch at the bottom left of the page.
   
    ![Install3](/Res/Install3.png)
4. Click on the "Load unpacked" button and select the folder containing the extension files.
   
    ![Install4](/Res/Install4.png)
    ![Install5](/Res/Install5.png)

    Result
    
    ![Install6](/Res/Install6.png)
5. Change button visibility for easy access.

    ![Install7](/Res/Install7.png)
    
    Result
    
    ![Install8](/Res/Install8.png)

## Usage

1. Click on the extension icon in the browser toolbar to open the popup interface.
   
    ![Usage1](/Res/Usage1.png)
2. Enter the table ID you want to view in the input field.
3. Click the "View" button.
   
    ![Usage2](/Res/Usage2.png)
4. If the URL is valid, a new tab will open with the table information. If the URL is not valid, an error message will be displayed.
   
    ![Usage3](/Res/Usage3.png)