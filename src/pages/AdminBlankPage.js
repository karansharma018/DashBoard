import React from "react";
import adminLayout from "../hoc/adminLayout";
import SearchBar from "../components/searchbar/SearchBar";
import { Preloader, Bars } from "react-preloader-icon";
import { Card, Stack } from "react-bootstrap";
import Data from "./api/SampleData.json";
import { handler } from "./api/generate";
console.log(Data);
const Keys = Object.entries(Data);

const Loader = () => {
  return (
    <div className="loading-page">
      <div className="center">
        <Preloader
          use={Bars}
          size={60}
          strokeWidth={10}
          strokeColor="#f7b085"
          duration={600}
        />
      </div>
    </div>
  );
};
class AdminBlankPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { search: "", Result: [], loading: false, Data: Keys };
    this.onSubmit = this.onSubmit.bind(this);
  }
  handleSearch = (value) => {
    this.setState({
      search: value,
    });
  };
  async onSubmit(event) {
    event.preventDefault();
    this.setState({
      loading: true,
    });

    const response = await handler(this.state.search);

    const data = await response;

    this.setState({
      Result: data.result,
    });
    this.setState({
      loading: false,
    });
    this.handleSearch("");
    console.log(data, response);
  }

  render() {
    return this.state.loading ? (
      <Loader />
    ) : (
      <>
        <SearchBar
          setsearch={this.handleSearch}
          search={this.state.search}
          onsubmit={this.onSubmit}
        />

        <div className="container text-capitalize my-3">
          <Card
            style={{
              minWidth: 400,
              border: "1px solid #1C9CEA",
              height: "100%",
            }}
          >
            <Card.Body className="d-flex flex-column">
              <Stack>
                <div className="d-flex gap-2 mb-3 flex-column">
                  <div className=" h2">Books</div>

                  <div>
                    {this.state.Data.map((e, i) => (
                      <div key={i}>
                        {e[1].authors?.map((items, index) => (
                          <div key={index}>
                            <Card.Title className="fs-6 fw-bold mt-3">
                              {e[0]}
                            </Card.Title>
                            <Card.Text className=" fw-bold mb-0">
                              {items?.name}
                            </Card.Text>
                            <Card.Text className=" mb-0">
                              Visit:
                              <a
                                href={items?.url}
                                target="_blank"
                                style={{
                                  cursor: "pointer",
                                  textTransform: "lowercase",
                                }}
                              >
                                {"   "} {items?.url}
                              </a>
                            </Card.Text>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                <Card.Text className="mb-1"></Card.Text>
              </Stack>
            </Card.Body>
          </Card>
          <Card
            style={{
              minWidth: 400,
              border: "1px solid #1C9CEA",
              height: "100%",
            }}
          >
            <Card.Body className="d-flex flex-column">
              <Stack>
                <div className="d-flex gap-2 mb-3 flex-column">
                  <div className="h2">Blogs</div>
                  <div>
                    {this.state.Data.map((e, i) => (
                      <div key={i}>
                        {e[1].blogs?.map((items, index) => (
                          <div key={index}>
                            <Card.Title className="fs-6 fw-bold mt-3">
                              {e[0]}
                            </Card.Title>
                            <Card.Text className=" fw-bold mb-0">
                              {items?.title}
                            </Card.Text>
                            <Card.Text className=" mb-0">
                              Visit:
                              <a
                                href={items?.url}
                                target="_blank"
                                style={{
                                  cursor: "pointer",
                                  textTransform: "lowercase",
                                }}
                              >
                                {"   "} {items?.url}
                              </a>
                            </Card.Text>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                <Card.Text className="mb-1"></Card.Text>
              </Stack>
            </Card.Body>
          </Card>
          <Card
            style={{
              minWidth: 400,
              border: "1px solid #1C9CEA",
              height: "100%",
            }}
          >
            <Card.Body className="d-flex flex-column">
              <Stack>
                <div className="d-flex gap-2 mb-3 flex-column">
                  <div className="h2">Research Papers</div>
                  <div>
                    {this.state.Data.map((e, i) => (
                      <div key={i}>
                        {e[1].research_papers?.map((items, index) => (
                          <div key={index}>
                            <Card.Title className="fs-6 fw-bold mt-3">
                              {e[0]}
                            </Card.Title>
                            <Card.Text className=" fw-bold mb-0">
                              {items?.title}
                            </Card.Text>
                            <Card.Text className=" mb-0">
                              Visit:
                              <a
                                href={items?.url}
                                target="_blank"
                                style={{
                                  cursor: "pointer",
                                  textTransform: "lowercase",
                                }}
                              >
                                {"   "}
                                {items?.url}
                              </a>
                            </Card.Text>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                <Card.Text className="mb-1"></Card.Text>
              </Stack>
            </Card.Body>
          </Card>
          <Card
            style={{
              minWidth: 400,
              border: "1px solid #1C9CEA",
              height: "100%",
            }}
          >
            <Card.Body className="d-flex flex-column">
              <Stack>
                <div className="d-flex gap-2 mb-3 flex-column">
                  <div className=" h2">Videos</div>
                  <div>
                    {this.state.Data.map((e, i) => (
                      <div key={i}>
                        {e[1].videos?.map((items, index) => (
                          <div key={index}>
                            <Card.Title className="fs-6 fw-bold mt-3">
                              {e[0]}
                            </Card.Title>
                            <Card.Text className=" fw-bold mb-0">
                              {items?.title}
                            </Card.Text>
                            <Card.Text className=" mb-0">
                              Visit:
                              <a
                                href={items?.url}
                                target="_blank"
                                style={{
                                  cursor: "pointer",
                                  textTransform: "lowercase",
                                }}
                              >
                                {"   "} {items?.url}
                              </a>
                            </Card.Text>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                <Card.Text className="mb-1"></Card.Text>
              </Stack>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }
}

export default adminLayout(AdminBlankPage);
