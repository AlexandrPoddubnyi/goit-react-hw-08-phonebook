const styles = {
  container: {
    paddingLeft: 64,
    paddingRight: 64,
    marginTop: 150,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 36,
    textAlign: 'center',
    color: '#e2dcd3',
  },
};


const Home = () => {
  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Welcome tou our phone contacts aplication. Please register your account or login to continue.</h3>
    </div>
  )
}

export default Home;