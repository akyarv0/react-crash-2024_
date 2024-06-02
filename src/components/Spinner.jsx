import { ClipLoader } from "react-spinners"

const Spinner = ({ loading }) => {

const override = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'red',
};

  return (
    <ClipLoader
    color="#36d7b7"
    loading={loading}
    size={50}
    aria-label="Loading Spinner"
    data-testid="loader"
    cssOverride={
        override
    } 
  />
  )
}

export default Spinner