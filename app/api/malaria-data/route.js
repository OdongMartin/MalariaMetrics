import { connectToDB } from "@/utils/database";

import MalariaCase from "@/models/malaria_data";

export const POST = async (req) => {
    const { patientName, age, gender, location, symptoms, diagnosis, treatment, reportingFacility } = await req.json();
    try {
        await connectToDB();
        const newCase = new MalariaCase(
            {
                reportingFacility: reportingFacility,
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