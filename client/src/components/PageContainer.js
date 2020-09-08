import React, { Component } from "react";
import WelcomePage from "./pages/WelcomePage";
import Task from "./pages/Task";
import Survey from "./pages/Survey";

class PageContainer extends Component {
    
    state = {
      currentPage: "WelcomePage"
    };
  
    handlePageChange = page => {
      this.setState({ currentPage: page });
    };

    renderPage = () => {
        if (this.state.currentPage === "WelcomePage") {
          return <WelcomePage />;
        } else if (this.state.currentPage === "Task") {
          return <Task />;
        } else {
          return <Survey />;
        }
      };

      render() {
        return (
          <div>
            currentPage={this.state.currentPage}
            handlePageChange={this.handlePageChange}
            {this.renderPage()}
          </div>
        );
      }

}

export default PageContainer;