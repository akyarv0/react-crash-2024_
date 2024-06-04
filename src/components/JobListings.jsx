
import RecentJobs from "./RecentJobs";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";

const JobListings = ({isHome=false}) => {



 const [jobs, setJobs] = useState([]);


 const [loading, setLoading] = useState(true);

 useEffect(() => {
   const fetchJobs = async () => {

    const apiUrl = isHome ? '/api/jobs' : '/api/jobs' 


     try {
       const response = await fetch(apiUrl);
       const data = await response.json();
       setJobs(data);
       console.log(data);
     } catch (error) {
       console.error(error);
     } finally {
       setLoading(false);
     }
   };
   fetchJobs();
 }, []);



  return (
    <div>
    <section className='bg-blue-50 px-4 py-10'>
      <div className='container-xl lg:container m-auto'>
        <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
          {isHome ? 'Recent Jobs' : 'Browse Jobs'} {/* anasayfada iken recent jobs jobs page de iken browse jobs */}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {(isHome ? jobs.slice(0, 3) : jobs).map((job) => (
              <RecentJobs key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
    </div>
  );
};

export default JobListings;
