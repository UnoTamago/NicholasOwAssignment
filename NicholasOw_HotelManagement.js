module.exports = {
    //rooms
    rooms: [
        {
            roomID: 1,
            roomNum: "1",
            status: "Avilable",
            guestID: "",
        },
        {
            roomID: 2,
            roomNum: "2",
            status: "Avilable",
            guestID: "",
        },
        {
            roomID: 3,
            roomNum: "3",
            status: "Avilable",
            guestID: "",
        },
        {
            roomID: 4,
            roomNum: "4",
            status: "Avilable",
            guestID: "",
        }

    ],
    //staff
    staff:[],
    //guest
    guest:[],


    // Register the guest 
    registerGuest(guestName, guestID) {
        this.guest.push({guestName:guestName, guestID: guestID});
        console.log(guestName+" " + "is registered");
    },

    // Assign the guest
    assignGuest(AssignguestID, AssignroomID) {
        //Verify guest ID
        const guest = this.guest.find(guestguest => guestguest.guestID===AssignguestID);
        if (!guest){
            console.log("Guest ID does not exist");
            return;
        }
        //Verify room ID
        const room = this.rooms.find(roomroom => roomroom.roomID===AssignroomID);
        if (!room){
            console.log("room ID does not exist");
            return;
        }
        if (room.status === "Occupied") {
            console.log("This room is occupied!");
            return;
        }
        //Assign guest to room
        room.guestID = guest.guestID;
        room.status = "Occupied";
        console.log(`Guest ${guest.guestID} has been assigned to room ${room.roomID}. Room ${room.roomID} status has been changed to ${room.status}`);
    },

    //guest checkout
    checkoutGuest(AssignguestID, AssignroomID) {
        // Verify guest ID
        const guest = this.guest.find(guestguest => guestguest.guestID === AssignguestID);
        if (!guest) {
            console.log("Guest ID does not exist");
            return;
        }
        // Verify room ID
        const room = this.rooms.find(roomroom => roomroom.roomID === AssignroomID);
        if (!room) {
            console.log("Room ID does not exist");
            return;
        }
        if (room.guestID !== AssignguestID) {
            console.log("This guest is not assigned to the specified room.");
            return;
        }
    
        // checkout guest from the room
        room.guestID = "";
        room.status = "Available";
        console.log(`Guest ${AssignguestID} has been checked out from room ${AssignroomID}. Room ${room.roomID} status has been changed to ${room.status}`);
    },

    //add staff
    addStaff(staffName, staffID, staffNum){
        this.staff.push({staffName:staffName, staffID:staffID, staffNum:staffNum});
        console.log("staff has been added!!!!!");
    },
    
    //delete staff using ID
    deleteStaff(staffID) {
        //for the records in staff arry
        for (let staffs in this.staff) {
            //checks for the staff id record and then delets them
            if (this.staff[staffs].staffID === staffID) {
                delete this.staff[staffs];
                console.log(`staff has been deleted!`);
                return;
            }
        }
        console.log("Staff ID does not exist.");
    }
    
    
}