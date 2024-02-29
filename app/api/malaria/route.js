import { connectToDB } from "@/utils/database";

import MalariaCase from "@/models/malaria_data";

export const POST = async (req) => {
    const { patientName, age, gender, location, symptoms, diagnosis, treatment } = await req.json();
    try {
        await connectToDB();
        const newCase = new MalariaCase(
            {
                patientName: patientName, 
                age: age, 
                gender: gender, 
                location: location, 
                symptoms: symptoms, 
                diagnosis: diagnosis, 
                treatment: treatment
            })
        await newCase.save();

        return new Response(JSON.stringify(newCase), {status: 201});

    } catch (error) {
        return new Response("Failed to create new case", {status:500});
    }
} 


export const GET = async (req) => {
    //const { patientName, age, gender, location, symptoms, diagnosis, treatment } = await req.json();
    try {
        await connectToDB();
        const MalariaData = await MalariaCase.find({})
        //aggregation to count positive cases per day
        const positiveCasesPerDay = MalariaData.reduce((acc, curr) => {
            const day = curr.date.toDateString(); // Get the date string
            const existingDay = acc.find(entry => entry.day === day);
            if (existingDay) {
                existingDay.sales += 1; //increment the count for the current day
            } else {
                acc.push({ day, sales: 1 }); //add a new entry for the current day
            }
            return acc;
        }, []);

        console.log(JSON.stringify(positiveCasesPerDay))
        //return the array of objects containing positive cases per day
        return new Response(JSON.stringify(positiveCasesPerDay), { status: 201 });

    } catch (error) {
        return new Response("Failed to create new case", {status:500});
    }
} 