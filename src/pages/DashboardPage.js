import React from "react";
import adminLayout from "../hoc/adminLayout";
import Posts from "../components/posts";
import "../assets/css/dashboard.css";
import data from "../components/posts/data.json";
import _ from "lodash";
class DashboardPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const linkedInLength = _.countBy(
      data.summary.flatMap((user) => user.linkedin.top_posts)
    );
    const twitterLength = _.countBy(
      data.summary.flatMap((user) => user.twitter.top_posts)
    );
    console.log(
      linkedInLength["[object Object]"] + twitterLength["[object Object]"]
    );
    return (
      <div className="dashboard-main">
        <div className="row ">
          <div className="col-xl-3 col-sm-6 mb-3">
            <div className="card text-white bg-primary o-hidden h-100">
              <div className="card-body">
                <div className="card-body-icon">
                  <i
                    class="fa fa-twitter"
                    aria-hidden="true"
                    style={{
                      color: "#fff",
                    }}
                  ></i>
                </div>
                <div className="mr-5">
                  {twitterLength["[object Object]"]} Twitter Posts
                </div>
              </div>
              <a className="card-footer text-white clearfix small z-1" href="#">
                <span className="float-left">View Details</span>
                <span className="float-right">
                  <i className="fa fa-angle-right"></i>
                </span>
              </a>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-3">
            <div className="card text-white bg-warning o-hidden h-100">
              <div className="card-body">
                <div className="card-body-icon">
                  <i
                    class="fa fa-linkedin-square"
                    aria-hidden="true"
                    style={{
                      color: "#fff",
                    }}
                  ></i>
                </div>
                <div className="mr-5">
                  {linkedInLength["[object Object]"]} Linkedin Posts
                </div>
              </div>
              <a className="card-footer text-white clearfix small z-1" href="#">
                <span className="float-left">View Details</span>
                <span className="float-right">
                  <i className="fa fa-angle-right"></i>
                </span>
              </a>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-3">
            <div className="card text-white bg-success o-hidden h-100">
              <div className="card-body">
                <div className="card-body-icon">
                  <i className="fa fa-file-o"></i>
                </div>
                <div className="mr-5">
                  {linkedInLength["[object Object]"] +
                    twitterLength["[object Object]"]}{" "}
                  Total Posts
                </div>
              </div>
              <a className="card-footer text-white clearfix small z-1" href="#">
                <span className="float-left">View Details</span>
                <span className="float-right">
                  <i className="fa fa-angle-right"></i>
                </span>
              </a>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-3">
            <div className="card text-white bg-danger o-hidden h-100">
              <div className="card-body">
                <div className="card-body-icon">
                  <i className="fa fa-fw fa-support"></i>
                </div>
                <div className="mr-5">13 New Tickets!</div>
              </div>
              <a className="card-footer text-white clearfix small z-1" href="#">
                <span className="float-left">View Details</span>
                <span className="float-right">
                  <i className="fa fa-angle-right"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
        <Posts />
      </div>
    );
  }
}

export default adminLayout(DashboardPage);
