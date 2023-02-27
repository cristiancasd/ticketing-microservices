import buildClient from '../api/build-client';

const LandingPage = ({ currentUser }) => {
  return currentUser 
  ? (<h1>You are signed in Digital Ocean</h1>) 
  : (<h1>You are NOT signed in  Digital Ocean</h1>);
}; 


LandingPage.getInitialProps = async (context) => {
  console.log('LANDING PAGE  Digital Ocean! 2');
  const client = buildClient(context);
  const { data } = await client.get('/api/users/currentuser');
  return data;
};

export default LandingPage;
