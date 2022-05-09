import React from 'react';
import './homepage.styles.css';
import Header from '../../components/header/header.component';
import Main from '../../components/main/main.component';
import Footer from '../../components/footer/footer.component'


class Homepage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Main/>
        <Footer />
      </div>
    )
  }
}

export default Homepage;
