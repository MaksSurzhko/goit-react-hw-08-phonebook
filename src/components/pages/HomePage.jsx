import backImg from '../img/laptop-home-office.webp'

const HomePage = () => {
  return (
     <div style={{
      backgroundImage: `url(${backImg})`,
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      height: '100vh', 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
  <h1 style={{
    color: '#2E2F42',
    display: 'flex',
    justifyContent: 'center',
        marginTop: '40px',
      marginRight:'70px'
    }}>Phonebook.Welcome!</h1>
    </div>
    )
};

export default HomePage;