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

        //console.log("malaria Data:" + MalariaData);

        return new Response(JSON.stringify(MalariaData), {status: 201});

    } catch (error) {
        return new Response("Failed to create new case", {status:500});
    }
} 