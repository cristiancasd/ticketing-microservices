import axios from 'axios';

const LandingPage = ({ currentUser }) => {
  // console.log(currentUser);
  // axios.get('/api/users/currentuser');
  console.log('currentUser', currentUser);

  return <h1>Landing Page</h1>;
}; 

LandingPage.getInitialProps = async ({ req }) => {
  if (typeof window === 'undefined') {
    // we are on the server!
    // requests should be made to http://ingress-nginx.ingress-nginx...laksdjfk
    try{
      const { data } = await axios.get(
        'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser',
        {
          headers: req.headers,
        }
      );
      console.log('data in server', data)
      return data;

    }catch(error){
      console.log('error in server',error)
    }
    
  } else {
    // we are on the browser!
    // requests can be made with a base url of ''
    try{
      const { data } = await axios.get('/api/users/currentuser');
      console.log('data in browser', data)
      return data;
    }catch(error){
      console.log('error in browser',error)
    }
    
  }
  return {};
};

export default LandingPage;
