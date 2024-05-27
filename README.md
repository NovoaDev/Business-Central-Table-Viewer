# Business Central Table Viewer Extension

## Overview

After a week of "disconnecting" on the Camino de Santiago, without a computer nearby and catching snippets of the Build conference, I was really eager to write some code—anything at all, even if it didn't make much sense.

So, as soon as I got home, to satisfy this urge and sleep peacefully, I decided to work for a while on a small browser extension for Microsoft Edge. This extension allows users to quickly view data from tables in Dynamics 365 Business Central. By entering the table ID, users can open a new tab with the corresponding information.

A large part of the code is inspired/copied from another repository: https://github.com/StefanMaron/OpenPageInspection. Although at the time I submitted a pull request to see if the functionality could be added to the tool (https://github.com/StefanMaron/OpenPageInspection/pull/1), after using it almost daily, I wanted to make some changes but hadn't found the time. So now I’m killing two birds with one stone: I’m creating this functionality as a standalone extension, applying some modifications I wanted to make, and sleeping peacefully. :)

I’m sharing the link here in case it can be useful to someone else.

PS: At the moment, it only has manual installation. :3

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