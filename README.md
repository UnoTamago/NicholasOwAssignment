# Assignment 1 - Hotel Management Flow
My assignment is a Node.js module that is used for Hotel Management. Staffs using the flow are able to 
use 5 different functions that are essential for Hotel management.
These 5 functions are

-Registering Guests
This function allows the staff to register a new Guest ID

-Assigning Guests to rooms
This function allows the staff to assign the guest to a room, by using this function it
also automatically changes the room's status to "occupied"

-Check out Guests from rooms
This function allows the staff to check the guest out from a hotel room. Once a guest has been checked out, it automatically changes the room's status to "available"

-Add staff
This function allows staff to create a new staff account for newly joined staff members.

-Remove staff
This function allows the staff to remove a staff user through their ID when a staff leaves the job.

User Manual/Guide/Examples:

app.js :

const hotelhotel = require('./NicholasOw_HotelManagement.js'); 

-Registering Guests:
hotelhotel.registerGuest("john", 12);

John is the name of the guest being added and it will be a string. 12 is the ID given to him.

-Assigning Guests to room:
hotelhotel.assignGuest(12, 2);

Assignment of guests uses the guest's ID and the assigned room's ID.

-checkout for Guests:
hotelhotel.checkoutGuest(12, 2);

Checkout of guests uses uses the guest's ID and the assigned room's ID that the guest is checking out from.

-Add staff
hotelhotel.addStaff("jacob", 13, 99999999);

Jacob is a String and the name of the newly added staff array. 13 is the assigned ID for jacob and 99999999 is jacob's number.

-Remove Staff
hotelhotel.deleteStaff(13);

Deleting staff is through the staff's id, and this would delete jacob's array.

Expected results from the above examples:

john is registered

Guest 12 has been assigned to room 2. Room 2 status has been changed to Occupied

Guest 12 has been checked out from room 2. Room 2 status has been changed to Available

staff has been added!!!!!

staff has been deleted!


# References
- ChatGPT to assist with debugging and error handling.
- lab sheet 2