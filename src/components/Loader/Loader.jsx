import { Dna } from 'react-loader-spinner';
const Loader = () => {
  return (
    <Dna
      visible={true}
      height="250"
      width="250"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
      />
  );
};

export default Loader;
