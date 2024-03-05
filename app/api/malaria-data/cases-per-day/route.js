import { connectToDB } from "@/utils/database";

import MalariaCase from "@/models/malaria_data";


export const GET = async (req) => {

    try {
        await connectToDB();
        const MalariaData = await MalariaCase.find({diagnosis: "positive"});
        //aggregation to count positive cases per day
        const positiveCasesPerDay = MalariaData.reduce((acc, curr) => {

            const day = curr.reportedAt.toLocaleDateString(undefined, {day: "numeric", month: "long", year:"numeric"}); //get the case date string so that you can add up the cases per day

            const existingDay = acc.find(entry => entry.day === day);

            if (existingDay) {
                existingDay.cases += 1; //increment the cases for the current day
            } else {
                acc.push({ day, cases: 1 }); //add a new entry for the current day
            }

            return acc;
        }, []);

        //console.log("yoooo" + JSON.stringify(positiveCasesPerDay))

        //return the array of objects containing positive cases per day
        return new Response(JSON.stringify(positiveCasesPerDay), { status: 201 });

    } catch (error) {
        return new Response("Failed to create new case", {status:500});
    }
} 