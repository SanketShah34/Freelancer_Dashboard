/**
 * Author: Sanket Shah.
 * Created On: 2021-07-26
 * Services for Calendar Event.
 */

 import axios from "axios";

 export class calendarServices{
 
    /**
    * Method to hit the API of getting list of calendar events
    */
    async list(){
        const result = await axios.get("/api/calendar");
        return result.data;
    };

    /**
    * Method to hit the API of adding calendar event in a list
    */
     async add(data){
        const result = await axios.post("/api/calendar/add",data);
        return result.data;
     };
 }
 
 export default new calendarServices()