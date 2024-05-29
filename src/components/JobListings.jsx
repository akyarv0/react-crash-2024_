import jobs from "../jobs.json";

const JobListing = () => {
  console.log(jobs);
  
  return (
    <div>
      {" "}
      <section className='bg-blue-50 px-4 py-10'>
      <div className='container-xl lg:container m-auto'>
        <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
        Browse Jobs
        </h2>

       
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {jobs.map((job) => (
              <div
                key={job.id}
                className='bg-white p-6 rounded-lg shadow-md'
              >
                <h3 className='text-xl font-bold mb-2'>{job.title}</h3>
                <p className='text-gray-700'>{job.description}</p>

              </div>
            ))}
      
          </div>

      </div>
    </section>
    </div>
  );
};

export default JobListing;
