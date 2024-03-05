const TopCards = () => {
    // const [malariaData, setmalariaData] = useState([]);
  
    // useEffect(() => {
    //   const fetchMalariaData = async () => {
    //     try {
    //       const response = await fetch('api/malaria');
    //       if (!response.ok) {
    //         throw new Error('Failed to fetch malaria data');
    //       }
    //       const malariaData = await response.json();
    //       setmalariaData(malariaData);
  
    //     } catch (error) {
    //       console.error('Error fetching malaria data:', error.message);
    //     }
    //   };
    
    //   fetchMalariaData();
    // }, []);


    return (
      <div className='grid md:grid-cols-7 gap-2 md:gap-4 p-2 md:p-4 text-xs md:text-sm lg:text-base'>
          <div className='md:col-span-2 col-span-1 bg-white flex justify-between h-20 md:h-32 w-full border p-4 rounded-lg'>
              <div className='flex flex-col w-full pb-4'>
                  <p className='text-2xl font-bold'>256</p>
                  <p className='text-gray-600'>Active Cases</p>
              </div>
              <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg  md:hidden lg:flex'>
                  <span className='text-green-700 text-lg'>+6%</span>
              </p>
          </div>
  
          <div className='md:col-span-2 col-span-1 bg-white flex justify-between h-20 md:h-32 w-full border p-4 rounded-lg'>
              <div className='flex flex-col w-full pb-4'>
                  <p className='text-2xl font-bold'>50</p>
                  <p className='text-gray-600'>Recovered</p>
              </div>
              <p className='bg-red-200 flex justify-center items-center p-2 rounded-lg md:hidden lg:flex'>
                  <span className='text-red-700 text-lg'>-18%</span>
              </p>
          </div>
  
          <div className='md:col-span-2 col-span-1 bg-white flex justify-between h-20 md:h-32 w-full border p-4 rounded-lg'>
              <div className='flex flex-col w-full pb-4'>
                  <p className='text-2xl font-bold'>7</p>
                  <p className='text-gray-600'>Cases Today</p>
              </div>
              <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg md:hidden lg:flex'>
                  <span className='text-green-700 text-lg'>+4%</span>
              </p>
          </div>
          <div className='bg-white flex justify-between h-20 md:h-32 h- w-full border p-4 rounded-lg'>
              <div className='flex flex-col w-full pb-4'>
                  <p className='text-2xl font-bold'>1</p>
                  <p className='text-gray-600'>Deaths Today</p>
              </div>
              <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg md:hidden lg:flex'>
                  <span className='text-green-700 text-lg'>-30%</span>
              </p>
          </div>
      </div>
    )
  }
  
  export default TopCards