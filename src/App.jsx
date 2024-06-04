import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layout/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";
// import axios from 'axios';

const App = () => {
  // const addJob = async (newJob) => {
  //     console.log(newJob);
  //     try {
  //         const response = await axios.post("/api/jobs", newJob);
  //         console.log(response);
  //         return response;
  //     } catch (error) {
  //         console.error('An error occurred:', error);
  //         throw error;
  //     }
  // };
  const addJob = async (newJob) => {
    console.log(newJob);
    const response = await fetch("/api/jobs", {
      // Updated endpoint
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    console.log(response);

    return response;
  };

  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      // Updated endpoint
      method: "DELETE",
    });
    return;
  };

  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      // Updated endpoint
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
    console.log(res);
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader} // loader propu ile jobloader i kullandık
        />

        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  ); // Router setup...

  return (
    <>
      <RouterProvider router={router} />
      {/* <Navbar />

      <Hero />

      <HomeCard />

     <JobListings />

     <ViewAllJobs /> */}
    </>
  );
};

export default App;
