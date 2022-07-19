import { Component } from 'react';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <html>
        <Header />
        <Content />
        <Footer />
      </html>
    );
  }
}

export default App;
