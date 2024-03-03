import Image from 'next/image'

const Information = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Malaria Information</h1>

            {/* Overview of Malaria */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Overview of Malaria</h2>
                <div>
                    <p>Malaria is a life-threatening disease caused by parasites transmitted through the bites of infected female Anopheles mosquitoes.</p>
                    
                    <div className='m-2'>
                        <Image src='/images/mosquito-bite.jpg' width={200} height={200} alt=" " className='rounded-lg'/>
                    </div>
                </div>
                
            </div>

            {/* Global Burden */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Global Burden</h2>
                <p>Approximately 229 million malaria cases occurred worldwide in 2019, leading to an estimated 409,000 deaths. Malaria remains a significant public health threat, particularly in sub-Saharan Africa, where 94% of malaria cases and deaths occur.</p>
            </div>

            {/* Morbidity and Mortality */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Morbidity and Mortality</h2>
                <p>Children under 5 years of age and pregnant women are disproportionately affected by malaria, accounting for the majority of malaria-related deaths. In 2019, an estimated 67% of all malaria deaths worldwide were among children under 5.</p>
            </div>

            {/* Economic Impact */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Economic Impact</h2>
                <p>Malaria imposes a substantial economic burden on affected countries, costing an estimated $12 billion annually in direct healthcare expenditures and lost productivity. The disease perpetuates poverty and hampers socio-economic development in endemic regions.</p>
            </div>

            {/* Affected Populations */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Affected Populations</h2>
                <p>Vulnerable populations, including children, pregnant women, and individuals with limited access to healthcare, are at higher risk of severe malaria and adverse outcomes.</p>
            </div>

            {/* Transmission Dynamics */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Transmission Dynamics</h2>
                <p>Malaria transmission is influenced by environmental factors such as temperature, humidity, and rainfall, with peak transmission occurring during the rainy season in many endemic regions. Mosquito vector control and environmental management are crucial strategies for reducing malaria transmission.</p>
            </div>

            {/* Risk Factors */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Risk Factors</h2>
                <p>Outdoor activities, inadequate housing, and lack of access to insecticide-treated bed nets contribute to increased malaria risk in endemic areas. Climate change may exacerbate malaria transmission by expanding the geographic range of malaria vectors.</p>
            </div>

            {/* Preventive Measures */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Preventive Measures</h2>
                <p>Insecticide-treated bed nets (ITNs), indoor residual spraying (IRS), and chemoprophylaxis with antimalarial medications are effective preventive interventions. Community engagement and education campaigns play a vital role in promoting malaria prevention behaviors.</p>
            </div>

            {/* Diagnostic Tools */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Diagnostic Tools</h2>
                <p>Rapid diagnostic tests (RDTs) and microscopy are commonly used diagnostic tools for detecting malaria parasites in blood samples. Access to accurate and timely diagnosis is essential for appropriate treatment and disease management.</p>
            </div>

            {/* Treatment Options */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Treatment Options</h2>
                <p>Artemisinin-based combination therapies (ACTs) are the recommended first-line treatment for uncomplicated malaria, while severe cases require parenteral therapy with intravenous or intramuscular antimalarials. Drug resistance poses a significant threat to malaria control efforts and requires ongoing monitoring and surveillance.</p>
            </div>

            {/* Progress and Challenges */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Progress and Challenges</h2>
                <p>Significant progress has been made in reducing malaria incidence and mortality over the past two decades, with a 29% decrease in malaria cases and a 60% decline in malaria mortality rates since 2000. However, challenges such as drug resistance, insecticide resistance, and funding gaps continue to impede efforts to eliminate malaria globally.</p>
            </div>

            {/* Global Initiatives and Partnerships */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Global Initiatives and Partnerships</h2>
                <p>The World Health Organization (WHO), along with partners such as the Roll Back Malaria (RBM) partnership and the Global Fund to Fight AIDS, Tuberculosis and Malaria, leads global efforts to control and eliminate malaria. Collaborative initiatives such as the United Nations Sustainable Development Goals (SDGs) aim to accelerate progress towards malaria-related targets and improve health outcomes worldwide.</p>
            </div>
        </div>
    );
}

export default Information